/**
 * Created by janfanslau on 16.09.14.
 */

'use strict';

var path = require('path');

module.exports = {
  src: 'src',
  translations: '<%= paths.i18n.json %>',
  i18n: {
    base: 'i18n',
    templates: '<%= paths.i18n.base %>/templates/LC_MESSAGES',
    pot: '<%= paths.i18n.templates %>/messages.pot',
    json: '<%= paths.src %>/i18n'
  }
};
