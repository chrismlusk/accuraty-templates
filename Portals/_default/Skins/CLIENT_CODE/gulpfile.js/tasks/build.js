const gulp = require('gulp');
const assetsTask = require('./assets');
const imagesTask = require('./images');
const stylelintTask = require('./stylelint');
const stylesTask = require('./styles');
const scriptsTask = require('./scripts');

const buildTask = gulp.series(
  assetsTask,
  imagesTask,
  stylelintTask,
  stylesTask,
  scriptsTask
);

gulp.task('build', buildTask);
module.exports = buildTask;
