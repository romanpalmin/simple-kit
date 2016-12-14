/**
 * Компилирует css
 */
var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    config = require('../config').css;

gulp.task('css', function () {
    return gulp.src(config.src)
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(concat('style.all.min.css'))
        .pipe(gulp.dest(config.dest + '/css'));
});