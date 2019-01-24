const project = require('../../package.json').name;

const gulp = require('gulp');
const del = require('del');

const TASK_CONFIG = require('../task-config');

const cleanTask = () => {
  // Don't allow this task to delete anything if in production mode
  if (TASK_CONFIG.production) return Promise.resolve();

  return del(
    [
      '.tmp/',
      './*.css',
      './*.css.map',
      `../../Containers/${project}/*.css`,
      `../../Containers/${project}/*.css.map`,
      `../../../../DesktopModules/EasyDNNnews/Templates/_default/${project}/*.css`,
      `../../../../DesktopModules/EasyDNNnews/Templates/_default/${project}/*.css.map`,
      'public/*',
      '!public/.git'
    ],
    {
      force: true
    }
  );
};

gulp.task('clean', cleanTask);
module.exports = cleanTask;
