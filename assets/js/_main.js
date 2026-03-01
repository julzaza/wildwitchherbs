// Minimal JS - only greedy navigation
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  function init() {
    var btn = document.querySelector('.greedy-nav__toggle');
    var hiddenLinks = document.querySelector('.hidden-links');
    
    if (!btn || !hiddenLinks) {
      console.log('Navigation elements not found');
      return;
    }
    
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      hiddenLinks.classList.toggle('hidden');
      this.classList.toggle('close');
      console.log('Menu toggled');
    });
    
    console.log('Navigation initialized');
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
