export default class NavMenu {
  static defaults = {
    activeClass: 'show',
    dropdownTrigger: '.dropdown',
    enableDropdownOnHover: true,
  };

  constructor(element, options) {
    this.element = element;
    this.options = { ...NavMenu.defaults, ...options };
    this.init();
  }

  init() {
    this.createChildRefs().enable();
    return this;
  }

  createChildRefs() {
    if (this.options.enableDropdownOnHover) {
      this.dropdownTriggers = [
        ...this.element.querySelectorAll(NavMenu.defaults.dropdownTrigger),
      ];

      this.dropdownTriggerLinks = [
        ...this.element.querySelectorAll(
          `${NavMenu.defaults.dropdownTrigger} > a`
        ),
      ];
    }

    return this;
  }

  enable() {
    if (this.options.enableDropdownOnHover) {
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
    const parentTrigger = event.target.parentElement;

    if (parentTrigger.classList.contains(NavMenu.defaults.activeClass)) {
      const href = event.target.getAttribute('href');

      if (href && href !== '#') {
        location.href = href;
        return;
      }
    }

    event.preventDefault();
  };

  handleTriggerMouseEvent = event => {
    if (event.type === 'mouseenter') {
      this.showDropdownMenu(event.target);
    } else {
      this.hideDropdownMenu(event.target);
    }
  };

  showDropdownMenu(trigger) {
    const navItem = trigger;
    const navLink = navItem.firstElementChild;
    const dropdownMenu = navLink.nextElementSibling;

    navItem.classList.add(NavMenu.defaults.activeClass);
    dropdownMenu.classList.add(NavMenu.defaults.activeClass);
    navLink.setAttribute('aria-expanded', 'true');
  }

  hideDropdownMenu(trigger) {
    const navItem = trigger;
    const navLink = navItem.firstElementChild;
    const dropdownMenu = navLink.nextElementSibling;

    navItem.classList.remove(NavMenu.defaults.activeClass);
    dropdownMenu.classList.remove(NavMenu.defaults.activeClass);
    navLink.setAttribute('aria-expanded', 'false');
  }
}
