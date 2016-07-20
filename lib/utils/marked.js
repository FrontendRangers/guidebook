'use strict';

var marked = require('marked'),
    format = require('string-template'),
    hljs = require('highlight.js');

var markedRenderer = new marked.Renderer();

var escape = function (text) {
    if (typeof text === 'undefined') {
        return '';
    } else {
        return text.toLowerCase().replace(/[^\w]+/g, '-');
    }
};

// Convert headings to styleguide markup
markedRenderer.heading = function (text, level, anchor) {
    var escapedText = anchor ? escape(anchor) : escape(text);
    var output = format('<h{0} class="sg-heading" id="{1}">{2}</h{0}>', [level, escapedText, text]);
    return output;
};

// Convert paragraphs to styleguide markup
markedRenderer.paragraph = function (text) {
    var output = format('<p class="sg-text">{0}</p>', [text]);
    return output;
};

// Convert tables to styleguide markup
markedRenderer.table = function (header, body) {
    var output = format('<table class="sg-table"><thead>{0}</thead><tbody>{1}</tbody></table>', [header, body]);
    return output;
};

markedRenderer.codespan = function (code) {
    var output = format('<code class="sg-code">{0}</code>', [code]);
    return output;
};

// Convert code block to styleguide markup
markedRenderer.code = function (code, language) {

    if (typeof language === 'undefined') language = 'html';

    // Put each options in an array
    var codeOptions = language.split('.');

    // Remove language from options
    var languageToRemove = "html";
    var index = codeOptions.indexOf(languageToRemove);

    if (index !== -1) {
        codeOptions.splice(index, 1);
    }

    // Add default class and prepend styleguide namespace
    var uiClasses = codeOptions;
    uiClasses.unshift("example-ui");

    for (var i = 0; i < uiClasses.length; i++) {
      uiClasses[i] = 'sg-'+ uiClasses[i];
    }

    var uiClassesRendered = uiClasses.join(" ");

    var codeLang = language.split('.')[0];

    var outputUi = format('\n\n<div class="{0}">{1}</div>', [uiClassesRendered, code]);

    var renderedCode = hljs.highlight(codeLang, code).value;
    var outputCode = format('<div class="sg-example-code"><pre><code class="{0}">{1}</code></pre></div>', [codeLang, renderedCode]);

    var outputWrapper = format('<div class="sg-example">{0}{1}</div>', [outputUi, outputCode]);

    return outputWrapper;
};

module.exports = markedRenderer;
