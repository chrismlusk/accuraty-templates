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

import throttle from '../utils/throttle';

function transformHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;

  function hideOnScroll() {
    const triggerPosition = 300; // 1
    const className = 'is-hidden'; // 2
    const scroll =
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      window.pageYOffset;

    if (scroll >= triggerPosition && lastScroll <= scroll) {
      header.classList.add(className);
    } else {
      header.classList.remove(className);
    }

    lastScroll = scroll <= 0 ? 0 : scroll; // 3
  }

  window.addEventListener('scroll', throttle(hideOnScroll, 250));
}

export default transformHeader;
