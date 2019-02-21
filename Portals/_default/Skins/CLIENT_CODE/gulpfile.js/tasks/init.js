const gulp = require('gulp');
const fs = require('fs');
const replace = require('gulp-replace');

const { paths, project } = require('../config');
const { fonts, icons, bootstrapJs, flickityCss, flickityJs } = paths;

function renameDirectories() {
  const skinOld = `../CLIENT_CODE`;
  const skinNew = `../${project.name}`;

  fs.access(skinOld, err => {
    if (!err) {
      fs.renameSync(skinOld, skinNew, err => {
        if (err) throw err;
        console.log(`Skin directory renamed to ${project.name}`);
      });
    }

    if (err && err.code === 'ENOENT') {
      console.log(`Directory "${skinOld}" not found`);
    }
  });

  const containersOld = `../../Containers/CLIENT_CODE`;
  const containersNew = `../../Containers/${project.name}`;

  fs.access(containersOld, err => {
    if (!err) {
      fs.renameSync(containersOld, containersNew, err => {
        if (err) throw err;
        console.log(`Containers directory renamed to ${project.name}`);
      });
    }

    if (err && err.code === 'ENOENT') {
      console.log(`Directory "${containersOld}" not found`);
    }
  });

  const ednPath = `../../../../DesktopModules/EasyDNNnews/Templates/_default`;
  const ednOld = `${ednPath}/CLIENT_CODE`;
  const ednNew = `${ednPath}/${project.name}`;

  fs.access(ednOld, err => {
    if (!err) {
      fs.renameSync(ednOld, ednNew, err => {
        if (err) throw err;
        console.log(`EDN template directory renamed to ${project.name}`);
      });
    }

    if (err && err.code === 'ENOENT') {
      console.log(`Directory "${ednOld}" not found`);
    }
  });

  return Promise.resolve();
}

function setSassClientCode() {
  const pattern = /\$asl--client-code:\\?.*/g;
  const updated = `$asl--client-code: "${project.name}";`;

  return gulp
    .src('./src/scss/_abstracts/_variables.scss')
    .pipe(replace(pattern, updated))
    .pipe(gulp.dest('./src/scss/_abstracts/'));
}

function getFonts() {
  if (!project.fonts) return Promise.resolve();
  return gulp.src(fonts.src).pipe(gulp.dest(fonts.dest));
}

function getIcons() {
  if (!project.icons) return Promise.resolve();
  return gulp.src(icons.src).pipe(gulp.dest(icons.dest));
}

function getBootstrapJs() {
  if (!project.vendors.bootstrap) return Promise.resolve();
  return gulp.src(bootstrapJs.src).pipe(gulp.dest(bootstrapJs.dest));
}

function getFlickityCss() {
  if (!project.vendors.flickity) return Promise.resolve();
  return gulp.src(flickityCss.src).pipe(gulp.dest(flickityCss.dest));
}

function getFlickityJs() {
  if (!project.vendors.flickity) return Promise.resolve();
  return gulp.src(flickityJs.src).pipe(gulp.dest(flickityJs.dest));
}

const initTask = gulp.series(
  renameDirectories
  // setSassClientCode,
  // getFonts,
  // getIcons,
  // getBootstrapJs,
  // getFlickityCss,
  // getFlickityJs
);

gulp.task('init', initTask);
module.exports = initTask;
