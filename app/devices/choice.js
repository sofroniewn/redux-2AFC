var dx = require('hxdx').dx
var five = require('johnny-five')
var board = require('../board')
var actions = require('../actions/choice.js')

// Connect inputs to dispatches
board.on('ready', function () {
  var zero = new five.Button(2)
  var one = new five.Button(3)

  zero.on('press', function() {
    dx(actions.zero())
  })

  one.on('press', function() {
    dx(actions.one())
  })
})