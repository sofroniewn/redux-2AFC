var actions = require('../actions')

module.exports = function (enabled, dispatch) {
  function zero () {
    if (enabled) {
      dispatch(actions.response(0))
    }
  }

  function one () {
    if (enabled) {
      dispatch(actions.response(1))
    }
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