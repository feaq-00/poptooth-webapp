output "s3_website_url" {
  value = aws_s3_bucket_website_configuration.static_site.website_endpoint
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.static_site.domain_name
}
