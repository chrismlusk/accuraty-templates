/* eslint-disable no-multiple-empty-lines */

jQuery(document).ready(($) => {

  //
  // Constants
  // =========

  const body = document.querySelector('#Body');
  const header = document.querySelector('.header');




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
  // 2. Add custom `.hasDnnPersonaBar` class to the `<body>` if the element
  //    exists. Note: Use camel case to match other DNN-injected classes.
  // ------------------------------------------------------------------------

  const dnnPersona = document.querySelector('.personalBarContainer'); // 1
  if (dnnPersona) body.classList.add('hasDnnPersonaBar'); // 2




  //
  // Transform header on scroll
  // ==========================
  //
  // 1. Distance from the top that triggers the visibility change.
  //
  // 2. The class you want to toggle from the element.
  //
  // 3. For mobile or negative scrolling.
  // ------------------------------------------------------------------------

  let lastScroll = 0;
  let scrolling = false;

  function transformHeader() {
    const triggerPosition = 300;
    const className = 'is-hidden';
    const scroll = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;

    if (scroll >= triggerPosition && lastScroll <= scroll) {
      header.classList.add(className);
    } else {
      header.classList.remove(className);
    }

    lastScroll = scroll <= 0 ? 0 : scroll; // 3
  }

  window.addEventListener('scroll', () => { scrolling = true });

  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      transformHeader();
    }
  }, 250);




  //
  // Flickity
  // ========

  /* eslint-disable no-undef */
  const carouselMain = new Flickity('.carousel-main', {
    autoPlay: false,
    cellAlign: 'left',
    cellSelector: '.carousel-cell',
    wrapAround: true
  });
  /* eslint-enable no-undef */

});
