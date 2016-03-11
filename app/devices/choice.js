var actions = require('../actions/choice.js')

module.exports = function (state, dispatch) {
  function zero () {
    dispatch(actions.response(0))
  }

  function one () {
    dispatch(actions.response(1))
  } 

  return {
    'CHOICE_ZERO': {
      type: 'DI',
      onclick: zero
    },
    'CHOICE_ONE': {
      type: 'DI',
      onclick: one
    }
  }
}