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

var EventEmitter = require('events').EventEmitter
var emitter = new EventEmitter();
board.on('ready', function () {
  emitter.emit('ready')
})

var pins = {}

function init(output, pinmap) {
  _(output).forEach(function(item, key) {
    if (key in pinmap) {
      pins[key] = new five.Pin({pin: pinmap[key], mode: item.mode})
      if(item.mode === 0) {
        pins[key].on('high', function() {
          item.onclick()
        })
      } else if (item.mode === 1) {
        pins[key].write(item.value)
      }
    }
  })
}

function update(output, pinmap) {
  _(output).forEach(function(item, key) {
    if (key in pinmap) {
      if(item.mode === 1) {
        pins[key].write(item.value)
      }
    }
  })
}

module.exports = function (pinmap) {
  return {
    init: function (output) {init(output, pinmap)},
    update: function (output) {update(output, pinmap)},
    emitter: emitter
  }
}