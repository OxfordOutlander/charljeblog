# Project Plan: Jekyll Blog on Vercel

## Phase 1: Setup and Configuration (✅ COMPLETED)

1. **Initialize Jekyll Project** ✅
   - ~~Install Ruby and Jekyll~~
   - ~~Create a new Jekyll site: `jekyll new myblog`~~
   - Created necessary directory structure manually:
     - Created basic Jekyll directory structure (`_posts`, `_layouts`, `_includes`, etc.)
     - Created essential config files (`_config.yml`, `Gemfile`)
   - Test locally: `bundle exec jekyll serve`

2. **Git Repository Setup** ✅
   - ~~Initialize git repository~~ (Working in existing git repo)
   - Created `.gitignore` file for Jekyll
   - Make initial commit

3. **Configure for Vercel** ✅
   - Created `vercel.json` configuration file
   - Set up build settings in configuration

## Phase 2: Content and Design (✅ COMPLETED)

4. **Choose/Customize Theme** ✅
   - Created custom minimal theme
   - Created `_config.yml` with site settings
   - Created layout templates:
     - `default.html` layout with header, footer, and navigation
     - `post.html` layout for blog posts

5. **Create Initial Content** ✅
   - Created about page (`about.md`)
   - Created sample blog post (`_posts/2025-04-16-hello-world.md`)
   - Configured post metadata and categories

6. **Basic Styling** ✅
   - Created CSS stylesheet (`assets/css/main.css`)
   - Implemented responsive design
   - Created basic navigation

## Phase 3: Next Steps - Detailed Instructions

7. **Install Dependencies & Test Locally**
   - Install Ruby (if not already installed):
     ```bash
     # On macOS:
     brew install ruby
     # Add to PATH in .zshrc or .bash_profile:
     echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
     source ~/.zshrc
     ```
   - Install Jekyll and Bundler:
     ```bash
     gem install jekyll bundler
     ```
   - Install project dependencies:
     ```bash
     cd "/Users/charlesdavidmann2/Documents/Projects/charlje Blog v2"
     bundle install
     ```
   - Run the development server:
     ```bash
     bundle exec jekyll serve
     ```
   - View site at http://localhost:4000

8. **Add Additional Features**
   - Implement comment system (Disqus):
     1. Sign up at https://disqus.com/
     2. Add to `_layouts/post.html` before closing `</article>` tag:
        ```html
        {% if page.comments %}
        <div id="disqus_thread"></div>
        <script>
            var disqus_config = function () {
                this.page.url = '{{ site.url }}{{ page.url }}';
                this.page.identifier = '{{ page.url }}';
            };
            (function() {
                var d = document, s = d.createElement('script');
                s.src = 'https://YOUR-DISQUS-SHORTNAME.disqus.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
        </script>
        {% endif %}
        ```
     3. Add `comments: true` to front matter of posts you want comments on

   - Add social sharing buttons:
     1. Create `_includes/social-share.html`:
        ```html
        <div class="social-share">
          <h4>Share this post</h4>
          <a href="https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{ page.url }}" class="btn-social" title="Share on Twitter" target="_blank">Twitter</a>
          <a href="https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{ page.url }}" class="btn-social" title="Share on Facebook" target="_blank">Facebook</a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url={{ site.url }}{{ page.url }}&title={{ page.title }}" class="btn-social" title="Share on LinkedIn" target="_blank">LinkedIn</a>
        </div>
        ```
     2. Include in `_layouts/post.html`:
        ```liquid
        {% include social-share.html %}
        ```

   - Set up RSS feed:
     1. Already configured in `_config.yml` with jekyll-feed plugin
     2. Add link in `_includes/head.html`:
        ```html
        <link rel="alternate" type="application/rss+xml" title="{{ site.title }}" href="{{ "/feed.xml" | relative_url }}">
        ```

9. **Deploy to Vercel**
   - Push to GitHub:
     ```bash
     git add .
     git commit -m "Initial Jekyll blog setup"
     git push
     ```
   - Sign up/in at https://vercel.com/
   - Click "Add New..." > "Project"
   - Import your GitHub repository
   - Configure settings:
     - Framework preset: Other
     - Build Command: jekyll build
     - Output Directory: _site
     - Environment Variables:
       - Add JEKYLL_ENV = production
   - Click "Deploy"
   - Your site will be live at a *.vercel.app domain

10. **Set up Custom Domain (Optional)**
    - Purchase domain from a registrar (Namecheap, GoDaddy, etc.)
    - In Vercel Dashboard:
      - Go to project settings > Domains
      - Enter your domain name and click "Add"
      - Follow DNS configuration instructions to point your domain to Vercel
    - Update `url` in `_config.yml` to match your custom domain

## Phase 4: Advanced Enhancements

11. **SEO and Analytics**
    - Google Analytics setup:
      1. Sign up at https://analytics.google.com/
      2. Get your tracking ID
      3. Add to `_includes/analytics.html`:
         ```html
         <!-- Google Analytics -->
         <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-TRACKING-ID"></script>
         <script>
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'YOUR-TRACKING-ID');
         </script>
         ```
      4. Include in default layout before `</head>`
    
    - Improve SEO:
      1. Jekyll SEO tag plugin already configured
      2. Add custom SEO metadata to posts:
         ```yaml
         ---
         layout: post
         title: "Your Post Title"
         description: "A detailed description for SEO"
         image: /assets/images/post-image.jpg
         ---
         ```

12. **Performance Optimization**
    - Minify CSS/JS:
      1. Add jekyll-minifier to your Gemfile
      2. Run `bundle install`
      3. Add to `_config.yml`:
         ```yaml
         plugins:
           - jekyll-minifier
         
         jekyll-minifier:
           compress_css: true
           compress_javascript: true
         ```
    
    - Optimize images:
      1. Use tools like ImageOptim before uploading
      2. Use responsive images:
         ```html
         <img srcset="/assets/images/small.jpg 320w,
                     /assets/images/medium.jpg 800w,
                     /assets/images/large.jpg 1200w"
              sizes="(max-width: 320px) 280px,
                     (max-width: 800px) 760px,
                     1140px"
              src="/assets/images/default.jpg" alt="Description">
         ```

13. **Ongoing Maintenance**
    - Regular content updates:
      1. Create new posts in the `_posts` directory following the naming convention `YYYY-MM-DD-title.md`
      2. Use front matter to organize content
    
    - Update dependencies:
      ```bash
      bundle update
      ```
    
    - Backup your content regularly by committing to GitHub