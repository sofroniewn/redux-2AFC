var actions = require('../actions/index.js')

var valueEl = document.getElementById('value')
var zeroButtonEL = document.getElementById('zero')
var oneButtonEL = document.getElementById('one')

zeroButtonEL.addEventListener('click', function () {
  store.dispatch(actions.zero())
})

oneButtonEL.addEventListener('click', function () {
  store.dispatch(actions.one())
})

function render(state) {
  valueEl.innerHTML = state.choice.value
  if (state.status === true) {
    zeroButtonEL.disabled = false
    oneButtonEL.disabled = false
  }
  else {
    zeroButtonEL.disabled = true
    oneButtonEL.disabled = true
  }
}

module.exports = {render}
