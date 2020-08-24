const webpack = require('webpack');

const { project } = require('../config');

const WEBPACK_CONFIG = require('../../webpack.config');

function bundleScripts() {
  if (!project.scripts || !project.webpack) return Promise.resolve();

  return new Promise(resolve =>
    webpack(WEBPACK_CONFIG, (err, stats) => {
      if (err) console.log('Webpack', err); // eslint-disable-line
      console.log(stats.toString()); // eslint-disable-line
      resolve();
    })
  );
}

exports.scripts = bundleScripts;
