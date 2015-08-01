'use strict';

var HTMLing = require('htmling');

exports.name = 'htmling';
exports.outputFormat = 'html';

exports.compile = function (str, options) {
  var template = HTMLing.string(str, options);
  return function (locals) {
    return template.render(locals)
  }
}
