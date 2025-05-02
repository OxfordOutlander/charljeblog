# How to Write Posts for This Jekyll Blog

This guide explains how to create, format, and manage blog posts for your Jekyll site, including working with themes (tags), custom excerpts, and other features.

## Table of Contents
- [Post File Structure](#post-file-structure)
- [Front Matter](#front-matter)
- [Writing Content](#writing-content)
- [Custom Excerpts](#custom-excerpts)
- [Themes (Tags)](#themes-tags)
- [Adding Images](#adding-images)
- [Adding Code Snippets](#adding-code-snippets)
- [Creating Footnotes](#creating-footnotes)
- [Managing Posts](#managing-posts)

## Post File Structure

All blog posts live in the `_posts` directory and follow a specific naming convention:

```
YYYY-MM-DD-title-with-hyphens.md
```

For example:
```
2025-04-16-hello-world.md
2025-05-10-understanding-jekyll.md
```

The date in the filename determines when the post was published. Posts with future dates won't appear until that date (unless you set `future: true` in `_config.yml`).

## Front Matter

Every post starts with YAML front matter between triple-dashed lines:

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-04-16 12:00:00 -0000
categories: [category1, category2]
tags: [tag1, tag2, tag3]
custom_excerpt: "This is a custom excerpt that appears at the top of the post and also in post listings."
---
```

### Front Matter Fields

- **layout**: Usually "post" (don't change this)
- **title**: The title of your post
- **date**: Publication date and time (overrides the date in the filename)
- **categories**: Categories for your post (optional)
- **tags**: Themes/tags for your post (these will appear in the themes section)
- **custom_excerpt**: A brief summary that appears at the top of your post and in post listings

## Writing Content

After the front matter, write your post content using Markdown:

### Basic Markdown

```markdown
# Heading 1 (usually not used in posts since the title is already h1)
## Heading 2
### Heading 3

Paragraphs are separated by blank lines.

*Italic text* or _italic text_
**Bold text** or __bold text__
[Link text](https://example.com)
![Alt text for image](path/to/image.jpg)

* Bullet point
* Another bullet point

1. Numbered item
2. Another numbered item

> Blockquote text
```

### Special Features

This blog has some special features beyond standard Markdown:

## Custom Excerpts

The `custom_excerpt` in the front matter serves two purposes:

1. It appears at the top of your post in a styled box
2. It's used in post listings on the homepage and theme pages

Example:
```yaml
custom_excerpt: "Learn how to deploy your Jekyll blog to Vercel for lightning-fast global hosting. This guide walks through the deployment process, highlighting Vercel's benefits including automatic builds, preview deployments, and seamless GitHub integration."
```

Guidelines for good excerpts:
- Keep them under 2 sentences (about 30-50 words)
- Clearly summarize what the post is about
- Don't include footnotes or complex formatting
- Written in italics to distinguish from main content

## Themes (Tags)

The blog uses a theme system (which is based on Jekyll's tags):

1. Each post can have multiple themes
2. Themes are defined in the front matter
3. All themes are displayed on the `/themes/` page
4. Each theme has its own page with related posts

Example of setting themes:
```yaml
tags: [jekyll, static-site, tutorial, deployment]
```

Themes appear in the post header and can be clicked to view related posts.

Users can also select multiple themes on the themes page to find posts that include all selected themes.

## Adding Images

Store images in the `assets/images/` directory and reference them in Markdown:

```markdown
![Image description](/assets/images/your-image.jpg)
```

For responsive images, you can use HTML instead:

```html
<img src="/assets/images/your-image.jpg" alt="Image description" class="responsive-img">
```

## Adding Code Snippets

For inline code, use backticks: `` `code` ``

For code blocks, use triple backticks with optional language specification:

````markdown
```javascript
function hello() {
  console.log("Hello, world!");
}
```
````

## Creating Footnotes

To add a footnote, use this syntax:

```markdown
Here is text with a footnote[^1].

[^1]: This is the footnote content.
```

You can use any number or name for the footnote identifier as long as it matches the reference.

The footnotes will appear at the bottom of the post, but they also have a hover effect that shows the footnote content when users hover over the footnote number.

## Managing Posts

### Deleting Posts

To delete a post, simply remove its file from the `_posts` directory:

```bash
rm _posts/2025-04-16-unwanted-post.md
```

When you remove a post:
- The post will no longer appear on the site
- Any themes (tags) unique to that post will be automatically removed
- Themes used by other posts will remain available

### Editing Posts

To edit a post, simply edit its Markdown file. Changes will take effect when:

1. You rebuild the site locally (`bundle exec jekyll serve`)
2. You push changes to GitHub (if using CI/CD deployment)

### Creating a New Post

The easiest way to create a new post is to copy an existing one and modify it:

```bash
cp _posts/2025-04-16-hello-world.md _posts/$(date +%Y-%m-%d)-my-new-post.md
```

Then edit the new file, making sure to update:
- The title in the front matter
- The date (should match the filename)
- The categories and tags
- The custom excerpt
- The content

### Preview Before Publishing

You can preview posts locally by running:

```bash
bundle exec jekyll serve
```

This starts a local server at http://localhost:4000/ where you can see your changes.

---

## Example Post Template

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-04-16 12:00:00 -0000
categories: [category1, category2]
tags: [theme1, theme2, theme3]
custom_excerpt: "A brief, compelling summary of your post that appears at the top and in post listings. Keep it under 2 sentences and make it engaging."
---

## Introduction

Your introduction paragraph here. Set the stage for what your post will cover.

## Main Section 1

Content for your first main section.

### Subsection

More detailed content.

## Main Section 2

Content for your second main section.

## Conclusion

Wrap up your post with a conclusion.

[^1]: This is an optional footnote.
```

Remember that the most important elements are:
1. Correct filename format
2. Complete front matter with title, date, tags, and custom_excerpt
3. Well-structured content using Markdown
4. Appropriate use of themes/tags to categorize your post

Happy blogging!