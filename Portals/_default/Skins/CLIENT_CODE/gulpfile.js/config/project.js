const { getWebpackEntries, isTrue } = require('../utils');

const {
  CLIENT_CODE,
  PROJECT_MODE,
  VENDOR_BOOTSTRAP,
  VENDOR_FLICKITY,
  VENDOR_FONT_AWESOME,
  LOCAL_FONTS,
  LOCAL_ICONS,
  LOCAL_IMAGES,
  FAVICON_FILENAME,
  SKIN_LAYOUT_STYLES,
  CONTAINER_STYLES,
  ACCURATY_CONTAINER_STYLES,
  CUSTOM_SCRIPTS,
} = process.env;

module.exports = {
  name: CLIENT_CODE.toUpperCase() || 'CLIENT_CODE',
  // Only use "production" mode if env variable is explicitly set.
  // Otherwise, fallback to "development" mode just to be safe.
  mode: PROJECT_MODE === 'production' ? 'production' : 'development',
  vendors: {
    bootstrap: isTrue(VENDOR_BOOTSTRAP),
    flickity: isTrue(VENDOR_FLICKITY),
    fontAwesome: isTrue(VENDOR_FONT_AWESOME),
  },
  fonts: isTrue(LOCAL_FONTS),
  icons: isTrue(LOCAL_ICONS),
  images: isTrue(LOCAL_IMAGES),
  faviconFile: FAVICON_FILENAME,
  styles: {
    skinLayouts: isTrue(SKIN_LAYOUT_STYLES),
    containers: isTrue(CONTAINER_STYLES),
    accuratyContainers: isTrue(ACCURATY_CONTAINER_STYLES),
  },
  scripts: isTrue(CUSTOM_SCRIPTS),
  webpack: {
    entries: getWebpackEntries(),
  },
};
