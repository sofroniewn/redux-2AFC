var hx = require('hxdx').hx

module.exports = function (state) {
  return hx`
    <div>
      <p>
        <span>${state.target}</span>
      </p>
    </div>`
}