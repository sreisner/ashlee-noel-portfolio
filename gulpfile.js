(function() {
  'use strict';

  var app = require('./index');

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var minifyCSS = require('gulp-minify-css');
  var watch = require('gulp-watch');
  var batch = require('gulp-batch');
  var livereload = require('gulp-livereload');

  gulp.task('build', function() {
    gulp.start('minify-css');
  });

  gulp.task('minify-css', function() {
    gulp.src(['./app/**/*.css', '!./app/dist/style.min.css'])
      .pipe(minifyCSS())
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('./app/dist'))
      .pipe(livereload());
  });

  gulp.task('watch', function () {
    app.start(80);
    gulp.start('build');
    livereload({ start: true })
    watch(['./app/**/*.css', '!./app/dist/**'], batch(function(events, done) {
        gulp.start('build', done);
    }));
  });
})();
