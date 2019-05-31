const gulp = require('gulp');
const stylelint = require('gulp-stylelint');

const { paths, project } = require('../config');

function stylelintTask() {
  if (!project.styles) return Promise.resolve();

  return gulp
    .src(paths.styles.src)
    .pipe(
      stylelint({
        failAfterError: true,
        fix: true,
        // reporters: [{ formatter: 'verbose', console: true }],
      })
    )
    .pipe(gulp.dest('./src/scss'));
}

gulp.task('stylelint', stylelintTask);
module.exports = stylelintTask;
