/* eslint-disable no-console */

const path = require('path');
const gulp = require('gulp');
const webpack = require('webpack');
const eslint = require('gulp-eslint');
const newer = require('gulp-newer');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');
const size = require('gulp-size');

const PATH_CONFIG = require('../path-config');
const TASK_CONFIG = require('../task-config');

function lintScripts() {
  if (!TASK_CONFIG.scripts) return Promise.resolve();

  return gulp
    .src(PATH_CONFIG.scripts.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

const WEBPACK_CONFIG = {
  mode: TASK_CONFIG.production ? 'production' : 'development',
  entry: TASK_CONFIG.webpack.entries,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(process.env.INIT_CWD, 'public/js')
  }
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
};

function compileScriptsWithWebpack() {
  if (!TASK_CONFIG.scripts || !TASK_CONFIG.webpack) return Promise.resolve();

  return new Promise(resolve =>
    webpack(WEBPACK_CONFIG, (err, stats) => {
      if (err) console.log('Webpack', err);
      console.log(stats.toString());
      resolve();
    })
  );
}

function compileScriptsPlain() {
  if (!TASK_CONFIG.scripts || TASK_CONFIG.webpack) return Promise.resolve();
  console.log('HEY THE PLAIN SCRIPTS COMPILER IS RUNNING');

  return gulp
    .src(PATH_CONFIG.scripts.src)
    .pipe(newer('.tmp/scripts'))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(gulpif(TASK_CONFIG.production, uglify()))
    .pipe(
      gulpif(
        ['*.js', '!*.min.js'],
        rename({
          suffix: '.min'
        })
      )
    )
    .pipe(
      size({
        title: 'public/js'
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATH_CONFIG.scripts.dest))
    .pipe(gulp.dest('.tmp/scripts'));
}

const scriptsTask = gulp.series(
  lintScripts,
  compileScriptsWithWebpack,
  compileScriptsPlain
);

gulp.task('scripts', scriptsTask);
module.exports = scriptsTask;
