/**
 * Created by janfanslau on 16.09.14.
 */

'use strict';

module.exports = {
  options: {
    functionName: ['tr', '__', 'trn', '_n'],
    potFile: '<%= paths.i18n.pot %>',
    processMessage: function (message) {
      return message.replace(/\s+/g, ' ');
    }
  },
  views: {
    files: {
      handlebars: ['<%= paths.roles %>/**/views/**/*.hbs'],
      javascript: ['<%= paths.src %>/lib/i18n/*.js']
    }
  }
};