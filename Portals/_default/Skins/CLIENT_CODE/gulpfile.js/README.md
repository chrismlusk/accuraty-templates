# Gulpfile.js

Contains all files related to the Gulp build process. This is how we compile stylesheets, optimize images, bundle scripts. We also extract vendor resources from the `node_modules/` folder and add them to the Skin's `public/` folder. Basically, anything that is automated is run through this directory.

## Overview

The `gulpfile.js/` folder includes:

- `config/`
- `tasks/`
- `index.js`

### config/

All project settings and configurations are stored here. This is where you will set what libraries and assets are needed for this project's Skin, Containers, Modules, etc.

### tasks/

Each Gulp task is split into its own file inside this directory. That includes initializing a project, compiling stylesheets, etc.

### index.js

A mandatory file. All this does is import each task so when Gulp is run, each task is available.

## Gulp information

...

---

Reference: Gulp?????
