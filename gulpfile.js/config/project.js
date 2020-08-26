const { getWebpackEntries, isTrue } = require('../utils');

const {
  PROJECT_MODE,
  FAVICON_FILENAME,
  LOCAL_FONTS,
  LOCAL_SVG,
  LOCAL_IMAGES,
  SKIN_STYLES,
  MODULE_STYLES,
  CONTAINER_STYLES,
  CUSTOM_SCRIPTS,
} = process.env;

module.exports = {
  name: 'AccuTheme',
  mode: PROJECT_MODE || 'development',
  fonts: isTrue(LOCAL_FONTS),
  svg: isTrue(LOCAL_SVG),
  images: isTrue(LOCAL_IMAGES),
  faviconFile: FAVICON_FILENAME,
  styles: {
    skin: isTrue(SKIN_STYLES),
    modules: isTrue(MODULE_STYLES),
    containers: isTrue(CONTAINER_STYLES),
  },
  scripts: isTrue(CUSTOM_SCRIPTS),
  webpack: {
    entries: getWebpackEntries(),
  },
};
