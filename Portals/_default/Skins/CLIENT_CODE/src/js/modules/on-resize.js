function onResize(fn, delay = 250) {
  let resizeTimer;
  // window.resize event listener
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    // start timer to wait for event "completion"
    resizeTimer = setTimeout(fn, delay);
  });
}

export default onResize;
