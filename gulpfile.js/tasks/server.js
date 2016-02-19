'use strict'

var config = require('../config').styleguide,
    gulp = require('gulp'),
    browserSync = require('browser-sync')
var serverTask = function() {
    browserSync.init({
        logPrefix: "Guidebook",
        server: {
            baseDir: config.path.dest.pages
        },
        open: false
    });
}

gulp.task('server', function() {
	return serverTask();
});

module.exports = serverTask;
