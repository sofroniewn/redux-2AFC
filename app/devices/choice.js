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
      mode: 'DI',
      onclick: zero
    },
    'CHOICE_ONE': {
      mode: 'DI',
      onclick: one
    }
  }
}