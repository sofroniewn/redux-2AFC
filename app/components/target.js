var hx = require('hxdx').hx

module.exports = function (state) {
  return hx`
    <div>
      <p>
        <span>${state.choice.value}</span>
      </p>
    </div>`
}