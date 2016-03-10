var vdom = require('virtual-dom')
var hyperx = require('hyperx')
var hx = hyperx(vdom.h)
var main = require('main-loop')

var _ = require('lodash')

function convertItem (item, key) {
  switch (item.mode) {
    case 0:
      return hx`
        <div>
        <p>
          <button onclick=${item.onclick} >${key}</button>
        </p>
      </div>`
    case 1:
      return hx`
        <div>
        <p>
          <span>${key} : ${item.value}</span>
        </p>
      </div>`
    default:
      return
  }
}

function convert (output) {
  var array = _.map(output, convertItem)
  return hx`
  <div>
    MOCK BOARD
    ${array}
  </div>`
}

var root = null
var board = null
var pinmap = null


var loop
function init (output) {
  loop = main(output, render, vdom)
  
  if (root) root.appendChild(loop.target)
  else document.body.appendChild(loop.target)
}

function render (state) {
  return convert(state)
}

function update (state) {
  return loop.update(state)
}

module.exports = function (pinmap) {
  return {
    board: board,
    init: init,
    update: update
  }
}
