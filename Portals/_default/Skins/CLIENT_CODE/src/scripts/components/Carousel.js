import buildFlickity from '../lib/build-flickity';

export default class Carousel {
  static defaults = {};

  constructor(element, options) {
    this.element = element;
    this.options = { ...Carousel.defaults, ...options };
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
    buildFlickity(this.element, {});
  }
}
