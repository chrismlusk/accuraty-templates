const {
  CLIENT_CODE,
  PROJECT_MODE,
  VENDOR_BOOTSTRAP,
  VENDOR_FLICKITY,
  VENDOR_FONT_AWESOME,
  LOCAL_FONTS,
  LOCAL_ICONS,
  LOCAL_IMAGES,
  SKIN_LAYOUT_STYLES,
  CONTAINER_STYLES,
  ACCURATY_CONTAINER_STYLES,
  EDN_STYLES,
  CUSTOM_SCRIPTS,
} = process.env;

// Properties on `process.env` are implicitly converted to a string,
// so we're using this utility function to convert values to boolean.
const has = data => data === 'true';

module.exports = {
  name: CLIENT_CODE.toUpperCase() || 'CLIENT_CODE',
  // Only use "production" mode if env variable is explicitly set.
  // Otherwise, fallback to "development" mode just to be safe.
  mode: PROJECT_MODE === 'production' ? 'production' : 'development',
  vendors: {
    bootstrap: has(VENDOR_BOOTSTRAP),
    flickity: has(VENDOR_FLICKITY),
    fontAwesome: has(VENDOR_FONT_AWESOME),
  },
  fonts: has(LOCAL_FONTS),
  icons: has(LOCAL_ICONS),
  images: has(LOCAL_IMAGES),
  styles: {
    skinLayouts: has(SKIN_LAYOUT_STYLES),
    containers: has(CONTAINER_STYLES),
    accuratyContainers: has(ACCURATY_CONTAINER_STYLES),
    edn: has(EDN_STYLES),
  },
  scripts: has(CUSTOM_SCRIPTS),

  // Webpack settings
  webpack: {
    // Each entry will be turned into its own bundle via Webpack.
    // Add a new property for every new bundle you want to generate.
    entries: {
      main: './src/js/main.js',
      home: './src/js/home.js',
      authentication: './src/js/authentication.js',
      Aside_Menu: './src/js/Aside_Menu.js',
      LazyYouTube: './src/js/LazyYouTube.js',
    },
  },
};
