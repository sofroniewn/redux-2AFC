var hx = require('hxdx').hx
var choice = require('./choice.js')
var controls = require('./controls.js')

module.exports = function (state) {
  return hx`
  <div>
    ${choice(state)}
    ${controls(state)}
  </div>`
}