# Vendors

Most projects will have a `vendors/` folder containing the stylesheets from external libraries and frameworks. Code inside this folder is direct from the thid-party source and is not to be modified. 

## Bootstrap

Bootstrap is the default framework for our projects, so inside the `vendors/` folder we have a `bootstrap/` folder that contains the Bootstrap source files.

To replace these files once a newer version is available, go to the Bootstrap [download page](https://getbootstrap.com/docs/4.0/getting-started/download) and download the source files. Unzip the file, copy everything inside the `scss/` folder, and paste into our `vendors/bootstrap/` folder.

On 4/15/2018, Chris Lusk updated Bootstrap to v4.1.0.

*Note: If you update these files, please update the above line to reflect the date and version, and please include your name for reference.*

### Modifying Bootstrap

Since our projects are built on Bootstrap, modifying these styles is something you will do on every project. This has usually been handled with overrides in our main stylesheet(s).

For example, if the project design calls for all buttons to have no rounded corners, you could override Bootstrap's `.btn` class in the `_buttons.scss` file inside the `components/` folder like so:

```css3
.btn {
  border-radius: 0;
}
```

If your `@import` statements in the main file are ordered properly, this new code will override the vendor-provided styles. This method is valid and can be done with files inside the `base/`, `components/`, or `layout/` folders.

**However, this method introduces more code and increases file size.**

### A Better Way

By using Bootstrap's source Sass files, we can take advantage of its variables and the `!default` flag that is applied. From the [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_default:

> You can assign to variables if they aren't already assigned by adding the `!default` flag to the end of the value. This means that if the variable has already been assigned to, it won't be re-assigned, but if it doesn't have a value yet, it will be given one.

Our custom `_variables.scss` uses the same variables as Bootstrap — except we drop the `!default` flag. Then, in `main.scss`, we import our custom file before importing the Bootstrap code. This means when the codebase compiles, the first occurance of a Bootstrap variable actually comes from our own `_variables.scss` file, so the assigned value is what we set it as. Then, when the Bootstrap variable is reached, that value is ignored because of the `!default` flag. 

This approach lets us easily set Bootstrap's components without introducing any more code, and it keeps our styles and Bootstrap's styles consistent.

**For this reason, it is critical we use Boostrap's variable names as our own.**

---

Reference: [Bootstrap's Sass variables on GitHub](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss)
