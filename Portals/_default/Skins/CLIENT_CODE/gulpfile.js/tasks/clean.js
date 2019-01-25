const project = require('../../package.json').name;

const gulp = require('gulp');
const del = require('del');

const TASK_CONFIG = require('../task-config');

const cleanTask = () => {
  const allCompiledFiles = [
    '.tmp/',
    './*.css',
    './*.css.map',
    `../../Containers/${project}/*.css`,
    `../../Containers/${project}/*.css.map`,
    `../../../../DesktopModules/EasyDNNnews/Templates/_default/${project}/*.css`,
    `../../../../DesktopModules/EasyDNNnews/Templates/_default/${project}/*.css.map`,
    'public/*',
    '!public/.git',
  ];

  return del(TASK_CONFIG.production ? ['.tmp/'] : allCompiledFiles, {
    force: true,
  });
};

gulp.task('clean', cleanTask);
module.exports = cleanTask;
