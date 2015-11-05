/**
 * Created by janfanslau on 16.09.14.
 */

'use strict';

module.exports = {
  json: {
    dest: '<%= paths.i18n.json %>',
    options: {
      type: 'json',
      localeDir: '<%= paths.i18n.base %>',
      format: 'jed'
    }
  }
};