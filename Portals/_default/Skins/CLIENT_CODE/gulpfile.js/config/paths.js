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
    src: `${src}/fonts/*`,
    dest: `${dist}/fonts/`,
  },
  icons: {
    src: `${src}/icons/*`,
    dest: `${dist}/icons/`,
  },
  images: {
    src: `${src}/images/**/*.{jpg,jpeg,png,gif,svg}`,
    dest: `${dist}/images/`,
  },
  favicons: {
    src: `${src}/images/${faviconFile}`,
    // Note: Absolute path is needed for Real Favicon Generator.
    dest: `/Portals/_default/Skins/${name}/${DIST_NAME}/images`,
    markupOutput: `./controls/meta.ascx`,
    markupOutputDirectory: `./controls`,
  },
  styles: {
    src: `${src}/scss/**/*.scss`,
    dest: `${dist}/css`,
  },
  skinLayoutStyles: {
    src: `${src}/scss/*.scss`,
    dest: `./`,
  },
  containerStyles: {
    src: `${src}/scss/Containers/*.scss`,
    dest: `../../Containers/${name}/`,
  },
  moduleStyles: {
    src: `${src}/scss/Modules/*.scss`,
    dest: `${dist}/css`,
  },
  scripts: {
    src: `${src}/js/**/*.js`,
    dest: `${dist}/js/`,
  },
};
