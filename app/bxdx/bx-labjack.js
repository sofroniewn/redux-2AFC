var ljn = require('labjack-nodejs')
var createDeviceObject = ljn.getDevice()
var board = new createDeviceObject()
var EventEmitter = require('events').EventEmitter
var NanoTimer = require('nanotimer')

function err (res) {console.log('Board error: ', res)}

var emitter = new EventEmitter();
board.open(err, function () {
  emitter.emit('ready')
})

var previous = {}
var timer = {}

function init(address, item) {
  switch (item.mode) {
    case 'DO':
      board.writeSync(address, item.value)
      break
    case 'DI':
      previous[address] = null
      timer[address] = new NanoTimer()
      timer[address].setInterval(function () {
        board.read(address, err, function(value) {
          if (value === 1 & value !== previous[address]) {
            item.onclick()
          }
          previous[address] = value
        })
      }, '', '5m')
      break
    default:
      break
  }
}

function update(address, item) {
  switch (item.mode) {
    case 'DO':
      board.writeSync(address, item.value)
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
