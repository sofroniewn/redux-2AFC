var hx = require('hxdx').hx

module.exports = function (state) {
  var score = state.correct - state.wrong
  return hx`
    <div>
      <p>
        Correct: <span id="correct">${state.correct}</span>
      </p>
      <p>
        Wrong: <span id="wrong">${state.wrong}</span>
      </p>
      <p>
        Missed: <span id="missed">${state.missed}</span>
      </p>
      <p>
        Score: <span id="score">${score}</span>
      </p>

  </div>`
}
