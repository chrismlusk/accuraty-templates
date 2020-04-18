const gulp = require('gulp');
const newer = require('gulp-newer');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const size = require('gulp-size');

const stylelintTask = require('./stylelint');

const { paths, plugins, project } = require('../config');
const { skinLayoutStyles, containerStyles, ednStyles } = paths;
const { fixMapPath } = require('../utils');

const isProduction = process.env.PROJECT_MODE === 'production';

// explicitly set compiler (https://github.com/dlmanning/gulp-sass#basic-usage)
sass.compiler = require('node-sass');

function skinLayoutStylesTask() {
  if (!project.styles.skinLayouts) return Promise.resolve();

  return gulp
    .src(skinLayoutStyles.src)
    .pipe(newer('.tmp/styles'))
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss([autoprefixer(plugins.autoprefixer.options)]))
    .pipe(gulpif(isProduction, cleanCss(plugins.cleanCss.options)))
    .pipe(sourcemaps.mapSources(path => fixMapPath(path)))
    .pipe(sourcemaps.write('.'))
    .pipe(size({ title: 'Skin layout CSS' }))
    .pipe(gulp.dest(skinLayoutStyles.dest))
    .pipe(gulp.dest('.tmp/styles'));
}

function containerStylesTask() {
  if (!project.styles.containers) return Promise.resolve();

  const mapPrefix = `../../Skins/${project.name}`;

  return gulp
    .src(containerStyles.src)
    .pipe(newer('.tmp/styles'))
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss([autoprefixer(plugins.autoprefixer.options)]))
    .pipe(gulpif(isProduction, cleanCss(plugins.cleanCss.options)))
    .pipe(sourcemaps.mapSources(path => fixMapPath(path, mapPrefix)))
    .pipe(sourcemaps.write('.'))
    .pipe(size({ title: 'Container CSS' }))
    .pipe(gulp.dest(containerStyles.dest))
    .pipe(gulp.dest('.tmp/styles'));
}

function ednStylesTask() {
  if (!project.styles.edn) return Promise.resolve();

  const mapPrefix = `../../../../../Portals/_default/Skins/${project.name}`;

  return gulp
    .src(ednStyles.src)
    .pipe(newer('.tmp/styles'))
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss([autoprefixer(plugins.autoprefixer.options)]))
    .pipe(gulpif(isProduction, cleanCss(plugins.cleanCss.options)))
    .pipe(rename({ basename: `${project.name}` }))
    .pipe(sourcemaps.mapSources(path => fixMapPath(path, mapPrefix)))
    .pipe(sourcemaps.write('.'))
    .pipe(size({ title: 'EasyDNNnews CSS' }))
    .pipe(gulp.dest(ednStyles.dest))
    .pipe(gulp.dest('.tmp/styles'));
}

const allStylesTask = gulp.parallel(
  skinLayoutStylesTask,
  containerStylesTask,
  ednStylesTask
);

gulp.task('styles-skin', gulp.series(stylelintTask, skinLayoutStylesTask));
gulp.task('styles-container', gulp.series(stylelintTask, containerStylesTask));
gulp.task('styles-edn', gulp.series(stylelintTask, ednStylesTask));

gulp.task('styles', gulp.series(stylelintTask, allStylesTask));
module.exports = allStylesTask;
