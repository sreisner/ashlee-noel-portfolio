(function() {
  'use strict';

  var app = require('./index');

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var minifyCSS = require('gulp-minify-css');
  var htmlmin = require('gulp-htmlmin');
  var watch = require('gulp-watch');
  var batch = require('gulp-batch');
  var livereload = require('gulp-livereload');
  var rename = require('gulp-rename');
  var uglify = require('gulp-uglify');

  gulp.task('build', function() {
    gulp.start('minify-html');
    gulp.start('minify-css');
    gulp.start('minify-js');
  });

  gulp.task('minify-html', function() {
    gulp.src(['./app/**/*.html', '!./app/dist/**'])
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('./app/dist'))
      .pipe(livereload());
  });

  gulp.task('minify-css', function() {
    gulp.src(['./app/**/*.css', '!./app/dist/**'])
      .pipe(minifyCSS())
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('./app/dist'))
      .pipe(livereload());
  });

  gulp.task('minify-js', function() {
    gulp.src(['./app/**/*.js', '!./app/dist/**'])
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('./app/dist'))
      .pipe(livereload());
  });

  gulp.task('watch', function () {
    app.start(80);
    gulp.start('build');
    livereload({ start: true });
    watch(
      [
        './index.js',
        './app/**',
        '!./app/dist/**'
      ],
      batch(function(events, done) {
        gulp.start('build', done);
      })
    );
  });
})();
