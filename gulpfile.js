/**
 * Created by volkov_p_v@livebs.ru on 01.2016.
 */

'use strict';

var gulp            = require('gulp'),
    liveReload 		= require('gulp-livereload'),
    sourcemaps      = require('gulp-sourcemaps'),
    source          = require('vinyl-source-stream'),
    buffer          = require('vinyl-buffer'),
    browserify      = require('browserify'),
    ngAnnotate      = require('gulp-ng-annotate');

//build js file
gulp.task('build_js', function(){
    return browserify({
        entries: ['./app/app.js'],
        extensions: ['.js']
    }, {
        debug: true
    })
        .bundle()
        .pipe(source("main.js"))
        .pipe(ngAnnotate())
        .pipe(buffer())
        //.pipe(sourcemaps.init({loadMaps: true}))
        //.pipe(sourcemaps.write('../source-map'))
        .pipe(gulp.dest('./app/'));
});
