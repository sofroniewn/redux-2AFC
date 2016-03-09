var choice = require('./choice.js')
var target = require('./target.js')

module.exports = function (state) {
  return new Array().concat(
    choice(),
    target(state)
  )
}