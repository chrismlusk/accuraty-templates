const gulp = require('gulp');
const del = require('del');

const { project } = require('../config');

const cleanTask = () => {
  const allCompiledFiles = [
    `.tmp/`,
    `./*.css`,
    `./*.css.map`,
    `../../Containers/${project.name}/*.css`,
    `../../Containers/${project.name}/*.css.map`,
    `../../Containers/Accuraty/*.css`,
    `../../Containers/Accuraty/*.css.map`,
    `../../../../DesktopModules/EasyDNNnews/Templates/_default/${
      project.name
    }/*.css`,
    `../../../../DesktopModules/EasyDNNnews/Templates/_default/${
      project.name
    }/*.css.map`,
    `public/*`,
    `!public/.git`,
  ];

  return del(project.production ? ['.tmp/'] : allCompiledFiles, {
    force: true,
  });
};

gulp.task('clean', cleanTask);
module.exports = cleanTask;
