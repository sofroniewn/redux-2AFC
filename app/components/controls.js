var hx = require('hxdx').hx
var dx = require('hxdx').dx
var actions = require('../actions/controls.js')

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
      <p>
        Correct: <span id="correct">${state.choice.correct}</span>
      </p>
      <p>
        Wrong: <span id="wrong">${state.choice.wrong}</span>
      </p>
      <p>
        Missed: <span id="missed">${state.choice.missed}</span>
      </p>
  </div>`
}
