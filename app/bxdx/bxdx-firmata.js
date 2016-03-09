var Board = require('firmata')
var board = new Board('/dev/cu.usbmodem1411')
var _ = require('lodash')

//var pinmap = [2, 3, 4, 5]
var pinmap = ['FIO0', 'FIO2', 'FIO1', 'FIO3']

// board.on('ready', function () {
//   console.log('Board ready')
// })

function init(outputList) {
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

function update(outputList) {
  _(outputList).forEach(function(output, key) {
    if(output['mode'] === 1) {
      board.digitalWrite(pinmap[key], output['value'])
    }
  })
}

// function start() {

// }

module.exports = {
  board: board,
  update: update,
  init: init
}