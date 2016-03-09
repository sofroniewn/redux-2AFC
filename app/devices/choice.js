var dx = require('../bxdx/bxdx.js').dx
var actions = require('../actions/choice.js')

module.exports = function () {
  function zero () {
    dx(actions.zero())
  }

  function one () {
    dx(actions.one())
  } 

  return [ 
    {id: 'choice-zero',
      mode: 0,
      onclick: zero
    },
    {id: 'choice-one',
      mode: 0,
      onclick: one
    }]
}