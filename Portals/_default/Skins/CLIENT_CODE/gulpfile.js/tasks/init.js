const gulp = require('gulp');
const fs = require('fs');
const replace = require('gulp-replace');

const { name } = require('../config').project;

function setSassClientCode() {
  const pattern = /\$asl--client-code:\\?.*/g;
  const updated = `$asl--client-code: "${name}";`;

  return gulp
    .src('./src/scss/_abstracts/_variables.scss')
    .pipe(replace(pattern, updated))
    .pipe(gulp.dest('./src/scss/_abstracts/'));
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

  const ednPath = `../../../../DesktopModules/EasyDNNnews/Templates/_default`;

  // Run the function for the Skin, Containers, and EDN directories.
  renameDir(`../CLIENT_CODE`, `../${name}`);
  renameDir(`../../Containers/CLIENT_CODE`, `../../Containers/${name}`);
  renameDir(`${ednPath}/CLIENT_CODE`, `${ednPath}/${name}`);

  // Return a resolved Promise to continue the Gulp build.
  return Promise.resolve();
}

const initTask = gulp.series(setSassClientCode, setDirectoryNames);

gulp.task('init', initTask);
module.exports = initTask;
