'use strict;'

var gulp        = require('gulp');
var requireDir  = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp/tasks', {recurse: true});

gulp.task('develop', function () {
    runSequence('build', 'watch');
});

gulp.task('compile', function () {
    runSequence('build');
});