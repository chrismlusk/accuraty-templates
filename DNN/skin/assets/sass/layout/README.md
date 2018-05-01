# Layout

The `layout/` folder contains everything needed when laying out templates. This folder will have stylesheets for the main parts of the site (e.g., header, footer, navigation, sidebar).

Layout styles are meant for the macro-level items that are _generally_ global — but they don't have to be.

For example, the footer might appear on every page but only certain pages have a sidebar. That means the sidebar is not a global element, but since it's still a large block that forms the shape of a layout, we define its styles as layout styles.
