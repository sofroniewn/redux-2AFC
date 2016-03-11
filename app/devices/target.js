module.exports = function (state, dispatch) {
  var value = [0, 0]
  
  if (state.status === true) {
    value[state.choice.target] = 1
  }

  return {
    'TARGET_ZERO': {
      type: 'DO',
      value: value[0]
    },
    'TARGET_ONE': {
      type: 'DO',
      value: value[1]
    }
  }
}