const gulp = require('gulp');
const del = require('del');

const { name, mode } = require('../config').project;

const cleanTask = () => {
  const allCompiledFiles = [
    `.tmp/`,
    `./*.css`,
    `./*.css.map`,
    `../../Containers/${name}/*.css`,
    `../../Containers/${name}/*.css.map`,
    `../../Containers/Accuraty/*.css`,
    `../../Containers/Accuraty/*.css.map`,
    `../../../../DesktopModules/EasyDNNnews/Templates/_default/${name}/*.css`,
    `../../../../DesktopModules/EasyDNNnews/Templates/_default/${name}/*.css.map`,
    `public/*`,
    `!public/.git`,
  ];

  return del(mode === 'production' ? ['.tmp/'] : allCompiledFiles, {
    force: true,
  });
};

gulp.task('clean', cleanTask);
module.exports = cleanTask;
