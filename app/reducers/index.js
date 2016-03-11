var combineReducers = require('redux').combineReducers
var actions = require('../actions')

function choice (state, action) {
  if (typeof state === 'undefined') {
    return {target: 0, correct: 0, wrong: 0, missed: 0}
  }
  switch (action.type) {
    case actions.CHOICE:
      switch (state.target === action.value) {
        case true:
          return {target: action.next, correct: state.correct + 1, wrong: state.wrong, missed: state.missed}
        case false:
          return {target: action.next, correct: state.correct, wrong: state.wrong + 1, missed: state.missed}
        default:
           return state
      }
    case actions.TIMEOUT:
      return {target: action.next, correct: state.correct, wrong: state.wrong, missed: state.missed + 1}        
    case actions.RESET:
      return {target: state.target, correct: 0, wrong: 0, missed: 0}
    default:
      return state
  }
}

function status (state, action) {
  if (typeof state === 'undefined') {
    return false
  }
  switch (action.type) {
    case actions.PAUSE:
      return !state
    default:
      return state
  }
}

function timer (state, action) {
  if (typeof state === 'undefined') {
    return null
  }
  switch (action.type) {
    case actions.PAUSE:
    case actions.CHOICE:
      return action.timer
    default:
      return state
  }
}

function globalTimer (state, action) {
  if (typeof state === 'undefined') {
    return null
  }
  switch (action.type) {
    case actions.PAUSE:
      return action.globalTimer
    default:
      return state
  }
}

module.exports = combineReducers({choice,
  status, timer, globalTimer})