/*
 * grunt-i18n
 * https://github.com/falsanu/grunt-i18n
 *
 * Copyright (c) 2015 Jan Fanslau
 * Licensed under the MIT license.
 */

'use strict';

var jsSourceFilter = function(filename) {
	return (filename.indexOf('js/source') === -1);
};

var nopFilter = function(filename) {
	return filename !== null;
};

module.exports = function(grunt) {

	// require('load-grunt-subtasks')(grunt, {
	// 	 pattern: 'grunt-*',
	// 	 base: './no'
	// });
	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	require('load-grunt-tasks')(grunt);

	grunt.registerMultiTask('exportlanguages', 'Create .po/.pot-Files from translations.', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			paths: {
				pathToConfig: null,
				source: 'test/src',
				i18n: {
					base: 'test/i18n',
					templates: 'test/i18n/templates/LC_MESSAGES',
					pot: 'test/i18n/templates/LC_MESSAGES/messages.pot',
					json: 'test/src/i18n'
				}
			},
		});

		if ( !options.paths.pathToConfig || options.paths.pathToConfig == '' ) {
			grunt.fail.warn('No language configuration file given');
		}

		options = this.options({
			xgettext: {
				options: {
					functionName: ['tr', '__', 'trn', '_n'],
					potFile: options.paths.i18n.pot,
					processMessage: function(message) {
						return message.replace(/\s+/g, ' ');
					}
				},
				views: {
					files: {
						handlebars: ['test/**/*.hbs'],
						javascript: ['test/lib/i18n/*.js']
					}
				}
			},
			abideCreate: {
				options: {
					template: options.paths.i18n.pot,
					languages: [],
					localeDir: options.paths.i18n.base
				}
			},
			abideMerge: {
				options: {
					template: options.paths.i18n.pot,
					localeDir: options.paths.i18n.base
				}
			}
		});

		var languageInfo = grunt.file.readJSON(options.paths.pathToConfig);
		var languages = Object.keys(languageInfo);
		grunt.log.subhead("Exporting files for available languages: " + languages);
		grunt.log.writeln("Creating i18n template folder: " + options.paths.i18n.templates);
		grunt.log.writeln("creating .po-files for languages: " + languages);
		grunt.log.writeln("merging new messages in existing .po-files for languages: " + languages);

		// grunt.loadNpmTasks('grunt-mkdir');
		// grunt.loadNpmTasks('grunt-xgettext');
		// grunt.loadNpmTasks('grunt-i18n-abide');



		if(!grunt.config.data.mkdir) {
			grunt.config.data.mkdir = {};
		}
		// Task for creating translation folder
		grunt.config.data.mkdir.exportlanguages = {
			create: [options.paths.i18n.templates]
		};
		grunt.task.run('mkdir:exportlanguages');


		// task for extracting need-to-translate-texts from code
		grunt.config.data.xgettext = // options.xgettext;
			{
				views: options.xgettext.views,
				options: options.xgettext.options
			}
		grunt.task.run('xgettext');



		// task for creating pot-Files
		grunt.config.data.abideCreate = {
			default: {
				options: {
					template: options.abideCreate.options.template,
					languages: languages,
					localeDir: options.abideCreate.options.localeDir
				}
			}
		};
		grunt.task.run('abideCreate:default');



		// task for merging new translations in existing ones
		grunt.config.data.abideMerge = {
			default: { // Target name.
				options: {
					template: options.abideMerge.options.template,
					localeDir: options.abideMerge.options.localeDir,
				}
			}
		}
		grunt.task.run('abideMerge:default');




	});

};
