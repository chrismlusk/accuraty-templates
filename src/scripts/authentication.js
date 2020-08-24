import { Module } from './app';

class Authentication {
  static defaults = {
    authForm: '[data-authentication-form]',
    buttonPrimaryClassName: 'btn btn-primary',
    buttonSecondaryClassName: 'btn btn-outline-primary',
    dnnInput: '.dnnFormItem input:not([type=checkbox]):not([type=radio])',
    dnnPrimaryButton: '.dnnPrimaryAction',
    dnnSecondaryButton: '.dnnSecondaryAction',
    inputClass: 'form-control',
    visibleClass: 'is-visible',
  };

  constructor(element, options) {
    this.element = element;
    this.options = { ...Authentication.defaults, ...options };
    this.init();
  }

  init() {
    this.createChildRefs().layout().enable();

    return this;
  }

  createChildRefs() {
    this.authForm = this.element.querySelector(this.options.authForm);

    this.inputs = [...this.element.querySelectorAll(this.options.dnnInput)];

    this.primaryButtons = [
      ...this.element.querySelectorAll(this.options.dnnPrimaryButton),
    ];

    this.secondaryButtons = [
      ...this.element.querySelectorAll(this.options.dnnSecondaryButton),
    ];

    return this;
  }

  layout() {
    this.inputs.forEach(input => {
      input.className = this.options.inputClass;
    });

    this.primaryButtons.forEach(btn => {
      btn.className = this.options.buttonPrimaryClassName;
    });

    this.secondaryButtons.forEach(btn => {
      btn.className = this.options.buttonSecondaryClassName;
    });

    return this;
  }

  enable() {
    setTimeout(() => {
      this.authForm.classList.add(this.options.visibleClass);
    }, 350);

    return this;
  }
}

const auth = new Module(Authentication);
auth.init();
