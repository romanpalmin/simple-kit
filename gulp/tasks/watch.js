'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', function () {
    gulp.watch(config.css.src, ['css']);
    gulp.watch(config.js.src, ['js']);
    gulp.watch(config.images.src, ['images']);
});