/* ==========================================================================
   GREEDY NAVIGATION - Mobile Menu Only
   ========================================================================== */

$(document).ready(function() {
  var $nav = $('#site-nav');
  var $btn = $('button.greedy-nav__toggle');
  var $vlinks = $('.visible-links');
  var $hlinks = $('.hidden-links');
  
  var numOfItems = 0;
  var totalSpace = 0;
  var breakWidths = [];
  
  $vlinks.children().outerWidth(function(i, w) {
    totalSpace += w;
    numOfItems += 1;
    breakWidths.push(totalSpace);
  });
  
  var availableSpace, numOfVisibleItems, requiredSpace;
  
  function check() {
    availableSpace = $vlinks.width() - 10;
    numOfVisibleItems = $vlinks.children().length;
    requiredSpace = breakWidths[numOfVisibleItems - 1];
    
    if (requiredSpace > availableSpace) {
      $vlinks.children().last().prependTo($hlinks);
      numOfVisibleItems -= 1;
      check();
    } else if (availableSpace > breakWidths[numOfVisibleItems]) {
      $hlinks.children().first().appendTo($vlinks);
      numOfVisibleItems += 1;
    }
    
    if (numOfVisibleItems === numOfItems) {
      $btn.addClass('hidden');
    } else {
      $btn.removeClass('hidden');
    }
  }
  
  $(window).resize(function() {
    check();
  });
  
  $btn.on('click', function() {
    $hlinks.toggleClass('hidden');
    $(this).toggleClass('close');
  });
  
  check();
});
