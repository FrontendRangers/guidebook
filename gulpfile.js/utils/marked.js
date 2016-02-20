var marked  = require('marked'),
    format  = require('string-template'),
    hljs    = require('highlight.js');

var markedRenderer = new marked.Renderer();

// Convert headings to styleguide markup
markedRenderer.heading = function (text, level) {
  var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

  var output = format('<sg-heading level="{0}"><a class="sg-anchor" href="#{1}"></a>{2}</sg-heading>', [level, escapedText, text]);

  return output;
};

// Convert code block to styleguide markup
markedRenderer.code = function (code, language) {

  if (typeof language === 'undefined') language = 'html';

  var outputUi = format('\n\n<div class="sg-example-ui">{0}</div>', [code]);

  var renderedCode = hljs.highlight(language, code).value;
  var outputCode = format('<div class="sg-example-code"><pre><code class="{0}">{1}</code></pre></div>', [language, renderedCode]);

  var outputWrapper = format('<div class="sg-example">{0}{1}</div>', [outputUi, outputCode]);

  return outputWrapper;
};

module.exports = markedRenderer;
