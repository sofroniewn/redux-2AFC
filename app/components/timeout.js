var dx = require('hxdx').dx
var actions = require('../actions')
var NanoTimer = require('nanotimer')
var timer = null

module.exports = function (state) {
  function timeout () {
    dx(actions.timeout())
  }
  
  if (state.playing & timer === null) {
    timer = new NanoTimer()
    timer.setInterval(function() {
      dx(actions.timeout())
    }, '', '3s')
  }
  if (state.playing & timer !== null & state.response) {
    timer.clearInterval()
    timer.setInterval(function() {
      dx(actions.timeout())
    }, '', '3s')
  }

  if (!state.playing & timer !== null) {
    timer.clearInterval()
    timer = null
  }

  return
}
