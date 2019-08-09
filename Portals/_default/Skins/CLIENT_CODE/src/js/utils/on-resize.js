import srraf from 'srraf';

function onResize(callback) {
  if (typeof callback !== 'function') {
    throw new Error('You must pass a callback function to `onResize`');
  }

  srraf(({ vh, pvh, vw, pvw }) => {
    if (vh !== pvh || vw !== pvw) {
      callback();
    }
  });
}

export default onResize;
