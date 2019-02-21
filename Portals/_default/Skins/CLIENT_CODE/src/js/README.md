# JavaScript

The `js/` folder contains all custom scripts used in the project.

## Architecture

- `modules/`
- individual files

### Individual files

Any file at the root of the `js/` directory will be compiled into separate JavaScript files. Scripts needed for the entire site are in `main.js`. Add new files for page- and component-specific scripts. To use a module, import the function and envoke it.

_Note: When you add new individual files, you will need to modify the Gulp config to account for these new assets. You must also include them in the skin or container template they belong with._

### modules/

Each module is one piece of functionality that can be shared across multiple individual files. To aid readability, each function is split into its own module and imported into the individual file it belongs with.

## What about vendor files?

Vendor files (e.g., Bootstrap, Flickity) will usually not need to be included here because they don't need to be run through the Gulp build process for scripts. You should instead install the package (via NPM) and update the Gulp configuration so that the files needed in production are copied from the `node_modules/` directory and added to the `public/js` directory.
