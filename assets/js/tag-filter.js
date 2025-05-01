document.addEventListener('DOMContentLoaded', function() {
  const tagLinks = document.querySelectorAll('.tag-cloud .tag-link');
  const tagSections = document.querySelectorAll('.tag-section');
  const selectedTags = new Set();
  const allPostsMap = new Map();
  
  // Create a map of all posts with their tags for efficient filtering
  document.querySelectorAll('.tag-section').forEach(section => {
    const tagName = section.id;
    section.querySelectorAll('.post-list li').forEach(post => {
      const postKey = post.querySelector('.post-link').textContent;
      if (!allPostsMap.has(postKey)) {
        allPostsMap.set(postKey, {
          element: post.cloneNode(true),
          tags: new Set([tagName])
        });
      } else {
        allPostsMap.get(postKey).tags.add(tagName);
      }
    });
  });
  
  // Create filtered results container
  const filteredResultsContainer = document.createElement('div');
  filteredResultsContainer.className = 'filtered-results';
  filteredResultsContainer.innerHTML = '<h2>Posts with Selected Tags</h2><ul class="post-list"></ul>';
  filteredResultsContainer.style.display = 'none';
  document.querySelector('.tag-list').before(filteredResultsContainer);
  
  // Add clear selection button
  const clearButton = document.createElement('button');
  clearButton.textContent = 'Clear Selection';
  clearButton.className = 'clear-tags-btn';
  clearButton.style.display = 'none';
  clearButton.addEventListener('click', clearTagSelection);
  document.querySelector('.tag-cloud').append(clearButton);
  
  // Handle tag click
  tagLinks.forEach(tagLink => {
    tagLink.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get tag name from the link
      const href = this.getAttribute('href');
      const tagName = href.split('/').pop().replace('.html', '');
      
      // Toggle tag selection
      if (selectedTags.has(tagName)) {
        selectedTags.delete(tagName);
        this.classList.remove('selected');
      } else {
        selectedTags.add(tagName);
        this.classList.add('selected');
      }
      
      updateFilteredResults();
      return false;
    });
  });
  
  // Update the filtered results based on selected tags
  function updateFilteredResults() {
    const filteredList = filteredResultsContainer.querySelector('.post-list');
    filteredList.innerHTML = '';
    
    if (selectedTags.size === 0) {
      // Show all tag sections, hide filtered results
      tagSections.forEach(section => section.style.display = 'block');
      filteredResultsContainer.style.display = 'none';
      clearButton.style.display = 'none';
      return;
    }
    
    // Show clear button
    clearButton.style.display = 'inline-block';
    
    // Show filtered results, hide tag sections
    filteredResultsContainer.style.display = 'block';
    tagSections.forEach(section => section.style.display = 'none');
    
    // Filter posts that have ALL selected tags
    allPostsMap.forEach((postData, postKey) => {
      let shouldInclude = true;
      selectedTags.forEach(tag => {
        if (!postData.tags.has(tag)) {
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
      noResults.textContent = 'No posts match all selected tags';
      filteredList.appendChild(noResults);
    }
  }
  
  // Clear all selected tags
  function clearTagSelection() {
    selectedTags.clear();
    tagLinks.forEach(link => link.classList.remove('selected'));
    updateFilteredResults();
  }
});