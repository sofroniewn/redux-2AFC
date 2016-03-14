var hx = require('hxdx').hx
var dx = require('hxdx').dx
var actions = require('../actions')
var NanoTimer = require('nanotimer')
var timer = null

module.exports = function (state) {
  function start () {
    dx(actions.start())
  }

  function reset () {
    dx(actions.reset())
  }
  
  if (state.playing & timer === null) {
    timer = new NanoTimer()
    timer.setInterval(function() {
      dx(actions.tick())
    }, '', '1s')
    timer.setTimeout(function () {
      dx(actions.start())
    }, '', state.remaining +'s')
  }
  if (!state.playing & timer !== null) {
    timer.clearInterval()
    timer.clearTimeout()
    timer = null
  }

  var status
  var playChoice

  if (state.playing) {
    playStatus = 'Playing!'
    playChoice = 'pause'
  }
  else {
    playStatus = 'Paused'
    playChoice = 'start'
  }

  return hx`
    <div>
      <p>
        <button onclick=${start} >${playChoice}</button>
        <button onclick=${reset} >reset</button>
      </p>
      <p>
        <span>${playStatus}</span>
      </p>
  </div>`
}
