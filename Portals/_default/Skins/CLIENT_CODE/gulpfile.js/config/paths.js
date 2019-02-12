const { name } = require('./project');

module.exports = {
  bootstrapJs: {
    src: './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    dest: './public/js/',
  },
  flickityCss: {
    src: './node_modules/flickity/dist/flickity.min.css',
    dest: './public/css/',
  },
  flickityJs: {
    src: './node_modules/flickity/dist/flickity.pkgd.min.js',
    dest: './public/js/',
  },
  fonts: {
    src: './src/fonts/*',
    dest: './public/fonts/',
  },
  icons: {
    src: './src/icons/*',
    dest: './public/icons/',
  },
  images: {
    src: './src/images/**/*.{jpg,jpeg,png,gif,svg}',
    dest: './public/images/',
  },
  styles: {
    src: './src/scss/**/*.scss',
    dest: './public/css',
  },
  skinLayoutStyles: {
    src: `./src/scss/*.scss`,
    dest: './',
  },
  containerStyles: {
    src: `./src/scss/Containers/*.scss`,
    dest: `../../Containers/${name}/`,
  },
  ednStyles: {
    src: './src/scss/EasyDNNsolutions/EasyDNNnews.scss',
    dest: `../../../../DesktopModules/EasyDNNnews/Templates/_default/${name}/`,
  },
  accuratyContainerStyles: {
    src: `./src/scss/Containers/Accuraty/*.scss`,
    dest: `../../Containers/Accuraty/`,
  },
  scripts: {
    src: './src/js/**/*.js',
    dest: './public/js/',
  },
};
