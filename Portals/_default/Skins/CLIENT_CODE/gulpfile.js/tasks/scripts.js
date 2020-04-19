const { resolve } = require('path');
const gulp = require('gulp');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const eslint = require('gulp-eslint');

const { paths, project } = require('../config');

function lintScripts() {
  if (!project.scripts) return Promise.resolve();

  return gulp
    .src(paths.scripts.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

const WEBPACK_CONFIG = {
  mode: project.mode,
  entry: project.webpack.entries,
  output: {
    filename: '[name].bundle.js',
    path: resolve(process.env.INIT_CWD, 'public/js'),
  },
  // devtool: 'source-map',
  stats: {
    all: false,
    assets: true,
  },
  plugins: [new FriendlyErrorsPlugin()],
  optimization: {
    minimizer: [
      new TerserPlugin({
        chunkFilter: chunk => !chunk.name.includes('vendors'),
      }),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
          enforce: true,
        },
        common: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
    ],
  },
  watchOptions: {
    ignored: ['../../node_modules'],
  },
};

function compileScripts() {
  if (!project.scripts || !project.webpack) return Promise.resolve();

  return new Promise(resolve =>
    webpack(WEBPACK_CONFIG, (err, stats) => {
      if (err) console.log('Webpack', err); // eslint-disable-line
      console.log(stats.toString()); // eslint-disable-line
      resolve();
    })
  );
}

const scriptsTask = gulp.series(lintScripts, compileScripts);

gulp.task('scripts', scriptsTask);
module.exports = scriptsTask;
