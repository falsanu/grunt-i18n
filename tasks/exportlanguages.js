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

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('exportlanguages', 'The best Grunt plugin ever.', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
      paths: {
        pathToConfig:'test/languages.json',
        source: 'test/src',
        translations: 'test/src/i18n',
        i18n: {
          base: 'i18n',
          templates: 'test/i18n/templates/LC_MESSAGES',
          pot: 'test/i18n/templates/LC_MESSAGES/messages.pot',
          json: 'test/src/i18n'
        }
      }
		});


grunt.config.data.mkdir.exportlanguages_mkdir = {options: {
	create: [options.paths.i18n.templates]
}};
grunt.task.run('mkdir:exportlanguages_mkdir');




		//
		// // Iterate over all specified file groups.
		// this.files.forEach(function(f) {
		// 	// Concat specified files.
		// 	var src = f.src.filter(function(filepath) {
		// 		// Warn on and remove invalid source files (if nonull was set).
		// 		if (!grunt.file.exists(filepath)) {
		// 			grunt.log.warn('Source file "' + filepath + '" not found.');
		// 			return false;
		// 		} else {
		// 			return true;
		// 		}
		// 	}).map(function(filepath) {
		// 		// Read file source.
		// 		return grunt.file.read(filepath);
		// 	}).join(grunt.util.normalizelf(options.separator));
		//
		// 	// Handle options.
		// 	src += options.punctuation;
		//
		// 	// Write the destination file.
		// 	grunt.file.write(f.dest, src);
		//
		// 	// Print a success message.
		// 	grunt.log.writeln('File "' + f.dest + '" created.');
		// });
	});

};
