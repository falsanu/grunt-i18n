'use strict';

var grunt = require('grunt');
var fs = require('fs');
/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.exportlanguages = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  testPotCreation: function(test) {
    test.expect(1);
    if (fs.existsSync('tmp/i18n/templates/LC_MESSAGES/messages.pot')) {
      test.ok(true, 'message file found');
      test.done();
    }
  },
  testTranslationCreation: function(test) {
    test.expect(1);
    if (fs.existsSync('tmp/i18n/en/LC_MESSAGES/messages.po')) {
      test.ok(true, 'message file found');
      test.done();
    }
  }
};
