//var combineReducers = require('redux').combineReducers
var actions = require('../actions')
var assign = require('object-assign')
var o = actions.constants

function task (state, action) {
  if (typeof state === 'undefined') {
    return {playing: false, target: 0, remaining: 10, duration: 10, correct: 0, wrong: 0, missed: 0, response: false}
  }
  switch (action.type) {
    case o.CHOICE:
      if (state.target === action.value) {
        return assign({}, state, {target: action.target, correct: state.correct + 1, response: true})
      } else {
        return assign({}, state, {target: action.target, wrong: state.wrong + 1, response: true})
      }
    case o.TIMEOUT:
      return assign({}, state, {target: action.target, missed: state.missed + 1, response: false})
    case o.RESET:
      return assign({}, state, {playing: false, remaining: state.duration, correct: 0, wrong: 0, missed: 0, response: false})
    case o.START:
      if (state.playing) {
        return assign({}, state, {playing: false, response: false})
      } else {
        if (state.remaining === 0) {
          return assign({}, state, {playing: true, remaining: state.duration, correct: 0, wrong: 0, missed: 0, response: false})
        } else {
          return assign({}, state, {playing: true, response: false})
        }
      }
    case o.TICK:
      return assign({}, state, {remaining: state.remaining-1, response: false})
    default:
      return assign({}, state, {response: false})
  }
}

module.exports = task //combineReducers({task, status})