'use strict';

var gulp = require('gulp');

require('require-dir')('./tasks', {
    recurse: true
});

gulp.task('default', ['styleguide:watch', 'styleguide:dev', 'styleguide:server']);
