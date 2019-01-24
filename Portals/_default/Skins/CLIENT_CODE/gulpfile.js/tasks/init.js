const gulp = require('gulp');

const PATH_CONFIG = require('../path-config');
const TASK_CONFIG = require('../task-config');

function getFonts() {
  if (!TASK_CONFIG.fonts) return Promise.resolve();
  return gulp
    .src(PATH_CONFIG.fonts.src)
    .pipe(gulp.dest(PATH_CONFIG.fonts.dest));
}

function getBootstrapJs() {
  if (!TASK_CONFIG.vendors.bootstrap) return Promise.resolve();
  return gulp
    .src(PATH_CONFIG.bootstrapJs.src)
    .pipe(gulp.dest(PATH_CONFIG.bootstrapJs.dest));
}

function getFlickityCss() {
  if (!TASK_CONFIG.vendors.flickity) return Promise.resolve();
  return gulp
    .src(PATH_CONFIG.flickityCss.src)
    .pipe(gulp.dest(PATH_CONFIG.flickityCss.dest));
}

function getFlickityJs() {
  if (!TASK_CONFIG.vendors.flickity) return Promise.resolve();
  return gulp
    .src(PATH_CONFIG.flickityJs.src)
    .pipe(gulp.dest(PATH_CONFIG.flickityJs.dest));
}

const initTask = gulp.series(
  getFonts,
  getBootstrapJs,
  getFlickityCss,
  getFlickityJs
);

gulp.task('init', initTask);
module.exports = initTask;
