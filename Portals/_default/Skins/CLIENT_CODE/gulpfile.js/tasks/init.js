const gulp = require('gulp');
const { paths, project } = require('../config');
const { fonts, bootstrapJs, flickityCss, flickityJs } = paths;

function getFonts() {
  if (!project.fonts) return Promise.resolve();
  return gulp.src(fonts.src).pipe(gulp.dest(fonts.dest));
}

function getBootstrapJs() {
  if (!project.vendors.bootstrap) return Promise.resolve();
  return gulp.src(bootstrapJs.src).pipe(gulp.dest(bootstrapJs.dest));
}

function getFlickityCss() {
  if (!project.vendors.flickity) return Promise.resolve();
  return gulp.src(flickityCss.src).pipe(gulp.dest(flickityCss.dest));
}

function getFlickityJs() {
  if (!project.vendors.flickity) return Promise.resolve();
  return gulp.src(flickityJs.src).pipe(gulp.dest(flickityJs.dest));
}

const initTask = gulp.series(
  getFonts,
  getBootstrapJs,
  getFlickityCss,
  getFlickityJs
);

gulp.task('init', initTask);
module.exports = initTask;
