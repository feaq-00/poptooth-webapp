# 🌐 Terraform Static Website on AWS (Poptooth)

This project provisions and hosts a static website using **Terraform**, **AWS S3**, and **CloudFront**.

🔗 **Live Demo**: [https://tinyurl.com/p0ptooth](https://tinyurl.com/p0ptooth)

---

## ✨ Key Highlights
- 📜 **Infrastructure as Code (IaC)** — Automated provisioning with Terraform.  
- 🪣 **Amazon S3** — Stores static site files (HTML, CSS, JS, images, videos).  
- 🌍 **CloudFront CDN** — Provides global caching and HTTPS for secure access.  
- 🔒 **IAM & S3 Policies** — Configured for least-privilege and secure access.  
- ⚡ **Scalability** — Static hosting architecture designed for high availability.  

---

## 🏗️ Architecture Overview

```text
🌍 User (browser)
   │  HTTPS request
   ▼
🌍 CloudFront (CDN)
   │  Fetch content (cache miss)
   ▼
🪣 Amazon S3 Bucket (static files)

📜 Terraform (IaC) ──► provisions & manages S3 + CloudFront
