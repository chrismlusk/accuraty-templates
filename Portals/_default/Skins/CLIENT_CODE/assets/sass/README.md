# Sass

Sass extends CSS with syntax advancements and features like variables, nesting, math operations, and more. Learn about the basics [here](http://sass-lang.com/guide).

There are two Sass syntaxes available: SCSS (Sassy CSS), which uses the `.scss` extension, and SASS, which uses `.sass` as its extension. **The default syntax in this template is SCSS**. Learn more about the difference [here](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better).

The `sass/` folder includes the skin file, page-specific files, and sets of partials that are separated into a system of folders. (More information about this folder architecture below.)

## Main files

The primary files (e.g., `skin.scss`, `home.scss`, `manage.scss`) should be the only Sass files from the whole code base not to begin with an underscore. These files should generally not contain anything but `@import` directives and comments. The exception is page-specific files (e.g., `home.scss`), since these will compile into CSS files that are only loaded for specific pages.

*Note: Before the code is deployed to the server, these files are compiled into the CSS files that are used for this project's skin.*

### Import

Unlike the `@import` directive in CSS, which creates an HTTP request for each use, the Sass statement does not impact performance.

## Partials

These are partial Sass files that contain snippets of code that are imported into the main file. This is a good way to modularize CSS in order to write code that adheres to the [DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself) principle and is easier to maintain.

Partials are named with a preceding underscore, which lets Sass know that the file is a partial and should not be generated into a CSS file. For example: `_partial.scss`.

## Folder architecture

Our pattern is to split the codebase into partials that are organized into meaningful, separated folders so you can easily find what you need. The main Sass file imports all partials according to the folder they live in, one after the other in the following order:

1. `abstracts/`
2. `base/`
3. `components/`
4. `layout/`

To preserve readability in `skin.scss`, file extensions and leading underscores are not necessary and are therefore omitted.

*Note: If you add any partials to a folder, you will need to add it to the import statement in this file.*

## Bootstrap

Bootstrap is the default framework for our projects, so be sure to run `npm install` from the command line to include Bootstrap in your local `node_modules/` folder. The `skin.scss` file has an import statement to include the Sass files from Bootstrap.

### Modifying Bootstrap

Since our projects are built on Bootstrap, modifying these styles is something you will do on every project. In the past, this has been handled with overrides in our main stylesheet.

For example, if the design calls for all buttons to have no rounded corners, you could override Bootstrap's `.btn` class in the `_buttons.scss` file inside the `components/` folder like so:

```css3
.btn {
  border-radius: 0;
}
```

If your `@import` statements in the main file are ordered properly, this new code will override the vendor-provided styles. This method is valid and can be done with files in the `base/`, `components/`, or `layout/` folders.

**However, this method introduces more code and increases file size.**

### A Better Way

By using Bootstrap's source Sass files, we can take advantage of its variables and the `!default` flag that is applied. From the [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_default):

> You can assign to variables if they aren't already assigned by adding the `!default` flag to the end of the value. This means that if the variable has already been assigned to, it won't be re-assigned, but if it doesn't have a value yet, it will be given one.

Our custom `_variables.scss` uses the same variables as Bootstrap — except we drop the `!default` flag. Then, in `main.scss`, we import our custom file before importing the Bootstrap code. This means when the codebase compiles, the first occurance of a Bootstrap variable actually comes from our own `_variables.scss` file, so the assigned value is what we set it as. Then, when the Bootstrap variable is reached, that value is ignored because of the `!default` flag.

This approach lets us easily set Bootstrap's components without introducing any more code, and it keeps our styles and Bootstrap's styles consistent.

**For this reason, it is critical we use Boostrap's variable names as our own.**

---

Reference: [Bootstrap's Sass variables on GitHub](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss)
