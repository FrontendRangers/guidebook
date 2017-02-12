import path from 'path';
import glob from 'globby';
import Promise from 'bluebird';

import compilers from '../compilers';

const fs = Promise.promisifyAll(require('fs-extra'));

function buildPages(options) {
    console.log(`Generating the pages..`);
    
    // TODO: Get src files from config
    let files = glob(['example/**/*.md']);

    files.then(
        files => {
            files.map(file => {
                compilers.pages(file, null, options).then(contents => {
                    let filename = path.resolve('build', file.replace(/\.md$/, '.html'));
                    fs.outputFile(filename, contents, 'utf-8', (err) => {
                        if (err) throw err;
                    });
                });
            });
        }
    );
}

export default buildPages;