import path from 'path';
import glob from 'globby';
import Promise from 'bluebird';

import compilers from '../compilers';

const fs = Promise.promisifyAll(require('fs-extra'));

function buildMarkup(options) {
    let files = glob(['example/**/*.markup.html']);

    files.then(
        files => {
            files.map(file => {
                // TODO: Get markup template from config
                // TODO: Get build directory from config
                
                compilers.pages(file, 'markup.html', options).then(contents => {
                    let filename = path.resolve('build', file);
                    fs.outputFile(filename, contents, 'utf-8', (err) => {
                        if (err) throw err;
                    });
                });
            });
        }
    );
}

export default buildMarkup;