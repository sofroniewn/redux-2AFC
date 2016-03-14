var hx = require('hxdx').hx
var dx = require('hxdx').dx
var actions = require('../actions')

module.exports = function (remaining) {
  return hx`
    <div>
      <p>
        <span>Time remaining: ${remaining} s</span>
      </p>
    </div>`
}