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

  return [ 
    {id: 'target-zero',
      mode: 1,
      value: val[0]
    },
    {id: 'target-one',
      mode: 1,
      value: val[1]
    }]
}