import $ from 'jquery';
import isTouchDevice from '../lib/is-touch-device';
export default class NavMenu {
  static defaults = {
    activeClass: 'show',
    dropdownTrigger: '.dropdown',
    enableDropdownOnHover: true,
  };

  constructor(element, options) {
    this.element = element;
    this.options = { ...NavMenu.defaults, ...options };
    this.isTouchDevice = isTouchDevice();
    this.init();
  }

  init() {
    this.createChildRefs().enable();
    return this;
  }

  createChildRefs() {
    if (this.options.enableDropdownOnHover) {
      this.dropdownTriggers = [
        ...this.element.querySelectorAll(this.options.dropdownTrigger),
      ];

      this.dropdownTriggerLinks = [
        ...this.element.querySelectorAll(`${this.options.dropdownTrigger} > a`),
      ];
    }

    return this;
  }

  enable() {
    if (!this.isTouchDevice && this.options.enableDropdownOnHover) {
      this.dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', this.handleTriggerMouseEvent);
        trigger.addEventListener('mouseleave', this.handleTriggerMouseEvent);
      });

      this.dropdownTriggerLinks.forEach(link => {
        link.addEventListener('click', this.handleTriggerLinkClick);
      });
    }

    return this;
  }

  handleTriggerLinkClick = event => {
    if (this.element.classList.contains(this.options.activeClass)) {
      return;
    }

    const parentTrigger = event.target.parentElement;

    if (parentTrigger.classList.contains(this.options.activeClass)) {
      const href = event.target.getAttribute('href');

      if (href && href !== '#') {
        location.href = href;
        return;
      }
    }

    event.preventDefault();
  };

  handleTriggerMouseEvent = event => {
    const $navLink = $(`#${event.target.firstElementChild.id}`);

    if (event.type === 'mouseenter') {
      $navLink.dropdown('show');
    } else {
      $navLink.dropdown('hide');
      $navLink.blur();
    }
  };
}
