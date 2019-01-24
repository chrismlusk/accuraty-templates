const gulp = require('gulp');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const size = require('gulp-size');

const PATH_CONFIG = require('../path-config');
const TASK_CONFIG = require('../task-config');
const PLUGIN_CONFIG = require('../plugin-config');

const imagesTask = () => {
  if (!TASK_CONFIG.images) return Promise.resolve();
  return gulp
    .src(PATH_CONFIG.images.src)
    .pipe(
      cache(
        imagemin(PLUGIN_CONFIG.imagemin.plugins, PLUGIN_CONFIG.imagemin.options)
      )
    )
    .pipe(gulp.dest(PATH_CONFIG.images.dest))
    .pipe(
      size({
        title: 'public/images'
      })
    );
};

gulp.task('images', imagesTask);
module.exports = imagesTask;
