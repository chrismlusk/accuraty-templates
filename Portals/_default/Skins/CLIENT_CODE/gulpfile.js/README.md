# Gulpfile.js

Contains all files related to the Gulp build process. This is how we compile stylesheets, optimize images, bundle scripts. We also extract vendor resources from the `node_modules/` folder and add them to the skin's `public/` folder. Basically, anything that is automated is run through this directory.

## Overview

The `gulpfile.js/` folder includes:

- `config/`
- `tasks/`
- `index.js`

### config/

All project settings and configurations needed for Gulp to run properly. This information is imported from the `.env` file at the root of the project's skin directory.

### tasks/

Each Gulp task is split into its own file inside this directory. That includes initializing a project, compiling stylesheets, etc.

### index.js

A mandatory file. All this does is include the environment variables and import each task so when Gulp is run, each task is available.

## Gulp information

...

---

Reference: [Gulp docs](https://gulpjs.com/docs/en/api/concepts)
