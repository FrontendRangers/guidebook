'use strict';

var config      = require('../config'),
    gulp        = require('gulp');

gulp.task('styleguide:watch', function() {
    gulp.watch(config.styleguide.path.src.watch, ['styleguide:dev']);
});
