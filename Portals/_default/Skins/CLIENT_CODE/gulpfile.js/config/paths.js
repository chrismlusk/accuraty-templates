const { name, faviconFile } = require('./project');

const src = `./src`;
const dist = `./public`;

module.exports = {
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
    dest: `${dist}/favicons`,
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
