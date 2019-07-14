const gulp = require('gulp');
const assetsTask = require('./assets');
const imagesTask = require('./images');
const faviconsTask = require('./favicons');
const stylelintTask = require('./stylelint');
const stylesTask = require('./styles');
const scriptsTask = require('./scripts');

const buildTask = gulp.series(
  assetsTask,
  imagesTask,
  faviconsTask,
  stylelintTask,
  stylesTask,
  scriptsTask
);

gulp.task('build', buildTask);
module.exports = buildTask;
