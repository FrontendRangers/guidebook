'use strict';

var dest = './build/',
    src = './src/',
    libs = './node_modules';

module.exports = {
    dest: dest,
    libs: libs,
    styleguide: {
        helpers: src + 'styleguide/helpers',
        metadata: {
            title: 'Guidebook'
        },
        collections: {
            getting_started: {
                pattern: 'getting_started/*.md'
            },
            base: {
                pattern: 'base/*.md'
            },
            components: {
                pattern: 'components/*.md'
            },
            modules: {
                pattern: 'modules/*.md'
            },
            templates: {
                pattern: 'templates/*.html'
            }
        },
        path: {
            root: './',
            src: {
                pages: src + 'docs',
                layouts: src + 'styleguide/templates/',
                components: src + 'styleguide/components/',
                partials: src + 'styleguide/partials/',
                styles: src + 'styleguide/styles/',
                scripts: src + 'styleguide/scripts/',
                libs: './libs/',
                watch: [src + 'docs/**/*', src + 'styleguide/**/*'],
            },
            dest: {
                pages: dest + 'docs/',
                libs: dest + 'docs/libs/',
                layouts: dest + 'docs/styleguide/layouts/',
                components: dest + 'docs/styleguide/components/',
                styles: dest + 'docs/styleguide/styles/',
                scripts: dest + 'docs/styleguide/scripts/',
                libs: dest + 'docs/libs/'
            }
        }
    }
};
