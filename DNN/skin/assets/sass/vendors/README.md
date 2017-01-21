# Vendors

Most projects will have a `vendors/` folder containing the stylesheets from external libraries and frameworks. Code inside this folder is direct from the thid-party source and is not to be modified. 

## Bootstrap

Bootstrap is the default framework for our projects, so inside the `vendors/` folder we have a `bootstrap/` folder that contains the Bootstrap source files.

To replace these files once a newer version is available, go to the Bootstrap [download page](http://v4-alpha.getbootstrap.com/getting-started/download/) and download the source files. Unzip the file, copy everything inside the `scss/` folder, and paste into our `vendors/bootstrap/` folder.

On 1/20/2017, Chris Lusk updated Bootstrap to v4.0.0-apha.6.

*Note: If you update these files, please update this file to reflect the date and version, and please include your name.*

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

Bootstrap 4 ships with a `_custom.scss` file for easy variable overrides. The Bootstrap documentation recommends copying and pasting relevant lines from its `_variables.scss` file into this custom file so the compiled Bootstrap css will override the default variables.

However, since we have our own `_variables.scss` file inside the `abstracts/` folder, we will just import our own variables into Bootstrap's `_custom.scss` file like so:

```
@import '../../abstracts/variables';
```

We will still import our own variable file in the main stylesheet so we have access to these variables elsewhere in our codebase.

**For this reason, it is critical we use Boostrap's variable names as our own.**

---

Reference: [Bootstrap's Sass variables on GitHub](http://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss)
