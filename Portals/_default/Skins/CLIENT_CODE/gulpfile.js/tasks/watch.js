const gulp = require('gulp');
const assetsTask = require('./assets');
const stylesTask = require('./styles');
const scriptsTask = require('./scripts');

const { paths, project } = require('../config');
const { skinLayouts, modules, containers } = project.styles;

function watchTask() {
  if (skinLayouts || modules || containers) {
    gulp.watch(paths.styles.src, stylesTask);
  }

  if (project.scripts) {
    gulp.watch(paths.scripts.src, scriptsTask);
  }

  if (project.fonts || project.icons) {
    gulp.watch(paths.icons.src, assetsTask);
  }
}

gulp.task('watch', watchTask);
module.exports = watchTask;
