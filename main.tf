provider "aws" {
  region = "us-east-1"
}

# ------------------------------------------------------------------
# S3 bucket for static website 
# ------------------------------------------------------------------
resource "aws_s3_bucket" "static_site" {
  bucket = "poptooth-static-site-bucket"
}

resource "aws_s3_bucket_website_configuration" "static_site" {
  bucket = aws_s3_bucket.static_site.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

# -------------------------------------------------------------------
# S3 bucket policy to allow public read access
# -------------------------------------------------------------------
resource "aws_s3_bucket_public_access_block" "static_site" {    
  bucket = aws_s3_bucket.static_site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "public_access" {
  bucket = aws_s3_bucket.static_site.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.static_site.arn}/*"
      }
    ]
  })

  depends_on = [aws_s3_bucket_public_access_block.static_site]
}

# --------------------------------------------------------------------
# Upload website files to S3 bucket
# --------------------------------------------------------------------
resource "aws_s3_object" "website_files" {
  for_each = fileset("${path.module}/Poptooth Website", "**")

  bucket       = aws_s3_bucket.static_site.id
  key          = each.value
  source       = "${path.module}/Poptooth Website/${each.value}"
  etag         = filemd5("${path.module}/Poptooth Website/${each.value}") 
  content_type = lookup(var.mime_types, regex("[^.]+$", each.value), "application/octet-stream")
}

# --- ----------------------------------------------------------------
# CloudFront Distribution for the S3 static website
# --------------------------------------------------------------------
resource "aws_cloudfront_distribution" "static_site" {
  origin {
    domain_name = aws_s3_bucket.static_site.bucket_regional_domain_name
    origin_id   = "s3-origin"
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3-origin"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}