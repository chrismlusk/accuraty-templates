require('dotenv').config();

const { parallel, series } = require('gulp');

const { media } = require('./tasks/media');
const { clean } = require('./tasks/clean');
const { favicons } = require('./tasks/favicons');
const { lintStyles, lintScripts } = require('./tasks/lint');
const { scripts } = require('./tasks/scripts');
const { styles } = require('./tasks/styles');
const { watch } = require('./tasks/watch');

const base = series(clean, media);
const compile = parallel(styles, scripts);

exports.clean = clean;
exports.favicons = favicons;
exports.scripts = scripts;
exports.styles = styles;

exports.default = series(base, compile, [watch]);
exports.build = series(base, parallel(lintStyles, lintScripts), compile);
