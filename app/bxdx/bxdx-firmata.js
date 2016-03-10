var Board = require('firmata')
var board = new Board('/dev/cu.usbmodem1411')
var _ = require('lodash')

var EventEmitter = require('events').EventEmitter
var emitter = new EventEmitter();
board.on('ready', function () {
  emitter.emit('ready')
})

function init(output, pinmap) {
  _(output).forEach(function(item, key) {
    if (key in pinmap) {
      if (item.mode === 0) {
        board.pinMode(pinmap[key], board.MODES.INPUT)
        board.digitalRead(pinmap[key], function(value) {
        if (value === 1) {
            item.onclick()
          }
        })
     } else if (item.mode === 1) {
          board.pinMode(pinmap[key], board.MODES.OUTPUT)
          board.digitalWrite(pinmap[key], item.value)
      }
    }
  })
}

function update(output, pinmap) {
  _(output).forEach(function(item, key) {
    if (key in pinmap) {
      if(item.mode === 1) {
        board.digitalWrite(pinmap[key], item.value)
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
