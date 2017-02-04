'use strict';

var pkg = require('./package.json');
var path = require('path');

var dest = './build/',
    src = path.join(__dirname, '/src/');

var HELPERS_PATH    = path.join(src, 'styleguide/helpers/'),
    LAYOUTS_PATH    = path.join(src, 'styleguide/templates/'),
    PARTIALS_PATH   = path.join(src, 'styleguide/partials/'),
    STYLES_PATH     = path.join(src, 'styleguide/styles/'),
    SCRIPTS_PATH    = path.join(src, 'styleguide/scripts/');

module.exports = {
    styleguide: {
        metadata: {
            site: {
                name: 'Guidebook',
                description: 'Guidebook the styleguide generator.',
                version: pkg.version,
                css: 'assets/css/style.css'
            }
        },
        collections: {
            components: {
                pattern: 'components/**/*.md'
            }
        },
        path: {
            root: process.cwd(),
            src: {
                ignore: [],
                pages: './src/docs',
                layouts: path.relative(process.cwd(), LAYOUTS_PATH),
                partials: path.relative(process.cwd(), PARTIALS_PATH),
                helpers: path.relative(process.cwd(), HELPERS_PATH),
                styles: STYLES_PATH,
                scripts: SCRIPTS_PATH
            },
            dest: {
                pages: dest + 'docs/',
                libs: dest + 'docs/libs/',
                styles: dest + 'docs/styleguide/styles/',
                scripts: dest + 'docs/styleguide/scripts/'
            }
        }
    }
};
