/* eslint-disable no-console */

const { resolve } = require('path');
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
  mode: project.production ? 'production' : 'development',
  entry: project.webpack.entries,
  output: {
    filename: '[name].bundle.js',
    path: resolve(process.env.INIT_CWD, 'public/js'),
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
};

function compileScriptsWithWebpack() {
  if (!project.scripts || !project.webpack) return Promise.resolve();

  return new Promise(resolve =>
    webpack(WEBPACK_CONFIG, (err, stats) => {
      if (err) console.log('Webpack', err);
      console.log(stats.toString());
      resolve();
    })
  );
}

function compileScriptsPlain() {
  if (!project.scripts || project.webpack) return Promise.resolve();

  return gulp
    .src(paths.scripts.src)
    .pipe(newer('.tmp/scripts'))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(gulpif(project.production, uglify()))
    .pipe(gulpif(['*.js', '!*.min.js'], rename({ suffix: '.min' })))
    .pipe(size({ title: 'public/js' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(gulp.dest('.tmp/scripts'));
}

const scriptsTask = gulp.series(
  lintScripts,
  compileScriptsWithWebpack,
  compileScriptsPlain
);

gulp.task('scripts', scriptsTask);
module.exports = scriptsTask;
