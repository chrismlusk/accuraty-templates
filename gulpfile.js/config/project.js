const { getWebpackEntries, isTrue } = require('../utils');

const {
  PROJECT_MODE,
  LOCAL_FONTS,
  LOCAL_ICONS,
  LOCAL_IMAGES,
  FAVICON_FILENAME,
  SKIN_LAYOUT_STYLES,
  MODULE_STYLES,
  CONTAINER_STYLES,
  CUSTOM_SCRIPTS,
} = process.env;

module.exports = {
  name: 'AccuTheme',
  mode: PROJECT_MODE || 'development',
  fonts: isTrue(LOCAL_FONTS),
  icons: isTrue(LOCAL_ICONS),
  images: isTrue(LOCAL_IMAGES),
  faviconFile: FAVICON_FILENAME,
  styles: {
    skinLayouts: isTrue(SKIN_LAYOUT_STYLES),
    modules: isTrue(MODULE_STYLES),
    containers: isTrue(CONTAINER_STYLES),
  },
  scripts: isTrue(CUSTOM_SCRIPTS),
  webpack: {
    entries: getWebpackEntries(),
  },
};
