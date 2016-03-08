var dx = require('hxdx').dx
var actions = require('../actions/choice.js')

module.exports = function (state) {
  function zero () {
    dx(actions.zero())
  }

  function one () {
    dx(actions.one())
  }

  five.Led(3)

  return hx`
    <div>
      <button style=${style.button} onclick=${zero} >zero</button>
      <button style=${style.button} onclick=${one} >one</button>
    </div>`
}