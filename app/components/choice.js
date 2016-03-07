var Readable = require('stream').Readable  
var util = require('util')  
var five = require('johnny-five')

util.inherits(MyStream, Readable)  
function MyStream(opt) {  
  Readable.call(this, opt)
}
MyStream.prototype._read = function() {};  
// hook in our stream
process.__defineGetter__('stdin', function() {  
  if (process.__stdin) return process.__stdin
  process.__stdin = new MyStream()
  return process.__stdin
})

var actions = require('../actions/index.js')

var board = new five.Board()
// Connect inputs to dispatches
board.on('ready', function () {
  zero = new five.Button(2)
  one = new five.Button(3)

  zero.on('press', function() {
    store.dispatch(actions.zero())
  })

  one.on('press', function() {
    store.dispatch(actions.one())
  })
})

var valueEl = document.getElementById('value')

function render(state) {
  if (state.choice.value === 0) {
    valueEl.innerHTML = 'Red'
  }
  else {
    valueEl.innerHTML = 'Blue'
  }
}

module.exports = {render}
