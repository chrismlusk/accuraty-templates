const gulp = require('gulp');
const initTask = require('./init');
const imagesTask = require('./images');
const stylesTask = require('./styles');
const scriptsTask = require('./scripts');

const buildTask = gulp.series(initTask, imagesTask, stylesTask, scriptsTask);

gulp.task('build', buildTask);
module.exports = buildTask;
