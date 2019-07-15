const gulp = require('gulp');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const size = require('gulp-size');

const { paths, plugins, project } = require('../config');
const $ = plugins.imagemin;

function imagesTask() {
  if (!project.images) return Promise.resolve();
  return gulp
    .src(paths.images.src)
    .pipe(cache(imagemin($.plugins, $.options)))
    .pipe(gulp.dest(paths.images.dest))
    .pipe(size({ title: 'public/images' }));
}

gulp.task('images', imagesTask);
module.exports = imagesTask;
