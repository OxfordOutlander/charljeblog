# Jekyll Blog on Vercel

A minimal, feature-rich Jekyll blog designed for easy deployment on Vercel. This project includes a responsive design, tag-based content organization, and everything you need to get started with blogging.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Local Development](#local-development)
- [Content Management](#content-management)
- [Customization](#customization)
- [Deployment](#deployment)
- [Advanced Topics](#advanced-topics)

## Project Structure

The project follows Jekyll's conventional structure with some custom additions:

```
├── _config.yml           # Main configuration file
├── _data/                # Data files for the site
├── _includes/            # Reusable components
├── _layouts/             # Layout templates
│   ├── default.html      # Main layout with header and footer
│   ├── post.html         # Blog post layout
│   └── tag.html          # Tag archive layout
├── _plugins/             # Custom Jekyll plugins
│   └── tag_generator.rb  # Generates tag pages dynamically
├── _posts/               # Blog posts (Markdown files)
├── _sass/                # Sass partials
├── _site/                # Generated site (do not edit)
├── assets/               # Static assets
│   ├── css/              # Compiled CSS
│   ├── images/           # Image files
│   └── js/               # JavaScript files
├── tags/                 # Tag archive directory
├── tags.html             # Main tags index page
├── about.md              # About page
├── index.html            # Home page
├── Gemfile               # Ruby dependencies
├── Gemfile.lock          # Locked Ruby dependencies
└── vercel.json           # Vercel deployment configuration
```

## Features

- **Responsive Design**: Mobile-friendly layout that works across all devices
- **Content Tagging**: Tag-based organization system for posts with dedicated tag pages
- **SEO Optimized**: Includes Jekyll SEO Tag plugin for better search engine visibility
- **RSS Feed**: Built-in feed generation for subscribers
- **Vercel Deployment**: Pre-configured for one-click deployment to Vercel's global CDN

## Local Development

### Prerequisites

- Ruby (version 2.6 or higher)
- RubyGems
- Bundler

### Setup

1. Install Ruby and Bundler:
   ```bash
   # On macOS:
   brew install ruby
   gem install bundler
   ```

2. Clone this repository:
   ```bash
   git clone <repository-url>
   cd "charlje Blog v2"
   ```

3. Install dependencies:
   ```bash
   bundle config set --local path 'vendor/bundle'
   bundle install
   ```

4. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

5. Visit http://localhost:4000 in your browser

### Troubleshooting

If you encounter a port conflict, you can specify a different port:
```bash
bundle exec jekyll serve --port 4001
```

## Content Management

### Creating Posts

Create new Markdown files in the `_posts` directory following the naming convention:
```
YYYY-MM-DD-title.md
```

Each post should include front matter at the top:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS -0000
categories: [category1, category2]
tags: [tag1, tag2, tag3]
---

Your post content goes here in Markdown format.
```

### Working with Tags

Tags provide a way to categorize and organize your content:

1. **Adding Tags**: Add tags to a post in the front matter under the `tags` field
2. **Tag Pages**: Each tag automatically gets its own page at `/tags/tag-name.html`
3. **Tags Index**: All tags are listed at `/tags/` with links to individual tag pages

## Customization

### Site Configuration

Edit `_config.yml` to update site-wide settings:

```yaml
title: Your Blog Title
description: Your blog description
url: "https://yourdomain.com"
```

### Styling

Modify CSS in the `/assets/css/main.css` file to customize the appearance.

### Layouts

- `_layouts/default.html`: Main structure with header and footer
- `_layouts/post.html`: Individual post template
- `_layouts/tag.html`: Tag archive page template

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Sign up/log in at [Vercel](https://vercel.com/)
3. Click "Import Project" and select your GitHub repository
4. Use these settings:
   - Framework Preset: Other
   - Build Command: `jekyll build`
   - Output Directory: `_site`
   - Environment Variables: Add `JEKYLL_ENV` = `production`
5. Click "Deploy"

### Custom Domain

To use a custom domain:
1. Purchase a domain from a registrar
2. Add the domain in Vercel's dashboard
3. Configure DNS settings as instructed by Vercel
4. Update the `url` field in `_config.yml`

## Advanced Topics

### Adding Comments

This blog is ready to integrate with comment systems like Disqus. See the project plan for implementation details.

### Social Sharing

Implement social sharing buttons by creating a partial in `_includes/social-share.html` and including it in the post layout.

### Analytics

Google Analytics can be added by inserting the tracking code in `_includes/analytics.html` and including it in the default layout.

---

This blog template is designed to be easily extensible and customizable. Feel free to modify it to suit your needs!