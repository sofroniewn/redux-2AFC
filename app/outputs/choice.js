var dx = require('../bxdx/bxdx.js').dx
var actions = require('../actions/choice.js')

module.exports = function () {
  function zero () {
    dx(actions.zero())
  }

  function one () {
    dx(actions.one())
  } 

  return {
    'CHOICE_ZERO': {
      mode: 0,
      onclick: zero
    },
    'CHOICE_ONE': {
      mode: 0,
      onclick: one
    }
  }
}