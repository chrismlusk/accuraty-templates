# Skin

This folder is where we save starter files to build a custom DNN skin. When copying these files for use in a project, be sure they are added to `/Portals/_default/Skins/{CLIENT_ABBREVIATION}/`.

A skin defines the look and feel of the website. Skinning provides a separation of presentation and content. At their most basic, skins are comprised of layouts (ASCX) and stylesheets (CSS).

## Layouts and Panes

A **pane** is a section of a webpage that displays static content, dynamic content, or a standard theme object.

A **layout template** defines where panes are located on the webpage and what each pane contains.

### Requirements:

* A layout template must have at least one pane.
* Exactly one of the panes must be called `ContentPane` (this is case-insensitive, but Accuraty style is capital case).
* Each pane must have a name that is unique within the page.
* All panes must have `runat="server"` added to the element.
* A pane can only be a `<div>`, `<p>`, `<span>`, or `<td>`.

## Accuraty standards

The `skin/` folder includes:

* `assets/`
* `includes/`
* `menus/`
* layout templates
* layout stylesheets

### Assets

All stylesheets, fonts, images, and scripts needed in order to create the skin.

### Includes

Files that contain code/markup that should be included in multiple layout template files.

### Menus

Code necessary to build custom menus using DDRMenu.

### Layout templates

Start with `Main.ascx` as the default template, and add more as needed. These files should contain the core markup necessary to create pages. The ASP.NET control and register directives should be included via `_preheader.inc`, and global elements like the site header and footer are also included via an include directive.

### Layout stylesheets

When skin templates are applied to pages, DNN will automatically load that template's stylesheet. For example, if you have an `Events.ascx` file, there are likely events-specific styles. Rather than include those in the global stylesheet, separate those styles into their own template-specific file to reduce bloat.

In order for DNN to automatically load the file, though, it **must be named the exact same as the layout template and saved in the same directory**. So, continuing our example, you would have `Events.css`.

*Note: For more information about these directives, see the README.md file in the `includes/` folder.*

---

Reference: [DNN Documentation Center](http://www.dnnsoftware.com/docs) > [About Themes](http://www.dnnsoftware.com/docs/designers/about-themes.html)
