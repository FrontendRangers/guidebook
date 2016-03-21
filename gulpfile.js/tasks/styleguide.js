'use strict';

var config = require('../config').styleguide,
    gulp = require('gulp'),
    runSequence = require('run-sequence'),
    handlebars = require('handlebars'),
    metalsmith = require('metalsmith'),
    msCollections = require('metalsmith-collections'),
    msHeadings = require('metalsmith-headings'),
    msIgnore = require('metalsmith-ignore'),
    msInPlace = require('metalsmith-in-place'),
    msLayouts = require('metalsmith-layouts'),
    msMarkdown = require('metalsmith-markdown'),
    msPermalinks = require('metalsmith-permalinks'),
    markedRenderer = require('../utils/marked'),
    msRootPath = require('metalsmith-rootpath'),
    msRegisterHelpers = require('metalsmith-register-helpers'),
    sass = require("gulp-sass"),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var styleguideDocsTask = function () {
    metalsmith(config.path.root)
        .source(config.path.src.pages)
        .destination(config.path.dest.pages)
        .clean(true)
        .use(msIgnore([
            "assets/*"
        ]))
        .use(msCollections(config.collections))
        .metadata({
            site: config.metadata,
        })
        .use(msMarkdown({
            gfm: true,
            smartypants: true,
            renderer: markedRenderer,
            langPrefix: 'language-'
        }))
        .use(msHeadings('h2.sg-heading'))
        .use(msPermalinks())
        .use(msRootPath())
        .use(msRegisterHelpers({
            directory: config.helpers
        }))
        .use(msLayouts({
            engine: 'handlebars',
            directory: config.path.src.layouts,
            default: 'default.html',
            partials: config.path.src.partials
        }))
        .use(msInPlace({
            engine: 'handlebars'
        }))
        .build(reload);
};

var styleguideStylesTask = function () {
    return gulp.src(config.path.src.styles + '*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.path.dest.styles))
        .pipe(browserSync.stream());
};

var styleguideAssetsTask = function () {
    return gulp.src([config.path.src.components + '*.html'])
        .pipe(gulp.dest(config.path.dest.components));
};

var styleguideLibsTask = function () {
    return gulp.src([config.path.src.libs + '**/*'])
        .pipe(gulp.dest(config.path.dest.libs));
};

gulp.task('styleguide:dev', function (callback) {
    runSequence(
        'styleguide:docs',
        'styleguide:styles',
        'styleguide:assets',
        'styleguide:libs',
        callback);
});

gulp.task('styleguide:docs', function () {
    return styleguideDocsTask();
});

gulp.task('styleguide:libs', function () {
    return styleguideLibsTask();
});

gulp.task('styleguide:assets', function () {
    return styleguideAssetsTask();
});

gulp.task('styleguide:styles', function () {
    return styleguideStylesTask();
});
