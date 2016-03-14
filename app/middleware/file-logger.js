var fs = require('fs')
var now = require('performance-now')
// var mkdirp = require('mkdirp').mkdirp
// mkdirp('../logs')
//var ws = fs.createWriteStream('example.log')

const logger = store => next => action => {
  var time = now()
  var result = next(action)
  var obj = {'time': time.toFixed(2),
    'action': action,
    'state': store.getState()
    }
//  console.log(JSON.stringify(obj))
//  ws.write(JSON.stringify(obj) + '\r\n')
  return result
}

module.exports = logger