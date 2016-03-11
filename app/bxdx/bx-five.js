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

var board = new five.Board({repl: false, debug: false})

var EventEmitter = require('events').EventEmitter
var emitter = new EventEmitter();
board.on('ready', function () {
  emitter.emit('ready')
})

var pins = {}

function init(address, item) {
  switch (item.type) {
    case 'DO':
      pins[address] = new five.Pin({pin: address, mode: 1})
      pins[address].write(item.value)
      break
    case 'DI':
      pins[address] = new five.Pin({pin: address, mode: 0})
      pins[address].on('high', function() {
        item.onclick()
      })
      break
    default:
      break
  }
}

function update(address, item) {
  switch (item.type) {
    case 'DO':
      pins[address].write(item.value)
      break
    default:
      break
  }
}

module.exports = {
  init: init,
  update: update,
  emitter: emitter
}