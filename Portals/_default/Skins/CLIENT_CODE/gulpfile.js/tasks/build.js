const gulp = require('gulp');
const assetsTask = require('./assets');
const imagesTask = require('./images');
const stylesTask = require('./styles');
const scriptsTask = require('./scripts');

const buildTask = gulp.series(assetsTask, imagesTask, stylesTask, scriptsTask);

gulp.task('build', buildTask);
module.exports = buildTask;
