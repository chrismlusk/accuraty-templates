# Source

The `src/` folder includes all stylesheets, fonts, images, and scripts needed to create the skin.

## Architecture

- `fonts/`
- `icons/`
- `images/`
- `js/`
- `scss/`

_Note: If new directories are needed, you will need to modify the Gulp config to account for these new assets._

### fonts/

Source files for fonts included with the project are saved here.

### icons/

Icons (SVGs, PNGs, etc.). Are icons images? Sure. But in our experience, it's easier to separate them into a dedicated place.

### images/

Images that are used in the skin itself (e.g., backgrounds, design resources, logos, favicon).

_Note: Images that are used as content and could be managed by the client should be stored in `Portals/0/SiteContent`._

### js/

JavaScript modules, global scripts, and page-specific resources.

### scss/

This is the heart of the project's styles. All custom Sass files used to create the CSS for the skin, containers, and modules are here.
