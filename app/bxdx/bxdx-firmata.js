var Board = require('firmata')
var board = new Board('/dev/cu.usbmodem1411')
var _ = require('lodash')

// board.on('ready', function () {
//   console.log('Board ready')
// })

function init(outputList, pinmap) {
  _(outputList).forEach(function(output, key) {
    if(output['mode'] === 0) {
      board.pinMode(pinmap[key], board.MODES.INPUT)
      board.digitalRead(pinmap[key], function(value) {
      if (value === 1) {
          output['onclick']()
        }
      })
    } else if (output['mode'] === 1) {
        board.pinMode(pinmap[key], board.MODES.OUTPUT)
        board.digitalWrite(pinmap[key], output['value'])
    }
  })
}

function update(outputList, pinmap) {
  _(outputList).forEach(function(output, key) {
    if(output['mode'] === 1) {
      board.digitalWrite(pinmap[key], output['value'])
    }
  })
}

module.exports = {
  board: board,
  update: update,
  init: init
}