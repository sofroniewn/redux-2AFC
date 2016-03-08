var five = require('johnny-five')
var actions = require('../actions/choice.js')

zeroLed = new five.Led(4)
oneLed = new five.Led(5)

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