var reducer = function counter(state, action) {
  if (typeof state === 'undefined') {
    return {value: 0, correct: 0, wrong: 0, missed: 0}
  }

  switch (action.type) {
    case 'ZERO':
      switch (state.value) {
        case 0:
          return {value: action.value, correct: state.correct + 1, wrong: state.wrong, missed: state.missed}
        case 1:
          return {value: action.value, correct: state.correct, wrong: state.wrong + 1, missed: state.missed}
        default:
           return state
      }
    case 'ONE':
       switch (state.value) {
         case 0:
          return {value: action.value, correct: state.correct, wrong: state.wrong + 1, missed: state.missed}
         case 1:
          return {value: action.value, correct: state.correct + 1, wrong: state.wrong, missed: state.missed}
        default:
          return state
      }
    case 'TIMEOUT':
      return {value: action.value, correct: state.correct, wrong: state.wrong, missed: state.missed + 1}        
    default:
      return state
  }
}

module.exports = reducer
