var hx = require('hxdx').hx
var dx = require('hxdx').dx
var actions = require('../actions')

module.exports = function (state) {
  function reset () {
    dx(actions.reset())
  }

  function pause () {
    dx(actions.pause())
  }

  var status
  var playChoice

  if (state.status === true) {
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
        <button onclick=${reset} >reset</button>
        <button onclick=${pause} >${playChoice}</button>
      </p>
      <p>
        <span>${playStatus}</span>
      </p>
  </div>`
}
