const { name, faviconFile } = require('./project');

module.exports = {
  bootstrapJs: {
    src: `./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js`,
    dest: `./public/js/`,
  },
  flickityCss: {
    src: `./node_modules/flickity/dist/flickity.min.css`,
    dest: `./public/css/`,
  },
  flickityJs: {
    src: `./node_modules/flickity/dist/flickity.pkgd.min.js`,
    dest: `./public/js/`,
  },
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
  scripts: {
    src: `./src/js/**/*.js`,
    dest: `./public/js/`,
  },
};
