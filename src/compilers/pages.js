import _ from 'lodash';
import Consolidate from 'consolidate';
import Markdown from 'markdown-it';
import Promise from 'bluebird';
import matter from 'gray-matter';
import path from 'path';
import glob from 'globby';

import getRelativePath from '../libs/get-relative-path';

const fs = Promise.promisifyAll(require('fs-extra'));

const md = new Markdown({
    html: true,
});

function _getCollections() {
    // TODO: make this dynamic
    // TODO: cache the result
    let collections = [
        {
            title: 'Components',
            pages: [
                {
                    title: 'Buttons',
                    path: 'components/buttons/buttons.html'
                },
                {
                    title: 'Cards',
                    path: 'components/cards/cards.html'
                }
            ]
        }, 
        {
            title: 'Modules'
        }
    ];
    
    let files = glob(['example/**/*.md']);
    files.then(files => {
        files.map(file => {
            let newItem = file.replace(/\.md$/, '.html');
            return newItem;
        });
    });
    
    return collections;
}

function compilePages(file, templateFile, options) {
    let source = fs.readFileSync(path.resolve(file), 'utf-8');
    let fm = matter(source);
    let data = fm.data;
    // TODO: Create constructor for this
    // TODO: Generate list of partials from the partials directory
    const content = {
        title: data.title,
        body: md.render(fm.content),
        partials: {
            head: '../partials/head',
            header: '../partials/header',
            sidebar: '../partials/sidebar',
            footer: '../partials/footer'
        },
        rootPath: getRelativePath(file),
        collections: _getCollections()
    };
        
    // Append metadata to the content
    _.assignIn(content, options.metadata);
    
    // TODO: give a default layout but can be changed with fm
    let layout = templateFile ? path.join(options.path.LAYOUTS_PATH, templateFile) : path.join(options.path.LAYOUTS_PATH, options.layout);
    return Consolidate.handlebars(layout, content);
}

export default compilePages;