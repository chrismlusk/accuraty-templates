import { Module } from './app';

class Authentication {
  static defaults = {
    dnnInput: '.dnnFormItem input:not([type=checkbox]):not([type=radio])',
    inputClass: 'form-control',
    dnnPrimaryButton: '.dnnPrimaryAction',
    dnnSecondaryButton: '.dnnSecondaryAction',
    buttonPrimaryClass: 'btn btn-primary',
    buttonSecondaryClass: 'btn btn-outline-primary',
    loadingClass: 'is-loading',
  };

  constructor(element, options) {
    this.element = element;
    this.options = { ...Authentication.defaults, ...options };
    this.init();
  }

  init() {
    this.createChildRefs()
      .layout()
      .enable();

    return this;
  }

  createChildRefs() {
    this.inputs = [
      ...this.element.querySelectorAll(Authentication.defaults.dnnInput),
    ];

    this.primaryButtons = [
      ...this.element.querySelectorAll(
        Authentication.defaults.dnnPrimaryButton
      ),
    ];

    this.secondaryButtons = [
      ...this.element.querySelectorAll(
        Authentication.defaults.dnnSecondaryButton
      ),
    ];

    return this;
  }

  layout() {
    this.inputs.forEach(input => {
      input.className = Authentication.defaults.inputClass;
    });

    this.primaryButtons.forEach(btn => {
      btn.className = Authentication.defaults.buttonPrimaryClass;
    });

    this.secondaryButtons.forEach(btn => {
      btn.className = Authentication.defaults.buttonSecondaryClass;
    });

    return this;
  }

  enable() {
    setTimeout(() => {
      this.element.classList.remove(Authentication.defaults.loadingClass);
    }, 250);

    return this;
  }
}

const auth = new Module(Authentication);
auth.init();
