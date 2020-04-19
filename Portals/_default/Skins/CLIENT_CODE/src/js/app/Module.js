import { DataAttribute } from './config';

export default class Module {
  constructor(component) {
    this.component = component;
    this.init();
  }

  init() {
    this.createComponents(document.documentElement);
    return this;
  }

  createComponents(scope = document.body) {
    const components = [
      ...scope.querySelectorAll(
        `[${DataAttribute.COMPONENT}="${this.component.name}"]`
      ),
    ];

    components.forEach(component => {
      this.registerComponent(component);
    });
  }

  registerComponent(component) {
    const Constructor = this.component;

    const options = JSON.parse(
      component.getAttribute(DataAttribute.COMPONENT_OPTIONS)
    );

    // eslint-disable-next-line no-new
    new Constructor(component, options);
  }
}
