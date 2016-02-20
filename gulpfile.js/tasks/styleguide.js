'use strict';

var config = require('../config').styleguide,
  gulp = require('gulp'),
  handlebars = require('handlebars'),
  metalsmith = require('metalsmith'),
  msCollections = require('metalsmith-collections'),
  msIgnore = require('metalsmith-ignore'),
  msInPlace = require('metalsmith-in-place'),
  msLayouts = require('metalsmith-layouts'),
  msMarkdown = require('metalsmith-markdown'),
  msPermalinks = require('metalsmith-permalinks'),
  markedRenderer = require("../utils/marked"),
  sass = require("gulp-sass"),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

var styleguideDocsTask = function () {
  metalsmith(config.path.root)
    .source(config.path.src.pages)
    .destination(config.path.dest.pages)
    .clean(true)
    .use(msIgnore([
      "assets/*",
      "templates/*"
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
    .use(msPermalinks())
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
}

gulp.task('styleguide', ['styleguide:docs', 'styleguide:styles']);

gulp.task('styleguide:docs', function () {
  return styleguideDocsTask();
})

gulp.task('styleguide:styles', function () {
  return styleguideStylesTask();
})
