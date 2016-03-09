//var pinmap = [2, 3, 4, 5]
var pinmap = ['FIO0', 'FIO2', 'FIO1', 'FIO3']


var ljn = require('labjack-nodejs');
var createDeviceObject = ljn.getDevice();
var board = new createDeviceObject();

// Add hardware
var _ = require('lodash')

var NanoTimer = require('nanotimer')
var oldValues

function init(outputList) {
  oldValues = new Array(pinmap.length).fill(null);
  _(outputList).forEach(function(output, key) {
    if (output['mode'] === 0) {
      var timer = new NanoTimer()
      timer.setInterval(function () {
        board.read(pinmap[key], err, function(value) {
          if (value === 1 & value !== oldValues[key]) {
            output['onclick']()
          }
          oldValues[key] = value
        })
      }, '', '5m')
    } else if (output['mode'] === 1) {
      board.writeSync(pinmap[key], output['value'])
    }
  })
}

function update(outputList) {
  _(outputList).forEach(function(output, key) {
    if(output['mode'] === 1) {
      board.writeSync(pinmap[key], output['value'])
    }
  })
}

function err (res) {console.log('Board error: ', res)}

module.exports = {
  board: board,
  update: update,
  init: init,
  err: err
}