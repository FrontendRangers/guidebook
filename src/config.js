import pkg from '../package.json';
import path from 'path';

const dest = './build/';
const basePath = process.cwd();
const SRC_DIR = path.join(basePath, '/src/docs');

module.exports = {
    metadata: {
        site: {
            name: 'Guidebook',
            description: 'Guidebook the styleguide generator.',
            version: pkg.version,
            css: ['assets/css/style.css']
        }
    },
    path: {
        SRC_DIR: path.join(basePath, '/src/docs/'),
        HELPERS_PATH: path.join(basePath, '/src/styleguide/helpers/'),
        LAYOUTS_PATH: path.join(basePath, '/src/styleguide/templates/'),
        PARTIALS_PATH: path.join(basePath, '/src/styleguide/partials/'),
        STYLES_PATH: path.join(basePath, '/src/styleguide/styles/'),
        SCRIPTS_PATH: path.join(basePath, '/src/styleguide/scripts/')
    },
    layout: 'default.html'
};
