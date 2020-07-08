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
    this.dropdownTriggers = [
      ...this.element.querySelectorAll(NavMenu.defaults.dropdownTrigger),
    ];

    this.dropdownTriggerLinks = [
      ...this.element.querySelectorAll(
        `${NavMenu.defaults.dropdownTrigger} > a`
      ),
    ];

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
        link.addEventListener('focus', this.handleTriggerLinkFocus);

        const dropdownLinks = link.closest('li').querySelectorAll('a');
        const lastDropdownLink = dropdownLinks[dropdownLinks.length - 1];
        lastDropdownLink.addEventListener('blur', () => {
          this.handleLastLinkBlur(link);
        });
      });
    }

    return this;
  }

  handleTriggerLinkClick = event => {
    event.preventDefault();
    this.dropdownTriggers.forEach(trigger => {
      if (trigger.classList.contains(NavMenu.defaults.activeClass)) {
        this.hideDropdownMenu(trigger);
      }
    });
  };

  handleTriggerMouseEvent = event => {
    if (event.type === 'mouseenter') {
      this.showDropdownMenu(event.target);
    } else {
      this.hideDropdownMenu(event.target);
    }
  };

  handleTriggerLinkFocus = event => {
    const parentTrigger = event.currentTarget.closest(
      NavMenu.defaults.dropdownTrigger
    );

    this.showDropdownMenu(parentTrigger);
  };

  handleLastLinkBlur = link => {
    this.hideDropdownMenu(link.parentElement);
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
