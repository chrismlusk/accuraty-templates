const gulp = require('gulp');
const stylesTask = require('./styles');
const scriptsTask = require('./scripts');

const PATH_CONFIG = require('../path-config');
const TASK_CONFIG = require('../task-config');

const watchTask = () => {
  if (
    TASK_CONFIG.styles.skinLayouts ||
    TASK_CONFIG.styles.containers ||
    TASK_CONFIG.styles.edn
  ) {
    gulp.watch(PATH_CONFIG.styles.src, stylesTask);
  }

  if (TASK_CONFIG.scripts) {
    gulp.watch(PATH_CONFIG.scripts.src, scriptsTask);
  }
};

gulp.task('watch', watchTask);
module.exports = watchTask;
