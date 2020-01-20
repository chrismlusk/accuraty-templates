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
const pngquant = require('imagemin-pngquant');
const zopfli = require('imagemin-zopfli');
const giflossy = require('imagemin-giflossy');

const imagemin = {
  plugins: [
    pngquant({
      speed: 1,
      quality: [0.95, 1], // lossy settings
    }),
    zopfli({
      more: true,
    }),
    giflossy({
      optimizationLevel: 3,
      optimize: 3, // keep-empty: Preserve empty transparent frames
      lossy: 2,
    }),
    imageminPlugin.svgo({
      plugins: [
        { removeTitle: false },
        { cleanupAttrs: true },
        { removeComments: true },
        { removeViewBox: false },
        { cleanupIDs: true },
      ],
    }),
    imageminPlugin.mozjpeg({
      progressive: true,
      quality: 75,
    }),
  ],
  options: {
    verbose: true,
  },
};

/**
 * REAL FAVICON GENERATOR
 * https://github.com/RealFaviconGenerator/gulp-real-favicon
 */
const realFavicon = {
  DEFAULT_DESIGN_OPTIONS: {
    ios: {
      pictureAspect: 'backgroundAndMargin',
      backgroundColor: '#ffffff',
      margin: '14%',
      assets: {
        ios6AndPriorIcons: false,
        ios7AndLaterIcons: false,
        precomposedIcons: false,
        declareOnlyDefaultIcon: true,
      },
    },
    desktopBrowser: {},
    windows: {
      pictureAspect: 'noChange',
      backgroundColor: '#da532c',
      onConflict: 'override',
      assets: {
        windows80Ie10Tile: false,
        windows10Ie11EdgeTiles: {
          small: false,
          medium: true,
          big: false,
          rectangle: false,
        },
      },
    },
    androidChrome: {
      pictureAspect: 'noChange',
      themeColor: '#ffffff',
      manifest: {
        display: 'standalone',
        orientation: 'notSet',
        onConflict: 'override',
        declared: true,
      },
      assets: {
        legacyIcon: false,
        lowResolutionIcons: false,
      },
    },
    safariPinnedTab: {
      pictureAspect: 'silhouette',
      themeColor: '#5bbad5',
    },
  },
  DEFAULT_SETTINGS_OPTIONS: {
    scalingAlgorithm: 'Mitchell',
    errorOnImageTooSmall: false,
    readmeFile: false,
    htmlCodeFile: false,
    usePathAsIs: false,
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
  realFavicon,
};
