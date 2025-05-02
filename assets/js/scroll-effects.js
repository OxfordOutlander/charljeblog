/* BACKGROUND GIF EFFECT DISABLED
document.addEventListener('DOMContentLoaded', function() {
  // Create the background element if it doesn't exist
  if (!document.querySelector('.scroll-reveal-bg')) {
    const bgElement = document.createElement('div');
    bgElement.className = 'scroll-reveal-bg';
    document.body.appendChild(bgElement);
  }

  // Function to handle scroll events
  function handleScroll() {
    const scrollPosition = window.scrollY;
    const bgElement = document.querySelector('.scroll-reveal-bg');
    
    // Show the background when scrolled down 200px
    if (scrollPosition > 200) {
      bgElement.classList.add('visible');
    } else {
      bgElement.classList.remove('visible');
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Initialize on page load
  handleScroll();
});
*/