const gulp = require('gulp');
const stylesTask = require('./styles');
const scriptsTask = require('./scripts');

const { paths, project } = require('../config');
const { skinLayouts, containers, edn } = project.styles;

const watchTask = () => {
  if (skinLayouts || containers || edn) {
    gulp.watch(paths.styles.src, stylesTask);
  }

  if (project.scripts) {
    gulp.watch(paths.scripts.src, scriptsTask);
  }
};

gulp.task('watch', watchTask);
module.exports = watchTask;
