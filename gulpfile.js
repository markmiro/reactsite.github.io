'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('copy', function () {
  return gulp.src('app/**')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy']);

gulp.task('serve', function () {
  browserSync({
    server: ['dist']
  });
  gulp.watch(['app/**'], ['copy', reload]);
});

gulp.task('deploy', ['default'], function () {
  var ghPagesOptions = {
      message: 'Update ' + new Date().toISOString() + ' [skip ci]',
      branch: 'gh-pages'
  };
  return gulp.src('dist/**')
    .pipe($.ghPages(ghPagesOptions));
});
