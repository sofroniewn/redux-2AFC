var now = require('performance-now')

const logger = store => next => action => {
  var time = now()
  var result = next(action)
  var duration = now()-time
  var obj = {'time': time.toFixed(2),
    'action': action,
    'state': store.getState(),
    'duration': duration.toFixed(3)
    }
  console.log(JSON.stringify(obj))
  return result
}

module.exports = logger