var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var reducer = require('./reducers/index')
var zero = require('./actions/actions.js').zero
var one = require('./actions/actions.js').one
var timeout = require('./actions/actions.js').timeout
var reset = require('./actions/actions.js').reset
var pause = require('./actions/actions.js').pause
var startTimer = require('./actions/actions.js').startTimer
var stopTimer = require('./actions/actions.js').stopTimer

// Creat store with logging middleware
const logger = store => next => action => {
  console.log('dispatching', action, 'time:', Date.now())
  var result = next(action)
  console.log('next state', store.getState())
  return result
}
var store = createStore(reducer, applyMiddleware(logger))

// Connect inputs to dispatches
document.getElementById('zero')
  .addEventListener('click', function () {
    store.dispatch(zero())
    startTimer()(store.dispatch, store.getState)
  })

document.getElementById('one')
  .addEventListener('click', function () {
    store.dispatch(one())
    startTimer()(store.dispatch, store.getState)
  })

document.getElementById('reset')
  .addEventListener('click', function () {
    store.dispatch(reset())
  })

document.getElementById('pause')
  .addEventListener('click', function () {
    store.dispatch(pause())
    stopTimer()(store.dispatch, store.getState)
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
  valueEl.innerHTML = store.getState().choice.value
  correctEl.innerHTML = store.getState().choice.correct
  wrongEl.innerHTML = store.getState().choice.wrong
  missedEl.innerHTML = store.getState().choice.missed
  if (store.getState().status === true) {
    statusEL.innerHTML = 'Playing!'
    statusButtonEL.innerHTML = 'pause'
    zeroButtonEL.disabled = false
    oneButtonEL.disabled = false
  }
  else {
    statusEL.innerHTML = 'Paused'
    statusButtonEL.innerHTML = 'start'
    zeroButtonEL.disabled = true
    oneButtonEL.disabled = true
  }
}

render()
store.subscribe(render)