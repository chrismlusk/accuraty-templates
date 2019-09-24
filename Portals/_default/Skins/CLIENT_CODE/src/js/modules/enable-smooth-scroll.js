//
// Enable smooth scroll
// ====================
//
// How to use this module:
//
// Import it where you want the functionality to be active, and invoke it.
// (Example: If site-wide, `main.js`. If only on homepage links, `home.js`.)
//
//   `import enableSmoothScroll from './modules/enable-smooth-scroll';`
//   `enableSmoothScroll();`
// ----------------------------------------------------------------------------

function enableSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  if (!links.length) return;

  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  function handleAnchorLink(event) {
    event.preventDefault();

    const targetID = event.target.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;

    // https://developer.mozilla.org/Web/API/ScrollToOptions
    const scrollOptions = {
      top: distanceToTop(targetAnchor),
      left: 0,
      behavior: 'smooth',
    };

    // https://developer.mozilla.org/Web/API/Window/scrollBy
    window.scrollBy(scrollOptions);

    const checkIfDone = setInterval(function() {
      const atBottom =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 2;
      if (distanceToTop(targetAnchor) === 0 || atBottom) {
        targetAnchor.tabIndex = '-1';
        targetAnchor.focus();
        window.history.pushState('', '', targetID);
        clearInterval(checkIfDone);
      }
    }, 100);
  }

  links.forEach(link => {
    link.addEventListener('click', handleAnchorLink);
  });
}

export default enableSmoothScroll;
