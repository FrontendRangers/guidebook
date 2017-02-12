import path from 'path';
import Promise from 'bluebird';

const fs = Promise.promisifyAll(require('fs-extra'));

// Styles
import sass from 'node-sass';
import Postcss from 'postcss';
import precss from 'precss';
import postcssScss from 'postcss-scss';
import autoprefixer from 'autoprefixer';

function compileStyles(options) {
    console.log(`Compiling styles..`);
    let file = options.path.STYLES_PATH + 'guidebook.scss';
    // fs.readFile(path.resolve(file), 'utf-8', (err, css) => {
    //     Postcss(postcssPlugins)
    //         .process(css, {
    //             parser: postcssScss,
    //             from: file
    //         })
    //         .then(result => {
    //             // TODO: Get styleguide css from config
    //             let filename = path.resolve('build/example/styleguide/styles', 'guidebook.css');
    //             fs.outputFile(filename, result.css);
    //         }).catch(function (err) {
    //             throw new Error(err);
    //         });
    // });
    sass.render({file: file}, function(err, result) {
        let filename = path.resolve('build/example/styleguide/styles', 'guidebook.css');
        fs.outputFile(filename, result.css);
    });
}

export default compileStyles;