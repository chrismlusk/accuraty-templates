import srraf from 'srraf';

function onScroll(callback) {
  if (typeof callback !== 'function') {
    throw new Error('You must pass a callback function to `onScroll`');
  }

  srraf(({ x, px, y, py }) => {
    if (x !== px || y !== py) {
      callback();
    }
  });
}

export default onScroll;
