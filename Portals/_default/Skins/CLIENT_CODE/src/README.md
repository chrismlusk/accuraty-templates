# src/

The `src/` folder includes all stylesheets, fonts, images, and scripts needed to create the skin.

## Architecture

- `fonts/`
- `icons/`
- `images/`
- `js/`
- `scss/`

_Note: If new directories are needed, you will need to modify the Gulp config to account for these new assets._

### Fonts

Source files for fonts included with the project are saved here.

### Icons

Icons (SVGs, PNGs, etc.). Are icons images? Sure. But in our experience, it's easier to separate them into a dedicated place.

### Images

Images that are used in the skin itself (e.g., backgrounds, design resources, logos).

_Note: Images that are used as content and will be managed by the client should be stored in `Portals/0/SiteContent`._

### JavaScript

All JavaScript modules, global scripts, and page-specific resources.

### Stylesheets (Sass/CSS)

This is the heart of the project's styles. All custom Sass files used to create the CSS for the skin, containers, and modules are here.
