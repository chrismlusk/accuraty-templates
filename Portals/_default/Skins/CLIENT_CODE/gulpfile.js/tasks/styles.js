const project = require('../../package.json').name;

const gulp = require('gulp');
const newer = require('gulp-newer');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const size = require('gulp-size');

const PATH_CONFIG = require('../path-config');
const TASK_CONFIG = require('../task-config');
const PLUGIN_CONFIG = require('../plugin-config');

// explicitly set compiler per https://github.com/dlmanning/gulp-sass#basic-usage
sass.compiler = require('node-sass');

function compileSkinLayoutStyles() {
  if (!TASK_CONFIG.styles.skinLayouts) return Promise.resolve();
  return gulp
    .src(PATH_CONFIG.skinLayoutStyles.src)
    .pipe(newer('.tmp/styles'))
    .pipe(sourcemaps.init())
    .pipe(sass(PLUGIN_CONFIG.gulpSass.options).on('error', sass.logError))
    .pipe(postcss([autoprefixer(PLUGIN_CONFIG.autoprefixer.options)]))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(cleanCss(PLUGIN_CONFIG.cleanCss.options))
    .pipe(
      size({
        title: 'Skin layout css'
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATH_CONFIG.skinLayoutStyles.dest))
    .pipe(gulp.dest('.tmp/styles'));
}

function compileContainerStyles() {
  if (!TASK_CONFIG.styles.containers) return Promise.resolve();
  return gulp
    .src(PATH_CONFIG.containerStyles.src)
    .pipe(newer('.tmp/styles'))
    .pipe(sourcemaps.init())
    .pipe(sass(PLUGIN_CONFIG.gulpSass.options).on('error', sass.logError))
    .pipe(postcss([autoprefixer(PLUGIN_CONFIG.autoprefixer.options)]))
    .pipe(cleanCss(PLUGIN_CONFIG.cleanCss.options))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(
      size({
        title: 'Container css'
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATH_CONFIG.containerStyles.dest))
    .pipe(gulp.dest('.tmp/styles'));
}

function compileEDNStyles() {
  if (!TASK_CONFIG.styles.edn) return Promise.resolve();
  return gulp
    .src(PATH_CONFIG.ednStyles.src)
    .pipe(newer('.tmp/styles'))
    .pipe(sourcemaps.init())
    .pipe(sass(PLUGIN_CONFIG.gulpSass.options).on('error', sass.logError))
    .pipe(postcss([autoprefixer(PLUGIN_CONFIG.autoprefixer.options)]))
    .pipe(cleanCss(PLUGIN_CONFIG.cleanCss.options))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(
      size({
        title: 'EasyDNNnews css'
      })
    )
    .pipe(
      rename({
        basename: `${project}`
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATH_CONFIG.ednStyles.dest))
    .pipe(gulp.dest('.tmp/styles'));
}

const stylesTask = gulp.parallel(
  compileSkinLayoutStyles,
  compileContainerStyles,
  compileEDNStyles
);

gulp.task('styles', stylesTask);
module.exports = stylesTask;
