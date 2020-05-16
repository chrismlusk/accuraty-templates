const gulp = require('gulp');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postImport = require('postcss');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCss = require('gulp-clean-css');

const { paths, plugins, project } = require('../config');
const { skinLayoutStyles, containerStyles, moduleStyles } = paths;
const { fixMapPath } = require('../utils');

const isProduction = process.env.PROJECT_MODE === 'production';

// explicitly set compiler (https://github.com/dlmanning/gulp-sass#basic-usage)
sass.compiler = require('node-sass');

const postcssProcessors = [
  postImport(),
  autoprefixer(plugins.autoprefixer.options),
];

function skinLayoutStylesTask() {
  if (!project.styles.skinLayouts) return Promise.resolve();

  return gulp
    .src(skinLayoutStyles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss(postcssProcessors))
    .pipe(gulpif(isProduction, cleanCss(plugins.cleanCss.options)))
    .pipe(sourcemaps.mapSources(path => fixMapPath(path)))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(skinLayoutStyles.dest));
}

function containerStylesTask() {
  if (!project.styles.containers) return Promise.resolve();

  const prefix = `../../Skins/${project.name}`;
  const directory = `src/scss/Container`;

  return gulp
    .src(containerStyles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss(postcssProcessors))
    .pipe(gulpif(isProduction, cleanCss(plugins.cleanCss.options)))
    .pipe(sourcemaps.mapSources(path => fixMapPath(path, prefix, directory)))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(containerStyles.dest));
}

function moduleStylesTask() {
  if (!project.styles.modules) return Promise.resolve();

  const prefix = `../../`;
  const directory = `src/scss/Module`;

  return gulp
    .src(moduleStyles.src)
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss(postcssProcessors))
    .pipe(gulpif(isProduction, cleanCss(plugins.cleanCss.options)))
    .pipe(sourcemaps.mapSources(path => fixMapPath(path, prefix, directory)))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(moduleStyles.dest));
}

exports.styles = gulp.parallel(
  skinLayoutStylesTask,
  containerStylesTask,
  moduleStylesTask
);
