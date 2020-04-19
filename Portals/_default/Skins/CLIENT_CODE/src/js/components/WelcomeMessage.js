/* eslint-disable */
const text = `
     _    ____ ____ _   _ ____      _  _______   __
    / \  / ___/ ___| | | |  _ \    / \|_   _\ \ / /
   / _ \| |  | |   | | | | |_) |  / _ \ | |  \ V /
  / ___ \ |__| |___| |_| |  _ <  / ___ \| |   | |
 /_/   \_\____\____|\___/|_| \_\/_/   \_\_|   |_|

`
/* eslint-enable */

export default class WelcomeMessage {
  static defaults = {};

  constructor(element, options) {
    this.element = element;
    this.options = { ...WelcomeMessage.defaults, ...options };
    this.message = text;
    this.init();
  }

  init() {
    this.sayHello();
  }

  sayHello = () => {
    console.log(this.message);
  };
}
