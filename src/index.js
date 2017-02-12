import _ from 'lodash';

import builders from './builders';
import compilers from './compilers';

import defaults from './config';

// Setup options
    // Generate file tree for navigation
// 
// Build Pages
    // Retrieve list of Pages ✔
    // Read frontmatter ✔
    // Render markdown ✔
    // Wrap content with template ✔
// Build components
    // Get files with .markup.html ✔
    // Wrap content with template ✔
// Generate class
    // From sass, postcss and less


// TODO: Add custom renderer to add classes to html

function Guidebook(config) {
    let options = _.assign(config, defaults);
    
    try {
        
        builders.pages(options);
        builders.markup(options);
        compilers.styles(options);
        
    } catch(err) {
        console.log(err);
    }
}

export default new Guidebook;