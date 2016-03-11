var actions = require('../actions/choice.js')

module.exports = function (state, dispatch) {
  function zero () {
    dispatch(actions.zero())
  }

  function one () {
    dispatch(actions.one())
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