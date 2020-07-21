const { name, faviconFile } = require('./project');

const SRC_NAME = 'src';
const DIST_NAME = 'public';

const src = `./${SRC_NAME}`;
const dist = `./${DIST_NAME}`;

module.exports = {
  base: {
    src: src,
    dest: dist,
  },
  fonts: {
    src: `${src}/media/fonts/*.{woff,woff2}`,
    dest: `${dist}/media/fonts/`,
  },
  icons: {
    src: `${src}/media/icons/*.svg`,
    dest: `${dist}/media/icons/`,
  },
  images: {
    src: `${src}/media/images/**/*.{jpg,jpeg,png,gif,svg}`,
    dest: `${dist}/media/images/`,
  },
  favicons: {
    src: `${src}/media/images/${faviconFile}`,
    dest: `${dist}/media/images/`,
    // Note: Absolute path is needed for Real Favicon Generator.
    iconsPath: `/Portals/_default/Skins/${name}/${DIST_NAME}/media/images/`,
    markupOutput: `./controls/meta.ascx`,
    markupOutputDirectory: `./controls`,
  },
  styles: {
    src: `${src}/styles/**/*.scss`,
    dest: `${dist}/`,
  },
  skinLayoutStyles: {
    src: `${src}/styles/*.scss`,
    dest: `./`,
  },
  containerStyles: {
    src: `${src}/styles/Containers/*.scss`,
    dest: `../../Containers/${name}/`,
  },
  moduleStyles: {
    src: `${src}/styles/Modules/*.scss`,
    dest: `${dist}/`,
  },
  scripts: {
    src: `${src}/scripts/**/*.js`,
    dest: `${dist}/`,
  },
};
