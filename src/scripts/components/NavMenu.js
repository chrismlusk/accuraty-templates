import $ from 'jquery';
import isTouchDevice from '../lib/is-touch-device';

export default class NavMenu {
  static defaults = {
    activeClass: 'show',
    dropdown: '.dropdown',
    dropdownMenu: '.dropdown-menu',
    dropdownOnHover: true,
    dropdownOnHoverClass: 'dropdown--hoverable',
    dropdownToggle: '.dropdown-toggle',
  };

  constructor(element, config = {}) {
    this.element = element;
    this.config = { ...NavMenu.defaults, ...config };
    this.isTouchDevice = isTouchDevice();
    this.init();
  }

  init() {
    this.createChildRefs().enable();
    return this;
  }

  createChildRefs() {
    if (this.config.dropdownOnHover) {
      this.dropdowns = [...this.element.querySelectorAll(this.config.dropdown)];
    }

    return this;
  }

  enable() {
    if (!this.isTouchDevice && this.config.dropdownOnHover) {
      this.dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', this.handleDropdownMouseEvent);
        dropdown.addEventListener('mouseleave', this.handleDropdownMouseEvent);

        // Extend the hoverable area behind the dropdown menu so it
        // doesn't close as soon as your cursor leaves the the element.
        dropdown.classList.add(this.config.dropdownOnHoverClass);

        const toggle = dropdown.querySelector(this.config.dropdownToggle);
        toggle.addEventListener('click', this.handleToggleClick);
      });
    }

    return this;
  }

  handleDropdownMouseEvent = event => {
    const $toggle = $(`#${event.target.firstElementChild.id}`);

    if (event.type === 'mouseenter') {
      $toggle.dropdown('show');
    } else {
      $toggle.dropdown('hide');
      $toggle.blur();
    }
  };

  handleToggleClick = event => {
    const toggle = event.target;

    if (toggle.getAttribute('aria-expanded') === 'true') {
      const href = toggle.getAttribute('href');

      if (href && href !== '#') {
        location.href = href;
      }
    }

    event.preventDefault();
  };
}
