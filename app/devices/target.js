module.exports = function (state, dispatch) {
  var val = [0, 0]
  
  if (state.status === true) {
    if (state.choice.value === 0) {
      val[0] = 1
    }
    else {
      val[1] = 1
    }
  }

  return {
    'TARGET_ZERO': {
      type: 'DO',
      value: val[0]
    },
    'TARGET_ONE': {
      type: 'DO',
      value: val[1]
    }
  }
}