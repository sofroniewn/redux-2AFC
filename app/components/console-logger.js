var now = require('performance-now')

const logger = store => next => action => {
  var time = now()
  var result = next(action)
  var obj = {'time': time.toFixed(2),
    'action': action,
    'state': store.getState()
    }
  console.log(JSON.stringify(obj))
  return result
}


module.exports = logger