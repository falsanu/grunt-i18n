/**
 * Created by janfanslau on 16.09.14.
 */

'use strict';

module.exports = {
  default: { // Target name.
    options: {
      template: '<%= paths.i18n.pot %>',
      localeDir: '<%= paths.i18n.base %>'
    }
  }
};