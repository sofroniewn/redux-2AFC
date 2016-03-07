var actions = require('../actions/controls.js')

document.getElementById('reset')
  .addEventListener('click', function () {
    store.dispatch(actions.reset())
})

document.getElementById('pause')
  .addEventListener('click', function () {
    store.dispatch(actions.pause())
})

// Connect state to outputs
var correctEl = document.getElementById('correct')
var wrongEl = document.getElementById('wrong')
var missedEl = document.getElementById('missed')
var statusEL = document.getElementById('status')
var statusButtonEL = document.getElementById('pause')


function render (state) {
  correctEl.innerHTML = state.choice.correct
  wrongEl.innerHTML = state.choice.wrong
  missedEl.innerHTML = state.choice.missed
  if (state.status === true) {
    statusEL.innerHTML = 'Playing!'
    statusButtonEL.innerHTML = 'pause'
  }
  else {
    statusEL.innerHTML = 'Paused'
    statusButtonEL.innerHTML = 'start'
  }
}

module.exports = {render}