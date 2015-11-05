/**
 * Created by janfanslau on 16.09.14.
 */

'use strict';

module.exports = function (grunt) {
  var languageInfo = grunt.file.readJSON(grunt.config.data.i18n.paths.pathToConfig);
  var languages = Object.keys(languageInfo);
  var paths = grunt.config.data.i18n.paths;
  return {
    default: { // Target name.
      options: {
        template: '<%= paths.i18n.pot %>',
        languages: languages,
        localeDir: '<%= paths.i18n.base %>'
      }
    }
  };
};
