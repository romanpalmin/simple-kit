'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
    return runSequence('css', 'less',  'js', 'vendor', 'images', 'copyindex', 'jshinter', cb);
});