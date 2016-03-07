var hx = require('hxdx').hx
var choice = require('./choice.js')
var controls = require('./controls.js')
var target = require('./target.js')
var results = require('./results.js')

module.exports = function (state) {
  return hx`
  <div>
    ${controls(state)}
    ${target(state)}
    ${choice(state)}
    ${results(state)}
  </div>`
}