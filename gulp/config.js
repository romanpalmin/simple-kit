'use strict';
var project = '';
var src = './src' + project;
var dist = './build' + project;

module.exports = {
    paths: {
        src: src,
        dist: dist
    },

    css: {
        src: [src + '/styles/**/*.css'],
        dest: dist + '/css'
    },
    
    less: {
        src: [src + '/styles/**/*.less'],
        dest: dist + '/css'
    },

    js: {
        src: [src + '/js/**/*.js'],
        destName: 'bundle.js',
        dest: dist + '/js'
    },

    watch: {
        src: src
    },

    images: {
        src: [src + '/images/**/*'],
        dest: dist + '/images'
    },


    vendors: {
        src: {
            js: [],
            css: []
        },
        dist: {
            js: dist + '/js/vendor',
            css: dist + '/css/vendor'
        }
    }
};