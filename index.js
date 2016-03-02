var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var reducer = require('./reducers/index')
var zero = require('./actions/actions.js').zero
var one = require('./actions/actions.js').one
var timeout = require('./actions/actions.js').timeout
var reset = require('./actions/actions.js').reset
var pause = require('./actions/actions.js').pause

// Creat store with logging middleware
const logger = store => next => action => {
  console.log('dispatching', action, 'time:', Date.now())
  var result = next(action)
  console.log('next state', store.getState())
  return result
}
//var store = createStore(reducer, applyMiddleware(logger))

// var timeoutId = setTimeout(function () {
//   store.dispatch({ type: 'TIMEOUT', value: Math.round((Math.random()))})
// }, 1000)

timeoutId = null
const timeoutScheduler = store => next => action => {
  clearTimeout(timeoutId)
  if (action.type === 'PAUSE' & store.getState().status) {}
    else if (action.type === 'RESET' & !store.getState().status) {}
    else {
    timeoutId = setTimeout(function () {
      store.dispatch(timeout())
    }, 1000)
  }
  next(action)
}

var store = createStore(reducer, applyMiddleware(logger, timeoutScheduler))

// Connect inputs to dispatches
document.getElementById('zero')
  .addEventListener('click', function () {
    store.dispatch(zero())
  })

document.getElementById('one')
  .addEventListener('click', function () {
    store.dispatch(one())
  })

document.getElementById('reset')
  .addEventListener('click', function () {
    store.dispatch(reset())
  })

document.getElementById('pause')
  .addEventListener('click', function () {
    store.dispatch(pause())
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