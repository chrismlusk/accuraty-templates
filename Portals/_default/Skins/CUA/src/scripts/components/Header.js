import transformOnScroll from '../lib/transform-on-scroll';

export default class Header {
  static defaults = {
    transformPosition: 0,
    transformClass: 'has-scrolled',
  };

  constructor(element, options) {
    this.element = element;
    this.options = { ...Header.defaults, ...options };
    this.init();
  }

  init() {
    this.createChildRefs().enable();
    return this;
  }

  createChildRefs() {
    return this;
  }

  enable() {
    transformOnScroll(this.element, {
      transformPosition: this.options.transformPosition,
      transformClass: this.options.transformClass,
    });
  }
}
