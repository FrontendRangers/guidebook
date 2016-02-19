'use strict';

var config        = require('../config').styleguide,
    gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    browserSync   = require("browser-sync"),
    rename        = require('gulp-rename'),
    handlebars    = require('handlebars'),
    metalsmith    = require('metalsmith'),
    msCollections = require('metalsmith-collections'),
    msIgnore      = require('metalsmith-ignore'),
    msInPlace     = require('metalsmith-in-place'),
    msLayouts     = require('metalsmith-layouts'),
    msMarkdown    = require('metalsmith-markdown-remarkable'),
    msPermalinks  = require('metalsmith-permalinks'),
    browserSync   = require('browser-sync'),
    reload        = browserSync.reload;

var styleguideTask = function() {
    metalsmith(config.path.root)
		.source(config.path.src.pages)
        .destination(config.path.dest.pages)
        .clean(true)
		.use(msIgnore([
			"assets/*",
			"templates/*"
		]))
		.use(msCollections(config.collections))
		.use(msMarkdown())
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


gulp.task('styleguide', function() {
	return styleguideTask();
});


module.exports = styleguideTask;
