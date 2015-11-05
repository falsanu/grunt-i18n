/**
 * Created by janfanslau on 16.09.14.
 */

'use strict';
var jsSourceFilter = function (filename) {
  return (filename.indexOf('js/source') === -1);
};

var nopFilter = function(filename) {
  return filename !== null;
};
module.exports = {
  i18n: {
    files: [
      { src: '<%= paths.i18n.base %>/**/*.po', dest: '<%= paths.src %>', expand: true, flatten: false, filter: nopFilter }
    ]
  }
};
