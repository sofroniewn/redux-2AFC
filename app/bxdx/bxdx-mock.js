var _ = require('lodash')
var hx = require('hxdx').hx
// var dx = require('./bxdx.js').dx

// board.on('ready', function () {
//   console.log('Board ready')
// })

function render (output) {
  switch (output['mode']) {
    case 0:
      return hx`
        <div>
        <p>
          <button onclick=${output.onclick} >${output.id}</button>
        </p>
      </div>`
    case 1:
      return hx`
        <div>
        <p>
          <span>${output.id} : ${output.value}</span>
        </p>
      </div>`
    default:
      return
  }
}

module.exports = function (outputList) {
  var array = _.map(outputList, render)
  return hx`
  <div>
    MOCK BOARD
    ${array}
  </div>`
}
