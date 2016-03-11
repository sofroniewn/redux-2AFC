var vdom = require('virtual-dom')
var hyperx = require('hyperx')
var hx = hyperx(vdom.h)
var main = require('main-loop')
var _ = require('lodash')

function mock (item, key) {
  switch (item.type) {
    case 'DO':
      return hx`
        <div>
        <p>
          <span>${key} : ${item.value}</span>
        </p>
      </div>`
    case 'DI':
      return hx`
        <div>
        <p>
          <button onclick=${item.onclick} >${key}</button>
        </p>
      </div>`
    default:
      return
  }
}

function convert (output) {
  var array = _.map(output, mock)
  return hx`
  <div>
    MOCK DEVICE:
    ${array}
  </div>`
}

module.exports = function (devices, store, root) {
  var loop = main(store.getState(), render, vdom)

  if (root) root.appendChild(loop.target)
  else document.body.appendChild(loop.target)

  function render (state) {
    return convert(devices(state, store.dispatch))
  }

  function update () {
    loop.update(store.getState())
  }

  store.subscribe(update)
}