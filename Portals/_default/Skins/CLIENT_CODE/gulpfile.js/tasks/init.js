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
    .src(PATH_CONFIG.bootstrapJS.src)
    .pipe(gulp.dest(PATH_CONFIG.bootstrapJS.dest));
}

function getFlickityJs() {
  if (!TASK_CONFIG.vendors.flickity) return Promise.resolve();
  return gulp
    .src(PATH_CONFIG.flickityJS.src)
    .pipe(gulp.dest(PATH_CONFIG.flickityJS.dest));
}

const initTask = gulp.series(getFonts, getBootstrapJs, getFlickityJs);

gulp.task('init', initTask);
module.exports = initTask;
