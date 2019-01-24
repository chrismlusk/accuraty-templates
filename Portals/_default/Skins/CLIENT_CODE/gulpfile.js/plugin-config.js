const imageminPlugin = require('gulp-imagemin');

const imagemin = {
  plugins: [
    imageminPlugin.gifsicle({
      interlaced: true
    }),
    imageminPlugin.jpegtran({
      progressive: true
    }),
    imageminPlugin.optipng({
      optimizationLevel: 5
    }),
    imageminPlugin.svgo({
      plugins: [
        {
          cleanupAttrs: true
        },
        {
          removeComments: true
        },
        {
          removeViewBox: true
        },
        {
          cleanupIDs: false
        }
      ]
    })
  ],
  options: {
    verbose: true
  }
};

const gulpSass = {
  options: {
    precision: 6,
    outputStyle: 'nested'
  }
};

const autoprefixer = {
  options: {
    cascade: false
  }
};

const cleanCss = {
  options: {
    level: 1,
    format: {
      breaksWith: 'lf'
    }
  }
};

module.exports = {
  imagemin,
  gulpSass,
  autoprefixer,
  cleanCss
};
