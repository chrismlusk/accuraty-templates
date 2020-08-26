const autoprefixer = require('autoprefixer');
const cleanCss = require('gulp-clean-css');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const postcss = require('gulp-postcss');
const postImport = require('postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const { paths, plugins, project } = require('../config');
const { skinStyles, moduleStyles, containerStyles } = paths;
const { fixMapPath } = require('../utils');

const isProduction = project.mode === 'production';

// explicitly set compiler (https://github.com/dlmanning/gulp-sass#basic-usage)
sass.compiler = require('node-sass');

const postcssProcessors = [
  postImport(),
  autoprefixer(plugins.autoprefixer.options),
];

function skinStylesTask() {
  if (!project.styles.skin) return Promise.resolve();

  return (
    gulp
      .src(skinStyles.src)
      .pipe(sourcemaps.init())
      .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
      .pipe(postcss(postcssProcessors))
      .pipe(gulpif(isProduction, cleanCss(plugins.cleanCss.options)))
      // .pipe(sourcemaps.mapSources(path => fixMapPath(path)))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(skinStyles.dist))
  );
}

function moduleStylesTask() {
  if (!project.styles.modules) return Promise.resolve();

  const prefix = `../../`;
  const directory = `src/styles/Module`;

  return (
    gulp
      .src(moduleStyles.src)
      .pipe(sourcemaps.init())
      .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
      .pipe(postcss(postcssProcessors))
      .pipe(gulpif(isProduction, cleanCss(plugins.cleanCss.options)))
      // .pipe(sourcemaps.mapSources(path => fixMapPath(path, prefix, directory)))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(moduleStyles.dist))
  );
}

function containerStylesTask() {
  if (!project.styles.containers) return Promise.resolve();

  const prefix = `../../Skins/${project.name}`;
  const directory = `src/styles/Container`;

  return (
    gulp
      .src(containerStyles.src)
      .pipe(sourcemaps.init())
      .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
      .pipe(postcss(postcssProcessors))
      .pipe(gulpif(isProduction, cleanCss(plugins.cleanCss.options)))
      // .pipe(sourcemaps.mapSources(path => fixMapPath(path, prefix, directory)))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(containerStyles.dist))
  );
}

exports.skinStyles = skinStylesTask;
exports.moduleStyles = moduleStylesTask;
exports.containerStyles = containerStylesTask;

exports.styles = gulp.parallel(
  skinStylesTask,
  moduleStylesTask,
  containerStylesTask
);
