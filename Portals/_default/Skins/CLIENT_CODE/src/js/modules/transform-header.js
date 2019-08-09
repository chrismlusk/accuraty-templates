//
// Transform header on scroll
// ==========================
//
// 1. Distance from the top that triggers the visibility change.
//
// 2. The class you want to toggle from the element.
// ------------------------------------------------------------------------

import monitorScroll from 'srraf';

function transformHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const triggerPosition = 300; // 1
  const className = 'is-hidden'; // 2

  monitorScroll(({ y, py }) => {
    if (y > triggerPosition && y >= py) {
      header.classList.add(className);
    } else {
      header.classList.remove(className);
    }
  }).update();
}

export default transformHeader;
