var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var reducer = require('./reducers/index')

const logger = store => next => action => {
  console.log('dispatching', action, 'time:', Date.now())
  var result = next(action)
  console.log('next state', store.getState())
  return result
}

var timeoutId = setTimeout(function () {
  store.dispatch({ type: 'TIMEOUT', value: Math.round((Math.random()))})
}, 1000)

const timeoutScheduler = store => next => action => {
  clearTimeout(timeoutId)
  timeoutId = setTimeout(function () {
    store.dispatch({ type: 'TIMEOUT', value: Math.round((Math.random()))})
  }, 1000)
  
  next(action)
}

var store = createStore(reducer, applyMiddleware(logger, timeoutScheduler))

document.getElementById('zero')
  .addEventListener('click', function () {
    store.dispatch({ type: 'ZERO', value: Math.round((Math.random()))})
  })

document.getElementById('one')
  .addEventListener('click', function () {
    store.dispatch({ type: 'ONE', value: Math.round((Math.random()))})
  })

var valueEl = document.getElementById('value')
var correctEl = document.getElementById('correct')
var wrongEl = document.getElementById('wrong')
var missedEl = document.getElementById('missed')

function render() {
  valueEl.innerHTML = store.getState().value
  correctEl.innerHTML = store.getState().correct
  wrongEl.innerHTML = store.getState().wrong
  missedEl.innerHTML = store.getState().missed
}

render()
store.subscribe(render)