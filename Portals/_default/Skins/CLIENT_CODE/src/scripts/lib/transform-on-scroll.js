//
// Transform on scroll
// ===================
//
// 1. Distance from the top that triggers the visibility change.
//
// 2. The class you want to toggle from the element.
// ------------------------------------------------------------------------

import monitorScroll from 'srraf';

export default function transformOnScroll(element, options = {}) {
  if (typeof element === 'undefined') {
    throw new Error('transformOnScroll requires an element');
  }

  const {
    transformPosition = 0, // 1
    transformClass = 'has-scrolled', // 2
    onScrollUp,
    onScrollDown,
  } = options;

  monitorScroll(({ y }) => {
    if (y > transformPosition) {
      element.classList.add(transformClass);
      onScrollDown && onScrollDown();
    } else {
      element.classList.remove(transformClass);
      onScrollUp && onScrollUp();
    }
  }).update();
}
