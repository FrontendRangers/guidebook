
var defaults          = require('./config').styleguide,
    _                 = require('lodash'),
    gulp              = require('gulp'),
    gutil             = require('gulp-util'),
    handlebars        = require('handlebars'),
    autoprefixer      = require('gulp-autoprefixer');
    sass              = require('gulp-sass'),
    metalsmith        = require('metalsmith'),
    markedRenderer    = require('./lib/utils/marked'),
    msCollections     = require('metalsmith-collections'),
    msHeadings        = require('metalsmith-headings'),
    msIgnore          = require('metalsmith-ignore'),
    msInPlace         = require('metalsmith-in-place'),
    msLayouts         = require('metalsmith-layouts'),
    msMarkdown        = require('metalsmith-markdown'),
    msPermalinks      = require('metalsmith-permalinks'),
    msRegisterHelpers = require('metalsmith-register-helpers'),
    msRootPath        = require('metalsmith-rootpath');

function styleguideDocsTask(userOptions) {

    var options = {};
    options = _.merge({}, defaults, userOptions);

    var m = metalsmith(options.path.root)
        .clean(false)
        .source(options.path.src.pages)
        .destination(options.path.dest.pages)
        .use(msIgnore([
            "assets/*"
        ]))
        .destination(options.path.dest.pages)
        .metadata(options.metadata)
        .use(msCollections(options.collections))
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
            directory: options.path.src.helpers
        }))
        .use(msLayouts({
            engine: 'handlebars',
            directory: options.path.src.layouts,
            default: 'default.html',
            partials: options.path.src.partials
        }))
        .use(msInPlace({
            engine: 'handlebars'
        }));

    m.build(function(error) {
        if (error) {
            console.error(error.message);
        } else {
            gutil.log('Build finished!');
        }
    });
}

function styleguideStylesTask() {
    return gulp.src(defaults.path.src.styles + '/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(defaults.path.dest.styles));
}

module.exports = function(options) {
    try {
        styleguideDocsTask(options);
        styleguideStylesTask();
    } catch(error) {
        console.error(error);
    }
};
