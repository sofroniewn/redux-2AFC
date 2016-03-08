var choice = require('./choice.js')
var target = require('./target.js')

function render(state) {
  target.render(state)
}

module.exports = {render}