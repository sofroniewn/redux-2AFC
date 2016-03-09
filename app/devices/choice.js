var dx = require('hxdx').dx
var actions = require('../actions/choice.js')

module.exports = function () {
  function zero () {
    dx(actions.zero())
  }

  function one () {
    dx(actions.one())
  } 

  return [ 
    {'mode': 0,
      'callback': zero
    },
    {'mode': 0,
      'callback': one
    }]
}