const gulp = require('gulp');
const newer = require('gulp-newer');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const stylelint = require('gulp-stylelint');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const size = require('gulp-size');

const { paths, plugins, project } = require('../config');
const {
  styles,
  skinLayoutStyles,
  containerStyles,
  ednStyles,
  accuratyContainerStyles,
} = paths;

// explicitly set compiler per https://github.com/dlmanning/gulp-sass#basic-usage
sass.compiler = require('node-sass');

function lintStyles() {
  if (!project.styles) return Promise.resolve();

  return gulp.src(styles.src).pipe(
    stylelint({
      failAfterError: true,
      fix: true,
      // reporters: [{ formatter: 'verbose', console: true }],
    })
  );
}

function skinLayoutStylesTask() {
  if (!project.styles.skinLayouts) return Promise.resolve();
  return gulp
    .src(skinLayoutStyles.src)
    .pipe(newer('.tmp/styles'))
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss([autoprefixer(plugins.autoprefixer.options)]))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(gulpif(project.production, cleanCss(plugins.cleanCss.options)))
    .pipe(size({ title: 'Skin layout CSS' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(skinLayoutStyles.dest))
    .pipe(gulp.dest('.tmp/styles'));
}

function containerStylesTask() {
  if (!project.styles.containers) return Promise.resolve();
  return gulp
    .src(containerStyles.src)
    .pipe(newer('.tmp/styles'))
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss([autoprefixer(plugins.autoprefixer.options)]))
    .pipe(gulpif(project.production, cleanCss(plugins.cleanCss.options)))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(size({ title: 'Container CSS' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(containerStyles.dest))
    .pipe(gulp.dest('.tmp/styles'));
}

function ednStylesTask() {
  if (!project.styles.edn) return Promise.resolve();
  return gulp
    .src(ednStyles.src)
    .pipe(newer('.tmp/styles'))
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss([autoprefixer(plugins.autoprefixer.options)]))
    .pipe(gulpif(project.production, cleanCss(plugins.cleanCss.options)))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(size({ title: 'EasyDNNnews CSS' }))
    .pipe(rename({ basename: `${project.name}` }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(ednStyles.dest))
    .pipe(gulp.dest('.tmp/styles'));
}

function accuratyContainerStylesTask() {
  if (!project.styles.accuratyContainers) return Promise.resolve();
  return gulp
    .src(accuratyContainerStyles.src)
    .pipe(newer('.tmp/styles'))
    .pipe(sourcemaps.init())
    .pipe(sass(plugins.gulpSass.options).on('error', sass.logError))
    .pipe(postcss([autoprefixer(plugins.autoprefixer.options)]))
    .pipe(gulpif(project.production, cleanCss(plugins.cleanCss.options)))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(size({ title: 'Accuraty Container CSS' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(accuratyContainerStyles.dest))
    .pipe(gulp.dest('.tmp/styles'));
}

const allStylesTask = gulp.parallel(
  lintStyles,
  skinLayoutStylesTask,
  containerStylesTask,
  ednStylesTask,
  accuratyContainerStylesTask
);

gulp.task('styles-skin', skinLayoutStylesTask);
gulp.task('styles-container', containerStylesTask);
gulp.task('styles-edn', ednStylesTask);
gulp.task('styles-asl', accuratyContainerStylesTask);

gulp.task('styles', allStylesTask);

module.exports = allStylesTask;
