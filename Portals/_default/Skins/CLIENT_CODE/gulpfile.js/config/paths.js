const { name, faviconFile } = require('./project');

module.exports = {
  fonts: {
    src: `./src/fonts/*`,
    dest: `./public/fonts/`,
  },
  icons: {
    src: `./src/icons/*`,
    dest: `./public/icons/`,
  },
  images: {
    src: `./src/images/**/*.{jpg,jpeg,png,gif,svg}`,
    dest: `./public/images/`,
  },
  favicons: {
    src: `./src/images/${faviconFile}`,
    dest: `./public/favicons`,
    markupOutput: `./controls/meta.ascx`,
    markupOutputDirectory: `./controls`,
  },
  styles: {
    src: `./src/scss/**/*.scss`,
    dest: `./public/css`,
  },
  skinLayoutStyles: {
    src: `./src/scss/*.scss`,
    dest: `./`,
  },
  containerStyles: {
    src: `./src/scss/Containers/*.scss`,
    dest: `../../Containers/${name}/`,
  },
  moduleStyles: {
    src: `./src/scss/Modules/*.scss`,
    dest: `./public/css`,
  },
  scripts: {
    src: `./src/js/**/*.js`,
    dest: `./public/js/`,
  },
};
