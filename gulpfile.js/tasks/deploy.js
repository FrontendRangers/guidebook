'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    ghPages = require('gulp-gh-pages');

gulp.task('styleguide:deploy', ['styleguide:dev'], function () {
    return gulp.src(config.styleguide.path.dest.pages + '/**/*')
        .pipe(ghPages());
});
