const gulp = require('gulp');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');

const { paths, plugins, project } = require('../config');
const { fonts, icons } = paths;
const $ = plugins.imagemin;

function fontsTask() {
  if (!project.fonts) return Promise.resolve();
  return gulp.src(fonts.src).pipe(gulp.dest(fonts.dest));
}

function iconsTask() {
  if (!project.icons) return Promise.resolve();
  return gulp.src(icons.src).pipe(gulp.dest(icons.dest));
}

function imagesTask() {
  if (!project.images) return Promise.resolve();
  return gulp
    .src(paths.images.src)
    .pipe(cache(imagemin($.plugins, $.options)))
    .pipe(gulp.dest(paths.images.dest));
}

exports.media = gulp.parallel(fontsTask, iconsTask, imagesTask);
