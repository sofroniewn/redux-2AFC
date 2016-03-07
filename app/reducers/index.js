var combineReducers = require('redux').combineReducers
var actions = require('../actions/actions.js')

function choice (state, action) {
  if (typeof state === 'undefined') {
    return {value: 0, correct: 0, wrong: 0, missed: 0}
  }
  switch (action.type) {
    case actions.ZERO:
      switch (state.value) {
        case 0:
          return {value: action.value, correct: state.correct + 1, wrong: state.wrong, missed: state.missed}
        case 1:
          return {value: action.value, correct: state.correct, wrong: state.wrong + 1, missed: state.missed}
        default:
           return state
      }
    case actions.ONE:
       switch (state.value) {
         case 0:
          return {value: action.value, correct: state.correct, wrong: state.wrong + 1, missed: state.missed}
         case 1:
          return {value: action.value, correct: state.correct + 1, wrong: state.wrong, missed: state.missed}
        default:
          return state
      }
    case actions.TIMEOUT:
      return {value: action.value, correct: state.correct, wrong: state.wrong, missed: state.missed + 1}        
    case actions.RESET:
      return {value: action.value, correct: 0, wrong: 0, missed: 0}
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
    case actions.TIMER_STARTED:
    case actions.TIMER_STOPPED:
      return action.payload
    default:
      return state
  }
}

module.exports = combineReducers({choice,
  status, timer})