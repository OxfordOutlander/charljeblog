=begin
module Jekyll
  class TagPageGenerator < Generator
    safe true

    def generate(site)
      return unless site.layouts.key? 'tag' # Using the same layout for themes
      
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
      @dir = File.join('themes')
      @name = "#{tag}.html"

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag.html')
      self.data['tag'] = tag
      self.data['title'] = "Posts connected to Theme #{tag}"
    end
  end
end
=end

# Add a filter to remove footnotes from excerpts
module Jekyll
  module FootnoteFilter
    def remove_footnotes(input)
      input.to_s.gsub(/\[\^(\d+)\](\:(.*?)\n)?/, '')
    end
  end
end

Liquid::Template.register_filter(Jekyll::FootnoteFilter)