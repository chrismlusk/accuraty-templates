const gulp = require('gulp');
const { media } = require('./media');
const { styles } = require('./styles');
const { scripts } = require('./scripts');

const { paths, project } = require('../config');
const { skinLayouts, modules, containers } = project.styles;

function watch() {
  if (skinLayouts || modules || containers) {
    gulp.watch(paths.styles.src, styles);
  }

  if (project.scripts) {
    gulp.watch(paths.scripts.src, scripts);
  }

  if (project.fonts || project.icons || project.images) {
    gulp.watch([paths.fonts.src, paths.icons.src, paths.images.src], media);
  }
}

exports.watch = watch;
