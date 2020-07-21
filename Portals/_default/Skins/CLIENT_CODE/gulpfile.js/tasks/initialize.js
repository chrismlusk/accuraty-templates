const fs = require('fs');
const gulp = require('gulp');
const replace = require('gulp-replace');

const { paths, project } = require('../config');

function initializeProject() {
  const pattern = /PROJECT_INITIALIZED\s*=\s*"*false"*/g;
  const updated = 'PROJECT_INITIALIZED = true';

  return gulp.src('.env').pipe(replace(pattern, updated)).pipe(gulp.dest('./'));
}

function setSassClientCode() {
  const themePath = `${paths.base.src}/styles/theme`;
  const pattern = /\$asl--client-code:\\?.*/g;
  const updated = `$asl--client-code: "${project.name}";`;

  return gulp
    .src(`${themePath}/_variables.scss`)
    .pipe(replace(pattern, updated))
    .pipe(gulp.dest(`${themePath}/`));
}

function renameClientDirectories() {
  // Before renaming anything, check if the "CLIENT_CODE" directory exists.
  // If it doesn't, we assume this function has already ran and isn't needed.
  function renameDir(currPath, newPath) {
    if (fs.existsSync(currPath)) {
      try {
        fs.renameSync(currPath, newPath);
      } catch (error) {
        console.log(error); // eslint-disable-line
      }
    }
  }

  // Run the function for the Skin and Containers directories.
  renameDir(`../CLIENT_CODE`, `../${project.name}`);
  renameDir(`../../Containers/CLIENT_CODE`, `../../Containers/${project.name}`);

  // Return a resolved Promise to continue the Gulp build.
  return Promise.resolve();
}

const initTask = gulp.series(
  initializeProject,
  setSassClientCode,
  renameClientDirectories
);

const skipTask = () => Promise.resolve();

exports.initialize = !project.initialized ? initTask : skipTask;
