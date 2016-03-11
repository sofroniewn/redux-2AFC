module.exports = function (state) {
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
      mode: 'DO',
      value: val[0]
    },
    'TARGET_ONE': {
      mode: 'DO',
      value: val[1]
    }
  }
}