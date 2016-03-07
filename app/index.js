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

var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var thunk = require('redux-thunk')
var reducer = require('./reducers/index')
var actions = require('./actions/actions.js')
var now = require('performance-now')

// Creat store with logging middleware
const logger = store => next => action => {
  var time = now()
  var result = next(action)
  var obj = {'time': time.toFixed(2),
    'action': action,
    'state': store.getState()
    }
  console.log(JSON.stringify(obj))
  return result
}
var store = createStore(reducer, applyMiddleware(thunk, logger))


var board = new five.Board()
console.log('Hello')

// Connect inputs to dispatches
board.on('ready', function () {
  console.log('Board Ready')
  zero = new five.Button(2)
  one = new five.Button(3)

  zero.on('press', function() {
    store.dispatch(actions.zero())
  })

  one.on('press', function() {
    store.dispatch(actions.one())
  })

  document.getElementById('reset')
    .addEventListener('click', function () {
      store.dispatch(actions.reset())
    })

  document.getElementById('pause')
    .addEventListener('click', function () {
      store.dispatch(actions.pause())
    })
})

// Connect state to outputs
var valueEl = document.getElementById('value')
var correctEl = document.getElementById('correct')
var wrongEl = document.getElementById('wrong')
var missedEl = document.getElementById('missed')
var statusEL = document.getElementById('status')
var statusButtonEL = document.getElementById('pause')
var zeroButtonEL = document.getElementById('zero')
var oneButtonEL = document.getElementById('one')


function render() {
  if (store.getState().choice.value === 0) {
    valueEl.innerHTML = 'Red'
  }
  else {
    valueEl.innerHTML = 'Blue'
  }

  correctEl.innerHTML = store.getState().choice.correct
  wrongEl.innerHTML = store.getState().choice.wrong
  missedEl.innerHTML = store.getState().choice.missed
  if (store.getState().status === true) {
    statusEL.innerHTML = 'Playing!'
    statusButtonEL.innerHTML = 'pause'
  }
  else {
    statusEL.innerHTML = 'Paused'
    statusButtonEL.innerHTML = 'start'
  }
}

render()
store.subscribe(render)