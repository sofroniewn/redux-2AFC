var Board = require('firmata')
var board = new Board('/dev/cu.usbmodem1411')
var _ = require('lodash')

// board.on('ready', function () {
//   console.log('Board ready')
// })

function init(output, pinmap) {
  _(output).forEach(function(item, key) {
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
  })
}

function update(output, pinmap) {
  _(output).forEach(function(item, key) {
    if(item.mode === 1) {
      board.digitalWrite(pinmap[key], item.value)
    }
  })
}

// function start() {

// }

module.exports = function (pinmap) {
  return {
    board: board,
    init: function (output) {init(output, pinmap)},
    update: function (output) {update(output, pinmap)},
  }
}