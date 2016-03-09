//var pinmap = [2, 3, 4, 5]
var pinmap = ['FIO0', 'FIO2', 'FIO1', 'FIO3']


var Readable = require('stream').Readable  
var util = require('util')  
var five = require('johnny-five')

util.inherits(MyStream, Readable)  
function MyStream(opt) {  
  Readable.call(this, opt)
}
MyStream.prototype._read = function() {};  
// hook in our stream
process.__defineGetter__('stdin', function() {  
  if (process.__stdin) return process.__stdin
  process.__stdin = new MyStream()
  return process.__stdin
})

var board = new five.Board()
var _ = require('lodash')

// board.on('ready', function () {
//   console.log('Board ready')
// })

var pins

function init(outputList) {
  pins = _.map(pinmap, function (address, key){
    return new five.Pin({pin: address, mode: outputList[key]['mode']})
  })

  _(outputList).forEach(function(output, key) {
    if(output['mode'] === 0) {
      pins[key].on('high', function() {
        output['onclick']()
      })
    } else if (output['mode'] === 1) {
        board.digitalWrite(pinmap[key], output['value'])
    }
  })
}

function update(outputList) {
  _(outputList).forEach(function(output, key) {
    if(output['mode'] === 1) {
      pins[key].write(output['value'])
    }
  })
}

module.exports = {
  board: board,
  update: update,
  init: init
}