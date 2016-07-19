// To be refactor

'use strict';

var config = require('../config').styleguide,
    gulp = require('gulp'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    inquirer = require('inquirer'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    rename = require('gulp-rename');

var generatorTask = function(done) {

    gutil.log('Welcome to Guidebook');

    var questions = [
        {
            type: "list",
            name: "type",
            message: "What do you want to create?",
            choices: [ "Pattern", "Template" ],
            filter: function( val ) {
                return val.toLowerCase();
            }
        },
        {
            type: 'list',
            name: "pattern",
            message: "What pattern do you want to create?",
            choices: [ "Component", "Module" ],
            filter: function( val ) {
                return val.toLowerCase();
            },
            when: function(answers) {
                return answers.type === "pattern";
            }
        },
        {
            type: 'input',
            name: 'name',
            message: function (answers) { return "Name of the " + answers.type; }
        }
    ];

    inquirer.prompt(questions,
      function (answers) {
        gulp.src('./src/styleguide/generator/component.html')
          .pipe(template(answers))
          .pipe(gulpif(answers.type === 'pattern', rename(answers.name.toLowerCase() + '.md')))
          .pipe(gulpif(answers.type === 'template', rename(answers.name.toLowerCase() + '.html')))
          .pipe(conflict('./src/styleguide/generator/component.html'))
          .pipe(gulp.dest('./test/' + answers.type)) // Relative to cwd
          .on('finish', function () {
            gutil.log('Component', answers.name, 'created!');
            gutil.beep();
            done();
          });
      });
};

gulp.task('styleguide:new', function(done) {
	return generatorTask(done);
});

module.exports = generatorTask;
