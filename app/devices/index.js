var choice = require('./choice.js')
var target = require('./target.js')

module.exports = function (state, dispatch) {
  return Object.assign(
    choice(null, dispatch),
    target(state, null)
  )
}