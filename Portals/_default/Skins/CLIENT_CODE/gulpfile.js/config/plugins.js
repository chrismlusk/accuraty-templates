/**
 * GULP SASS
 * https://github.com/sass/node-sass#options
 */
const gulpSass = {
  options: {
    precision: 6,
    outputStyle: 'nested',
  },
};

/**
 * AUTOPREFIXER
 * https://github.com/postcss/autoprefixer#options
 */
const autoprefixer = {
  options: {
    cascade: false,
  },
};

/**
 * CLEAN CSS
 * https://github.com/jakubpawlowicz/clean-css#constructor-options
 */
const cleanCss = {
  options: {
    level: 1,
    format: {
      breaksWith: 'lf',
    },
  },
};

/**
 * IMAGEMIN
 * https://github.com/sindresorhus/gulp-imagemin
 */
const imageminPlugin = require('gulp-imagemin');
const imagemin = {
  plugins: [
    imageminPlugin.gifsicle({
      interlaced: true,
    }),
    imageminPlugin.jpegtran({
      progressive: true,
    }),
    imageminPlugin.optipng({
      optimizationLevel: 5,
    }),
    imageminPlugin.svgo({
      plugins: [
        {
          removeTitle: false,
        },
        {
          cleanupAttrs: true,
        },
        {
          removeComments: true,
        },
        {
          removeViewBox: true,
        },
        {
          cleanupIDs: false,
        },
      ],
    }),
  ],
  options: {
    verbose: true,
  },
};

/**
 * EXPORTS
 */
module.exports = {
  gulpSass,
  autoprefixer,
  cleanCss,
  imagemin,
};
