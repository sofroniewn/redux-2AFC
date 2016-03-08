var dx = require('hxdx').dx
var five = require('johnny-five')
var actions = require('../actions/choice.js')

var zero = new five.Button(2)
var one = new five.Button(3)

zero.on('press', function() {
  dx(actions.zero())
})

one.on('press', function() {
  dx(actions.one())
})