const del = require('del');
const { project } = require('../config');

function cleanTask() {
  const allCompiledFiles = [
    `./*.css`,
    `./*.css.map`,
    `../../Containers/${project.name}/*.css`,
    `../../Containers/${project.name}/*.css.map`,
    `public/*`,
    `!public/.git`,
    `real-favicon-generator.json`,
  ];

  return del(allCompiledFiles, { force: true });
}

exports.clean = cleanTask;
