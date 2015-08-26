'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

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
