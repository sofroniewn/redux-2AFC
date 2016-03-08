var choice = require('./choice.js')
var target = require('./target.js')

module.exports = function (state) {
  target(state)
  choice(state)
}