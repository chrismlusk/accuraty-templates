# Assets

The `assets/` folder includes all stylesheets, fonts, images, and scripts needed in order to create the skin.

## Architecture

* `css/`
* `fonts/`
* `images/`
* `js/`
* `sass/`

### CSS

Contains any compiled CSS files used globally in the project. 

(Any template-specific files should be compiled directly into the `skin/` folder and must match the name of the `.ascx` file so DNN will automatically load that stylesheet whenever its template is in use.)

### Fonts

Source files for fonts included with the project are saved here.

### Images

Any images — icons, logos, backgrounds, etc. — that are used in the skin should be stored in this directory.

### JS

Contains all scripts used for the project.

### Sass

This folder is the heart of the project's styles. All custom and vendor Sass files used to create the CSS are in here.
