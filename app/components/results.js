var hx = require('hxdx').hx

module.exports = function (state) {
  return hx`
    <div>
      <p>
        Correct: <span id="correct">${state.choice.correct}</span>
      </p>
      <p>
        Wrong: <span id="wrong">${state.choice.wrong}</span>
      </p>
      <p>
        Missed: <span id="missed">${state.choice.missed}</span>
      </p>
  </div>`
}
