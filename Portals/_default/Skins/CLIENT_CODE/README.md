# Skin

This folder is where we save starter files to build a custom DNN skin.

## Architecture

- `controls/`
- `gulpfile.js/`
- `includes/`
- `menus/`
- `public/`
- `src/`
- layout template files
- config files

### controls/

Custom control files.

### gulpfile.js/

All Gulp tasks and configuration.

### includes/

Files that contain code/markup that should be included in multiple layout template files.

### menus/

Code necessary to build custom menus using DDRMenu.

### public/

All skin assets that need to be available for production are put here. This typically includes: fonts, images, scripts, stylesheets. You shouldn't need to touch any of these assets, however, because Gulp will process these assets at the source level — that way everything is optimized, compressed, etc.

### src/

The bulk of your development work will be within this directory. This starter kit includes:

- `fonts/`
- `icons/`
- `images/`
- `js/`
- `scss/`

### Layout templates

Start with `Main.ascx` as the default template, and add more as needed. These files should contain the core markup necessary to create pages. The ASP.NET control and register directives are included via `_preheader.ascx`, and global elements like the site header and footer are also included via an include directive.

### Config files

What you'll find and what they are:

#### .babelrc

Babel

#### .browserslistrc

Browsers we are supporting.

#### .eslint / .eslintignore

ESLint is our JavaScript linter.

#### .prettierrc / .prettierignore

Consistently formatted code is great.

## DNN information

A skin defines the look and feel of the website. Skinning provides a separation of presentation and content. At their most basic, skins are comprised of layouts (ASCX) and stylesheets (CSS).

### Layouts and Panes

A **pane** is a section of a webpage that displays static content, dynamic content, or a standard theme object.

A **layout template** defines where panes are located on the webpage and what each pane contains.

#### Requirements

- A layout template must have at least one pane.
- Exactly one of the panes must be called `ContentPane` (this is case-insensitive, but Accuraty style is capital case).
- Each pane must have a name that is unique within the page.
- All panes must have `runat="server"` added to the element.
- A pane can only be a `<div>`, `<p>`, `<span>`, or `<td>`.

### Layout stylesheets

When skin templates are applied to pages, DNN will automatically load that template's stylesheet. For example, if you have an `Events.ascx` file, there are likely events-specific styles. Rather than include those in the global stylesheet, separate those styles into their own template-specific file to reduce bloat.

In order for DNN to automatically load the file, though, it **must be named the exact same as the layout template and saved in the same directory**. So, continuing our example, you would have `Events.css`. We use our Gulp build process to ensure the stylesheet ends up in the same directory, so you do not need to move any files around to accomplish this.

---

Reference: [DNN Documentation Center](http://www.dnnsoftware.com/docs) > [About Themes](http://www.dnnsoftware.com/docs/designers/about-themes.html)
