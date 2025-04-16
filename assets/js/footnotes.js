// assets/js/footnotes.js
// Show footnote content in a tooltip on hover over footnote references
document.addEventListener('DOMContentLoaded', function() {
  // Find all forward footnote reference links (e.g., <a href="#fn1" id="fnref1">1</a>)
  // Select all forward footnote reference links with class 'footnote'
  const refs = Array.from(document.querySelectorAll('a.footnote[href^="#fn"]'));
  refs.forEach(ref => {
    let tooltip;
    ref.addEventListener('mouseenter', function() {
      const href = ref.getAttribute('href');
      if (!href) return;
      const footnoteId = href.slice(1);
      const footnoteItem = document.getElementById(footnoteId);
      if (!footnoteItem) return;
      // Create tooltip element
      tooltip = document.createElement('div');
      tooltip.className = 'footnote-tooltip';
      // Use the footnote item's inner HTML (including text and back-reference link)
      tooltip.innerHTML = footnoteItem.innerHTML;
      document.body.appendChild(tooltip);
      // Position tooltip near reference
      const rect = ref.getBoundingClientRect();
      const ttRect = tooltip.getBoundingClientRect();
      let top = rect.bottom + window.scrollY + 5;
      let left = rect.left + window.scrollX;
      // Prevent overflow on right
      const maxX = window.scrollX + window.innerWidth - ttRect.width - 10;
      if (left > maxX) left = maxX;
      tooltip.style.top = top + 'px';
      tooltip.style.left = left + 'px';
    });
    ref.addEventListener('mouseleave', function() {
      if (tooltip && tooltip.parentNode) {
        tooltip.parentNode.removeChild(tooltip);
        tooltip = null;
      }
    });
  });
});