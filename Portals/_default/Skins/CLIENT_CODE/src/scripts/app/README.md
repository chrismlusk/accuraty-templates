# App

The framework used for custom JavaScript components.

## Architecture

- `config.js`
- `Global.js`
- `Module.js`

### Config

A shared configuration file for the app. **This should be the only file in this directory you will edit.** There are two important items:

1. An exported object of components needed globally.
2. The data-attribute names used in the DOM.

### Global

This function finds all DOM elements with the `data-attribute` specified in `config.js`, and if the component is found in the `GlobalComponents` object (also from `config.js`), the function instantiates the component.

This is only used in `Skin.js`, where the function is imported, invoked, and initialized. Nothing else is required.

### Module

This is similar to the Global function, but only for single components. To use this: 

- import the `Module` function,
- invoke it with a JS component as the parameter,
- and then initialize by calling the `init()` method.
