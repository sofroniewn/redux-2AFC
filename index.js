var createStore = require('redux').createStore
var reducer = require('./reducers/index')

var store = createStore(reducer)

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