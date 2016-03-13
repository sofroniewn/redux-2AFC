var hx = require('hxdx').hx
//var choice = require('./choice.js')
var controls = require('./controls.js')
//var target = require('./target.js')
var results = require('./results.js')
var timer = require('./timer.js')
var timeout = require('./timeout.js')

module.exports = function (state) {
  timeout(state)
  return hx`
  <div>
    ${controls(state)}
    ${timer(state.remaining)}
    ${results(state)}
    <hr>
  </div>`
}