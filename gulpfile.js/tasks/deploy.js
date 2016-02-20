var config  = require('../config'),
    gulp    = require('gulp'),
    ghPages = require('gulp-gh-pages');

gulp.task('deploy', function () {
    return gulp.src(config.styleguide.path.dest.pages)
        .pipe(ghPages());
});
