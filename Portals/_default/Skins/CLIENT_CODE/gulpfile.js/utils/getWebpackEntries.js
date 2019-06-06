const fs = require('fs');
const path = require('path');

// Each script file at the root of the `/src/js` directory needs to be
// given to Webpack as an entry so it will be turned into its own bundle.
function getWebpackEntries() {
  const baseDir = './src/js';
  const ext = '.js';
  const entries = {};

  fs.readdirSync(baseDir).forEach(file => {
    const name = path.basename(file, ext);
    const filepath = `${baseDir}/${name}`;

    if (path.extname(file) === ext) {
      entries[name] = filepath;
    }
  });

  return entries;
}

module.exports = getWebpackEntries;
