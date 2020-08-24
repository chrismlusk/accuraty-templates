const { name, faviconFile } = require('./project');

const SRC_NAME = 'src';
const DIST_NAME = 'dist';

const appPath = `./DNN`;
const portalPath = `${appPath}/Portals/_default`;
const skinPath = `${portalPath}/Skins/${name}`;
const containerPath = `${portalPath}/Containers/${name}`;

const srcPath = `./${SRC_NAME}`;
const distPath = `${skinPath}/${DIST_NAME}`;

const fontsDir = `media/fonts`;
const iconsDir = `media/icons`;
const imagesDir = `media/images`;

const stylesDir = `styles`;
const skinLayoutStylesDir = `${stylesDir}`;
const modulesStylesDir = `${stylesDir}/Modules`;
const containerStylesDir = `${stylesDir}/Containers`;

const scriptsDir = `scripts`;

module.exports = {
  app: appPath,
  portal: portalPath,
  skin: skinPath,
  container: containerPath,
  src: srcPath,
  dist: distPath,

  fonts: {
    dir: fontsDir,
    src: `${srcPath}/${fontsDir}/*.{woff,woff2}`,
    dist: `${distPath}/${fontsDir}`,
  },
  icons: {
    dir: iconsDir,
    src: `${srcPath}/${iconsDir}/*.svg`,
    dist: `${distPath}/${iconsDir}`,
  },
  images: {
    dir: imagesDir,
    src: `${srcPath}/${imagesDir}/**/*.{jpg,jpeg,png,gif,svg}`,
    dist: `${distPath}/${imagesDir}`,
  },
  favicons: {
    src: `${srcPath}/${imagesDir}/${faviconFile}`,
    dist: `${distPath}/${imagesDir}`,
    // Note: Absolute path is needed for Real Favicon Generator.
    iconsPath: `/Portals/_default/Skins/${name}/${DIST_NAME}/${imagesDir}`,
    markupOutput: `${skinPath}/controls/meta.ascx`,
    markupOutputDirectory: `${skinPath}/controls`,
  },
  styles: {
    dir: stylesDir,
    src: `${srcPath}/${stylesDir}/**/*.scss`,
    dist: `${distPath}/`,
  },
  skinLayoutStyles: {
    dir: skinLayoutStylesDir,
    src: `${srcPath}/${skinLayoutStylesDir}/*.scss`,
    dist: skinPath,
  },
  moduleStyles: {
    dir: modulesStylesDir,
    src: `${srcPath}/${modulesStylesDir}/*.scss`,
    dist: distPath,
  },
  containerStyles: {
    dir: containerStylesDir,
    src: `${srcPath}/${containerStylesDir}/*.scss`,
    dist: containerPath,
  },
  scripts: {
    dir: scriptsDir,
    src: `${srcPath}/${scriptsDir}/**/*.js`,
    dist: distPath,
  },
};
