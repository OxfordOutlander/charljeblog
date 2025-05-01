document.addEventListener('DOMContentLoaded', function() {
  const themeLinks = document.querySelectorAll('.tag-cloud .tag-link');
  const themeSections = document.querySelectorAll('.tag-section');
  const selectedThemes = new Set();
  const allPostsMap = new Map();
  
  // Create a map of all posts with their themes for efficient filtering
  document.querySelectorAll('.tag-section').forEach(section => {
    const themeName = section.id;
    section.querySelectorAll('.post-list li').forEach(post => {
      const postKey = post.querySelector('.post-link').textContent;
      if (!allPostsMap.has(postKey)) {
        allPostsMap.set(postKey, {
          element: post.cloneNode(true),
          themes: new Set([themeName])
        });
      } else {
        allPostsMap.get(postKey).themes.add(themeName);
      }
    });
  });
  
  // Create filtered results container
  const filteredResultsContainer = document.createElement('div');
  filteredResultsContainer.className = 'filtered-results';
  filteredResultsContainer.innerHTML = '<ul class="post-list"></ul>';
  filteredResultsContainer.style.display = 'none';
  document.querySelector('.tag-list').before(filteredResultsContainer);
  
  // No clear selection button, users can click the theme again to deselect
  
  // Handle theme click
  themeLinks.forEach(themeLink => {
    themeLink.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get theme name from the link
      const href = this.getAttribute('href');
      const themeName = href.split('/').pop().replace('.html', '');
      
      // Toggle theme selection
      if (selectedThemes.has(themeName)) {
        selectedThemes.delete(themeName);
        this.classList.remove('selected');
      } else {
        selectedThemes.add(themeName);
        this.classList.add('selected');
      }
      
      updateFilteredResults();
      return false;
    });
  });
  
  // Update the filtered results based on selected themes
  function updateFilteredResults() {
    const filteredList = filteredResultsContainer.querySelector('.post-list');
    filteredList.innerHTML = '';
    
    if (selectedThemes.size === 0) {
      // Show all theme sections, hide filtered results
      themeSections.forEach(section => section.style.display = 'block');
      filteredResultsContainer.style.display = 'none';
      return;
    }
    
    // Show filtered results, hide theme sections
    filteredResultsContainer.style.display = 'block';
    themeSections.forEach(section => section.style.display = 'none');
    
    // No title needed for filtered results
    
    // Filter posts that have ALL selected themes
    allPostsMap.forEach((postData, postKey) => {
      let shouldInclude = true;
      selectedThemes.forEach(theme => {
        if (!postData.themes.has(theme)) {
          shouldInclude = false;
        }
      });
      
      if (shouldInclude) {
        filteredList.appendChild(postData.element.cloneNode(true));
      }
    });
    
    // Show message if no results
    if (filteredList.children.length === 0) {
      const noResults = document.createElement('li');
      noResults.className = 'no-results';
      noResults.textContent = 'No posts are connected to all selected themes';
      filteredList.appendChild(noResults);
    }
  }
  
});