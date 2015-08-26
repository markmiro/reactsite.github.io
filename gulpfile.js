'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('copy', function () {
  return gulp.src('app/**')
    .pipe(gulp.dest('dist'));
});

var ghPagesOptions = {
    message: 'Update ' + new Date().toISOString() + ' [skip ci]',
    branch: 'gh-pages'
};

gulp.task('default', ['copy']);

gulp.task('deploy', ['default'], function () {
  return gulp.src('dist/**')
    .pipe($.ghPages(ghPagesOptions));
});

gulp.task('serve', function () {
  browserSync({
    server: ['dist']
  });
  gulp.watch(['app/**'], ['copy', reload]);
});
