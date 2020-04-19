const gulp = require('gulp');
const fs = require('fs');
const replace = require('gulp-replace');

const { isTrue } = require('../utils');
const { name } = require('../config').project;

const isInitialized = isTrue(process.env.PROJECT_INITIALIZED);

function setSassClientCode() {
  const pattern = /\$asl--client-code:\\?.*/g;
  const updated = `$asl--client-code: "${name}";`;

  return gulp
    .src('./src/scss/theme/_variables.scss')
    .pipe(replace(pattern, updated))
    .pipe(gulp.dest('./src/scss/theme/'));
}

function setDirectoryNames() {
  // Before renaming anything, check if the "CLIENT_CODE" directory exists.
  // If it doesn't, we assume this function has already ran and isn't needed.
  function renameDir(dirOld, dirNew) {
    fs.access(dirOld, err => {
      if (!err) {
        fs.renameSync(dirOld, dirNew, err => {
          if (err) throw err;
        });
      }
    });
  }

  // Run the function for the Skin and Containers directories.
  renameDir(`../CLIENT_CODE`, `../${name}`);
  renameDir(`../../Containers/CLIENT_CODE`, `../../Containers/${name}`);

  // Return a resolved Promise to continue the Gulp build.
  return Promise.resolve();
}

function initializeProject() {
  const pattern = /PROJECT_INITIALIZED\s*=\s*"*false"*/g;
  const updated = 'PROJECT_INITIALIZED = true';

  return gulp
    .src('.env')
    .pipe(replace(pattern, updated))
    .pipe(gulp.dest('./'));
}

const initTask = gulp.series(
  setSassClientCode,
  setDirectoryNames,
  initializeProject
);

const skipTask = () => Promise.resolve();

gulp.task('init', !isInitialized ? initTask : skipTask);
module.exports = initTask;
