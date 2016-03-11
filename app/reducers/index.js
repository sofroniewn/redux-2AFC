var combineReducers = require('redux').combineReducers
var actionsCh = require('../actions/choice.js')
var actionsCo = require('../actions/controls.js')

function choice (state, action) {
  if (typeof state === 'undefined') {
    return {value: 0, correct: 0, wrong: 0, missed: 0}
  }
  switch (action.type) {
    case actionsCh.CHOICE:
      switch (state.value === action.value) {
        case true:
          return {value: action.next, correct: state.correct + 1, wrong: state.wrong, missed: state.missed}
        case false:
          return {value: action.next, correct: state.correct, wrong: state.wrong + 1, missed: state.missed}
        default:
           return state
      }
    case actionsCh.TIMEOUT:
      return {value: action.next, correct: state.correct, wrong: state.wrong, missed: state.missed + 1}        
    case actionsCo.RESET:
      return {value: action.next, correct: 0, wrong: 0, missed: 0}
    default:
      return state
  }
}


function status (state, action) {
  if (typeof state === 'undefined') {
    return false
  }
  switch (action.type) {
    case actionsCo.PAUSE:
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
    case actionsCo.TIMER_STARTED:
    case actionsCo.TIMER_STOPPED:
      return action.payload
    default:
      return state
  }
}

module.exports = combineReducers({choice,
  status, timer})