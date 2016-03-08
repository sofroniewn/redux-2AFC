var five = require('johnny-five')
var board = require('../board')
var actions = require('../actions/choice.js')

var zeroLed = null
var oneLed = null

// Connect inputs to dispatches
board.on('ready', function () {
  zeroLed = new five.Led(4)
  oneLed = new five.Led(5)
})

function render(state) {
  if (state.status === true) {
    if (state.choice.value === 0) {
      zeroLed.on()
      oneLed.off()
    }
    else {
      zeroLed.off()
      oneLed.on()
    }
  } else {
    zeroLed.off()
    oneLed.off()    
  }

}

module.exports = {render}