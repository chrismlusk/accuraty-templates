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

function transformHeader() {
  const header = document.querySelector('.header');
  let lastScroll = 0;
  let scrolling = false;

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

  window.addEventListener('scroll', () => {
    scrolling = true;
  });

  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      hideOnScroll();
    }
  }, 250);
}

export default transformHeader;
