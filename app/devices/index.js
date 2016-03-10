var choice = require('./choice.js')
var target = require('./target.js')

module.exports = function (state) {
  return Object.assign(
    choice(),
    target(state)
  )
}