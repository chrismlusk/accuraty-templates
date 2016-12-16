# Main file

The main file (`main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` statements and comments.

*Note: This is compiled into the CSS file used for this project's skin.*

## Architecture

Our basic pattern is to split the codebase into Sass partials that are organized into meaningful, separated folders so it is easy to find things later when we need to come back to the code.

This main file imports all partials according to the folder they live in, one after the other in the following order:

1. `abstracts/`
2. `vendors/`
3. `base/`
4. `layout/`
5. `components/`
6. `pages/`
7. `themes/`

To preserve readability, each folder is grouped into one import, with a linebreak and each file on its own line. File extensions and leading underscores are not necessary and are therefore omitted.

*Note: If you add any partials to a folder, you will need to add it to the import statement in this file.*
