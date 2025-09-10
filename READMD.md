# Terraform Static Website on AWS (Poptooth)

This project provisions a static website using Terraform, AWS S3, and CloudFront.

## Features
- S3 bucket with website configuration
- Public bucket policy (with access block override)
- Automatic file uploads via Terraform
- CloudFront distribution for HTTPS + CDN
- Deployed site: [https://tinyurl.com/p0ptooth](https://tinyurl.com/p0ptooth)

## Architecture
- **S3** stores the static site files (HTML, CSS, JS, images, videos).
- **CloudFront** provides HTTPS and global caching.
- **Terraform** manages the infrastructure as code.

## How to Deploy
1. Clone this repo
2. Install [Terraform](https://developer.hashicorp.com/terraform/downloads)
3. Configure AWS credentials (`aws configure`)
4. Run:
   ```bash
   terraform init
   terraform plan
   terraform apply
