(function( root, $, undefined ) {
  "use strict";

  $(function () {

    //
    // Constants
    // =========
    //
    // Defined variables that are global and permanent.
    // ------------------------------------------------------------------------

    var BODY = $('#Body');




    //
    // Is DNN Persona Bar active?
    // ==========================
    //
    // As of now, DNN 9 does not apply any classes to the `<body>` when the
    // Persona Bar is active (it did previously with the Control Bar). The
    // `.dnnEditState` class is added when you enter Edit mode, but that's it.
    //
    // 1. DNN adds the Persona Bar via an iframe, and `.personalBarContainer`
    //    is the class applied to the iframe container. Notice that is
    //    "personal" with an "L" and not "persona"? Hooray for consistency...
    //
    // 2. To check if the element exists, use the `length` property. This will
    //    return `0` if it does not exist and the statement will fail.
    //
    // 3. Add custom `.hasDnnPersonaBar` class to the `<body>` if the element
    //    does exist. Note: Use camel case to match other DNN-injected classes.
    //
    // @author Chris Lusk
    // @date 3/1/2017
    // ------------------------------------------------------------------------

    var dnnPersonaBar = $('.personalBarContainer'); // 1

    if (dnnPersonaBar.length) { // 2
      BODY.addClass('hasDnnPersonaBar'); // 3
    }




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
        hideElementOnScroll(header, showElementAt, hideElementAt); // 3
        didScroll = false;
      }
    }, 200);

    function hideElementOnScroll(element, visiblePoint, hiddenPoint) {
      var st = $(window).scrollTop();

      // If not scrolled past the `hiddenPoint`, don't do anything
      if ( Math.abs(lastScrollTop - st) <= hiddenPoint ) {
        return;
      }

      // If scrolled down far enough, hide the element
      if ( st > lastScrollTop && st > hiddenPoint ){
        element.addClass('is-hidden');
      } else if ( st < visiblePoint ) {
          // Else if scrolled up past the `visiblePoint`, remove hidden class
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
