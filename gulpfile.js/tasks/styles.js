const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const { paths, plugins, project } = require('../config');
const { skinStyles, moduleStyles, containerStyles } = paths;

// explicitly set compiler (https://github.com/dlmanning/gulp-sass#basic-usage)
sass.compiler = require('node-sass');

const isProduction = project.mode === 'production';

const postcssProcessors = [
  postcssImport(),
  autoprefixer(plugins.autoprefixer.options),
];

if (isProduction) {
  postcssProcessors.push(cssnano());
}

function skinStylesTask() {
  if (!project.styles.skin) return Promise.resolve();

  return gulp
    .src(skinStyles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss(postcssProcessors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(skinStyles.dist));
}

function moduleStylesTask() {
  if (!project.styles.modules) return Promise.resolve();

  return gulp
    .src(moduleStyles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss(postcssProcessors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(moduleStyles.dist));
}

function containerStylesTask() {
  if (!project.styles.containers) return Promise.resolve();

  return gulp
    .src(containerStyles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss(postcssProcessors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(containerStyles.dist));
}

exports.skinStyles = skinStylesTask;
exports.moduleStyles = moduleStylesTask;
exports.containerStyles = containerStylesTask;

exports.styles = gulp.parallel(
  skinStylesTask,
  moduleStylesTask,
  containerStylesTask
);
