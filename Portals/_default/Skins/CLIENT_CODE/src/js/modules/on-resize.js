import debounce from '../utils/debounce';

function onResize(callback, wait = 250) {
  window.addEventListener('resize', debounce(callback, wait));
}

export default onResize;
