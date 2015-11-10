/*
 * grunt-i18n
 * https://github.com/falsanu/grunt-i18n
 *
 * Copyright (c) 2015 Jan Fanslau
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');
module.exports = function(grunt) {


	var _ = grunt.util._;
	// loads task options from task/options folder
	var config = _.extend({
			jshint: {
				all: [
					'Gruntfile.js',
					'tasks/*.js',
					'<%= nodeunit.tests %>'
				],
				options: {
					jshintrc: '.jshintrc'
				}
			},

			// Before generating any new files, remove any previously-created files.
			clean: {
				tests: ['tmp']
			},

			// Configuration to be run (and then tested).
			exportlanguages: {
				test: {
					options: {
						enableAbideMerge:true,
						paths: {
							pathToConfig: 'test/fixtures/languages.json',
							source: 'tmp/src',
							translations: 'tmp/src/i18n',
							i18n: {
								base: 'tmp/i18n',
								templates: 'tmp/i18n/templates/LC_MESSAGES',
								pot: 'tmp/i18n/templates/LC_MESSAGES/messages.pot',
								json: 'tmp/src/i18n'
							}
						}
					}
				}
			},
			importlanguages: {
				tests: {
					options: {
						paths: {
							pathToConfig: 'test/languages.json',
							source: 'test/src',
							translations: 'test/src/i18n',
							i18n: {
								base: 'tmp/i18n',
								templates: 'test/i18n/templates/LC_MESSAGES',
								pot: 'test/i18n/templates/LC_MESSAGES/messages.pot',
								json: 'test/src/i18n'
							}
						}
					}
				}
			},
			// Unit tests.
			nodeunit: {
				tests: ['test/*_test.js']
			}

		},
		require('load-grunt-config')(grunt, {
			configPath: path.join(__dirname, 'tasks/subtasks'),
			loadGruntTasks: false,
			init: false
		})
	);


	// Project configuration.
	grunt.initConfig(config);



	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'exportlanguages', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['exportlanguages:tests']);




};
