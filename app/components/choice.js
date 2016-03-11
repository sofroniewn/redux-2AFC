var hx = require('hxdx').hx
var dx = require('hxdx').dx
var actions = require('../actions/choice.js')

module.exports = function (state) {
  function zero () {
    if (state.status) {
      dx(actions.response(0))
    }
  }

  function one () {
    if (state.status) {
      dx(actions.response(1))
    }
  }

  var style = {
    buttonOn: {
    },
    buttonOff: {
      opacity: .3
    }
  }

  style.button = state.status ? style.buttonOn : style.buttonOff

  return hx`
    <div>
      <button style=${style.button} onclick=${zero} >zero</button>
      <button style=${style.button} onclick=${one} >one</button>
    </div>`
}