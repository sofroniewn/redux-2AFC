var ljn = require('labjack-nodejs')
var createDeviceObject = ljn.getDevice()
var board = new createDeviceObject()

var EventEmitter = require('events').EventEmitter
var emitter = new EventEmitter();
board.open(err, function () {
  emitter.emit('ready')
})

var NanoTimer = require('nanotimer')
var oldValues = {}

var _ = require('lodash')
function init(output, pinmap) {
  _(output).forEach(function (item, key){
    if (key in pinmap) {
      if (item.mode === 0) {
        oldValues[key] = null
        var timer = new NanoTimer()
        timer.setInterval(function () {
          board.read(pinmap[key], err, function(value) {
            if (value === 1 & value !== oldValues[key]) {
              item.onclick()
            }
            oldValues[key] = value
          })
        }, '', '5m')
      } else if (item.mode === 1) {
        board.writeSync(pinmap[key], item.value)
      }
    }
  })
}

function update(output, pinmap) {
  _(output).forEach(function (item, key) {
    if (key in pinmap) {
      if(item.mode === 1) {
        board.writeSync(pinmap[key], item.value)
      }
    }
  })
}

function err (res) {console.log('Board error: ', res)}

module.exports = function (pinmap) {
  return {
    init: function (output) {init(output, pinmap)},
    update: function (output) {update(output, pinmap)},
    emitter: emitter
  }
}