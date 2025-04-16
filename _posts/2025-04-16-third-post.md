---
layout: post
title: "Using Vercel with Jekyll"
date: 2025-04-16 16:00:00 -0000
categories: [deployment, hosting]
tags: [vercel, deployment, hosting, static-site]
---

Vercel is an excellent platform for hosting static sites like Jekyll blogs. This post explains how to deploy your Jekyll site to Vercel.

## Why Choose Vercel for Jekyll?

- **Zero Configuration**: Vercel automatically detects Jekyll and configures the build process
- **Performance**: Global CDN for fast loading times worldwide
- **Preview Deployments**: Every git push creates a preview deployment
- **Custom Domains**: Easy setup for custom domains with free SSL

## Deployment Steps

1. Push your Jekyll site to GitHub
2. Connect your GitHub repository to Vercel
3. Configure build settings if needed (usually automatic)
4. Set environment variables if necessary
5. Deploy!

Vercel will automatically build and deploy your Jekyll site for every push to your main branch.