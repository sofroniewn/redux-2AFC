module.exports = function (state, dispatch) {
  var value = [0, 0]
  
  if (state.playing === true) {
    value[state.target] = 1
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