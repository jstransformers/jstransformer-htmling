'use strict'

const HTMLing = require('htmling')

exports.name = 'htmling'
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  const template = HTMLing.string(str, options)
  return locals => {
    return template.render(locals)
  }
}
