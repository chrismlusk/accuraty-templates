const gulp = require('gulp');

const { paths, project } = require('../config');
const { fonts, icons } = paths;

function getFonts() {
  if (!project.fonts) return Promise.resolve();
  return gulp.src(fonts.src).pipe(gulp.dest(fonts.dest));
}

function getIcons() {
  if (!project.icons) return Promise.resolve();
  return gulp.src(icons.src).pipe(gulp.dest(icons.dest));
}

const assetsTask = gulp.series(getFonts, getIcons);

gulp.task('assets', assetsTask);
module.exports = assetsTask;
