const gulp = require('gulp');
const replace = require('gulp-replace');

const { paths, project } = require('../config');
const { fonts, icons, bootstrapJs, flickityCss, flickityJs } = paths;

function setClientCode() {
  const pattern = /\$asl--client-code:\\?.*/g;
  const updated = `$asl--client-code: "${project.name}";`;

  return gulp
    .src('./src/scss/_abstracts/_variables.scss')
    .pipe(replace(pattern, updated))
    .pipe(gulp.dest('./src/scss/_abstracts/'));
}

function getFonts() {
  if (!project.fonts) return Promise.resolve();
  return gulp.src(fonts.src).pipe(gulp.dest(fonts.dest));
}

function getIcons() {
  if (!project.icons) return Promise.resolve();
  return gulp.src(icons.src).pipe(gulp.dest(icons.dest));
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
  setClientCode,
  getFonts,
  getIcons,
  getBootstrapJs,
  getFlickityCss,
  getFlickityJs
);

gulp.task('init', initTask);
module.exports = initTask;
