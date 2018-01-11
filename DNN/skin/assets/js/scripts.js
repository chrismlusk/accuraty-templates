(function( root, $, undefined ) {
  "use strict";

  $(function () {

    // DOM is ready. Code away!




    //
    // Toggle element visibility on scroll
    // ===================================
    //
    // A set of functions to reveal or hide an element on scroll by
    // calculating window position. Modify and adapt the provided functions to
    // meet your needs.
    //
    // --
    //
    // 1. Distance in pixels a user must scroll before the element is visible.
    //
    // 2. The distance in pixels from the top of the window users must scroll
    //    past when returning to the top before the element is hidden again.
    //
    // 3. Run whichever function you want at this point.
    // ------------------------------------------------------------------------

    var didScroll = null,
        lastScrollTop = 0,
        showElementAt = 400, // 1
        hideElementAt = 300, // 2
        header = $('.header');

    $(window).scroll(function() {
      didScroll = true;
    });

    setInterval(function() {
      if ( didScroll ) {
        revealElementOnScroll(header, showElementAt, hideElementAt); // 3
        didScroll = false;
      }
    }, 250);

    function hideElementOnScroll(element, visiblePoint, hiddenPoint) {
      var st = $(window).scrollTop();

      // If not scrolled past the `hiddenPoint`, don't do anything
      if ( Math.abs(lastScrollTop - st) <= hiddenPoint ) {
        return;
      }

      // If scrolled down far enough, hide the element
      if ( st > lastScrollTop && st > hiddenPoint ){
        element.addClass('is-hidden');
      } else if ( st < visibilePoint ) {
          // Else if scrolled up past the `visibilePoint`, remove hidden class
          element.removeClass('is-hidden');
      }

      lastScrollTop = st;
    }

    function revealElementOnScroll(element, visiblePoint, hiddenPoint) {
      var st = $(window).scrollTop();

      // If not scrolled past the `visiblePoint`, don't do anything
      if ( Math.abs(lastScrollTop - st) <= visiblePoint ) {
        return;
      }

      // If scrolled down far enough, show the element
      if ( st > lastScrollTop && st > visiblePoint ){
        element.removeClass('is-hidden');
      } else if ( st < hiddenPoint ) {
          // Else if scrolled up past the `hiddenPoint`, add hidden class
          element.addClass('is-hidden');
      }

      lastScrollTop = st;
    }

  });

} ( this, jQuery ));
