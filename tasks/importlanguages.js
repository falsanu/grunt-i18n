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

	require('load-grunt-tasks')(grunt);
	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('importlanguages', 'Imports PO-Files into given project.', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			paths: {
				pathToConfig: 'test/languages.json',
				source: 'test/src',
				i18n: {
					base: 'i18n',
					templates: 'test/i18n/templates/LC_MESSAGES',
					pot: 'test/i18n/templates/LC_MESSAGES/messages.pot',
					json: 'test/src/i18n'
				}
			}
		});

		grunt.config.data.clean.test = options.paths.i18n.json;
		grunt.task.run('clean:test');

		if (!grunt.config.data.copy) {
			grunt.config.data.copy = {};
		}
		grunt.config.data.copy.importlanguages = {
			files: [{
				src: options.paths.i18n.base + '/**/*.po',
				dest: options.paths.source,
				expand: true,
				flatten: false,
				filter: nopFilter
			}]
		};
		grunt.task.run('copy:importlanguages');

	});

};
