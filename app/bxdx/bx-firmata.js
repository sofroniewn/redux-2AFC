var Board = require('firmata')
var EventEmitter = require('events').EventEmitter

module.exports = function (path) {
  var board = new Board(path)
  var emitter = new EventEmitter();
  board.on('ready', function () {
    emitter.emit('ready')
  })

  function init(address, item) {
    switch (item.type) {
      case 'DO':
        board.pinMode(address, board.MODES.OUTPUT)
        board.digitalWrite(address, item.value)
        break
      case 'DI':
        board.pinMode(address, board.MODES.INPUT)
        board.digitalRead(address, function(value) {
          if (value === 1) {
            item.onclick()
          }
        })
        break
      default:
        break
    }
  }

  function update(address, item) {
    switch (item.type) {
      case 'DO':
        board.digitalWrite(address, item.value)
        break
      default:
        break
    }
  }

  return {
    init: init,
    update: update,
    emitter: emitter
  }
}
