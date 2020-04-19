import { GlobalComponents, DataAttribute } from './config';

export default class Global {
  init() {
    this.createComponents(document.documentElement);
  }

  createComponents(scope = document.body) {
    const components = [
      ...scope.querySelectorAll(`[${DataAttribute.COMPONENT}]`),
    ];

    if (scope.hasAttribute(DataAttribute.COMPONENT)) {
      components.push(scope);
    }

    components.forEach(component => {
      this.registerComponent(component);
    });
  }

  registerComponent(component) {
    const name = component.getAttribute(DataAttribute.COMPONENT);
    const Constructor = GlobalComponents[name];

    if (Constructor) {
      const options = JSON.parse(
        component.getAttribute(DataAttribute.COMPONENT_OPTIONS)
      );

      // eslint-disable-next-line no-new
      new Constructor(component, options);
    }
  }
}
