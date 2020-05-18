const { getWebpackEntries, isTrue } = require('../utils');

const {
  CLIENT_CODE,
  PROJECT_MODE,
  PROJECT_INITIALIZED,
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
  name: CLIENT_CODE.toUpperCase() || 'CLIENT_CODE',
  mode: PROJECT_MODE || 'development',
  initialized: isTrue(PROJECT_INITIALIZED),
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
