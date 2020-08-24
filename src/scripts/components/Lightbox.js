import { buildLuminous, buildLuminousGallery } from '../lib/build-luminous';

export default class Lightbox {
  static defaults = {
    isGallery: false,
  };

  constructor(element, options) {
    this.element = element;
    this.options = { ...Lightbox.defaults, ...options };
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
    const build = this.options.isGallery ? buildLuminousGallery : buildLuminous;
    build(this.element, {});
  }
}
