const gulp = require('gulp');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');

const manifest = require('./manifest.json');

gulp.task('css', function () {
  return gulp
  .src(["lib/css/popup.css"])
  .pipe(postcss([autoprefixer()]))
  .pipe(cleanCSS())
  .pipe(gulp.dest("dist/popup"));
});

gulp.task('html', () => {
  return gulp
  .src("lib/html/popup.html")
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest("dist/popup"));
});

gulp.task('img', () => {
  return gulp
  .src(['lib/img/**'])
  .pipe(gulp.dest("dist/img"));
});

gulp.task('js', () => {
  var promises = [];

  function getPromise(fileName, findPath) {
    return gulp
    .src([
      'lib/js/shared/**',
      `${findPath}/**`
    ])
    .pipe(concat(`${fileName}.js`))
    .pipe(uglify({
      mangle: {},
    }))
    .pipe(gulp.dest(`dist/${fileName}`));
  };

  promises.push(getPromise('popup', 'lib/js/popup'));
  promises.push(getPromise('youtube', 'lib/js/content/youtube'));
  promises.push(getPromise('background', 'lib/js/background'));

  return Promise.all(promises);
});

gulp.task('manifest', () => {
  return new Promise(function (res, rej) {
    fs.writeFile(`dist/manifest.json`, JSON.stringify(manifest), function (err) {
      if (err) rej(err);
      else res();
    });
  });
});

gulp.task('clean', () => {
  return gulp
  .src('dist', {
    read: false,
    allowEmpty: true
  })
  .pipe(clean());
});

gulp.task('dist', gulp.series(
  'html',
  'css',
  'img',
  'js',
  'manifest'
));
