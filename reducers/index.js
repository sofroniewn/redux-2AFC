var combineReducers = require('redux').combineReducers
var ZERO = require('../actions/actions.js').ZERO
var ONE = require('../actions/actions.js').ONE
var TIMEOUT = require('../actions/actions.js').TIMEOUT
var RESET = require('../actions/actions.js').RESET

function choice (state, action) {
  if (typeof state === 'undefined') {
    return {value: 0, correct: 0, wrong: 0, missed: 0}
  }
  switch (action.type) {
    case ZERO:
      switch (state.value) {
        case 0:
          return {value: action.value, correct: state.correct + 1, wrong: state.wrong, missed: state.missed}
        case 1:
          return {value: action.value, correct: state.correct, wrong: state.wrong + 1, missed: state.missed}
        default:
           return state
      }
    case ONE:
       switch (state.value) {
         case 0:
          return {value: action.value, correct: state.correct, wrong: state.wrong + 1, missed: state.missed}
         case 1:
          return {value: action.value, correct: state.correct + 1, wrong: state.wrong, missed: state.missed}
        default:
          return state
      }
    case TIMEOUT:
      return {value: action.value, correct: state.correct, wrong: state.wrong, missed: state.missed + 1}        
    case RESET:
      return {value: action.value, correct: 0, wrong: 0, missed: 0}
    default:
      return state
  }
}



var PAUSE = require('../actions/actions.js').PAUSE

function status (state, action) {
  if (typeof state === 'undefined') {
    return false
  }
  switch (action.type) {
    case PAUSE:
      return !state
    default:
      return state
  }
}

module.exports = combineReducers({choice,
  status})