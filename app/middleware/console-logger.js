var now = require('performance-now')
var actions = require('../actions')

const logger = store => next => action => {
  var time = now()
  var result = next(action)
  var duration = now()-time
  if (action.type !== actions.TICK) {
    var obj = {'time': time.toFixed(2),
      'duration': duration.toFixed(3),
      'action': action,
      'state': store.getState()
       }
    console.log(JSON.stringify(obj))
  }
  return result
}

module.exports = logger