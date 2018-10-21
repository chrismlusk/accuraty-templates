# Base

The `base/` folder holds global styles and boilerplate code for the project.

## What are base styles?

Base styles are typically the styles you want to apply globally across the site. In this architecture, the `base/` include styles to target plain HTML elements, define basic typographic rules, override the Bootstrap grid system, and reset certain DNN-specific classes that would otherwise conflict with both Bootstrap and our custom styles.

*Note: When using resets, remember there is no need to include Normalize.css because Bootstrap incorporates this into its own reset. Generally, this stylesheet is helpful for resetting styles defined by the content management system.*
