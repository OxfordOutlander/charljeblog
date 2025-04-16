module Jekyll
  class TagPageGenerator < Generator
    safe true

    def generate(site)
      return unless site.layouts.key? 'tag'
      
      all_tags = []
      
      # Collect all tags from all posts
      site.posts.docs.each do |post|
        if post.data['tags'].is_a?(Array)
          all_tags.concat(post.data['tags'])
        end
      end
      
      # Create a page for each unique tag
      all_tags.uniq.each do |tag|
        site.pages << TagPage.new(site, site.source, tag)
      end
    end
  end

  class TagPage < Page
    def initialize(site, base, tag)
      @site = site
      @base = base
      @dir = File.join('tags')
      @name = "#{tag}.html"

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag.html')
      self.data['tag'] = tag
      self.data['title'] = "Posts tagged with #{tag}"
    end
  end
end