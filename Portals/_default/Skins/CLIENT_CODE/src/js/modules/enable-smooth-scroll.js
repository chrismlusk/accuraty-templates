//
// Enable smooth scroll
// ====================
//
// How to use this module:
//
//   `import enableSmoothScroll from './modules/enable-smooth-scroll';`
//   `enableSmoothScroll();`
// ----------------------------------------------------------------------------

import isReducedMotion from '../utils/is-reduced-motion';
import getElementStyle from '../utils/get-element-style';

function enableSmoothScroll(providedOffset = 50) {
  const links = document.querySelectorAll('a[href^="#"]');
  if (!links.length) return;

  // https://developers.google.com/web/updates/2019/03/prefers-reduced-motion
  const prefersReducedMotion = isReducedMotion();

  // Space between top of the window and the anchor.
  let offset = providedOffset;

  // If the header is fixed, add its height to the `offset` value.
  const header = document.querySelector('.header');
  if (getElementStyle(header, 'position') === 'fixed') {
    offset += header.getBoundingClientRect().height;
  }

  function distanceToTop(node) {
    return Math.floor(node.getBoundingClientRect().top) - offset;
  }

  function handleAnchorLink(event) {
    event.preventDefault();

    const id = event.target.getAttribute('href');
    const anchor = document.querySelector(id);
    if (!anchor) return;

    // https://developer.mozilla.org/Web/API/ScrollToOptions
    const scrollOptions = {
      top: distanceToTop(anchor),
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    };

    // https://developer.mozilla.org/Web/API/Window/scrollBy
    window.scrollBy(scrollOptions);

    // To prevent accessibility issues, we handle the focus change by setting
    // the `tabIndex` and focusing on the element. Then to adhere to standard
    // behavior, add the hash to the end of the URL. Because changing focus
    // too early breaks everything, use an interval to make sure the element
    // has scrolled to top or we are at the bottom of the page.
    const checkIfDone = setInterval(() => {
      const atBottom =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 2;
      if (distanceToTop(anchor) === 0 || atBottom) {
        anchor.tabIndex = '-1';
        anchor.focus();
        window.history.pushState('', '', id);
        clearInterval(checkIfDone);
      }
    }, 100);
  }

  links.forEach(link => {
    link.addEventListener('click', handleAnchorLink);
  });
}

export default enableSmoothScroll;
