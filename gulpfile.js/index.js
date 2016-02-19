'use strict';

var gulp = require('gulp');

require('require-dir')('./tasks', {recurse: true});

gulp.task('default', ['watch', 'styleguide', 'server']);
