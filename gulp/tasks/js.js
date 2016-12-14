var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    webpack = require('gulp-webpack'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../config').js,
    gutil = require('gulp-util');

gulp.task('js', function () {
    return gulp.src(config.src)
        .pipe(webpack(require('../../webpack.config.js')))
        .pipe(gulp.dest(config.dest))
        .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .on('error', gutil.log)
            .pipe(sourcemaps.write('./'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.dest));

});