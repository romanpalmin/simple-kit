/**
 * Компилирует css из less
 */
var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    config = require('../config'),
    autoprefixer = require('gulp-autoprefixer'),
    less = require('gulp-less');

gulp.task('less', function () {
    return gulp.src(config.less.src)
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(concat('style.all.min.css'))
        .pipe(gulp.dest(config.less.dest))
});