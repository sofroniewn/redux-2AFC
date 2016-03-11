/*
 * action types
 */

const CHOICE = 'CHOICE'
const TIMEOUT = 'TIMEOUT'
const TIMER_STARTED = 'TIMER_STARTED'
const TIMER_STOPPED = 'TIMER_STOPPED'

/*
 * action creators
 */

function timeout() {
  return {type: TIMEOUT, next: Math.round(Math.random())}
}

function response(value) {
  return (dispatch, getState) => {
    if (getState().status === true) {
      dispatch({type: CHOICE, value: value, next: Math.round(Math.random())})
      clearInterval(getState().timer)    
      var timerId = setInterval(() => {
          dispatch(timeout())
        }, 5000)
      dispatch({type: TIMER_STARTED, payload: timerId}) // a store supposed to save `timerId`
    }
  }
}

// function one() {
//   return (dispatch, getState) => {
//     if (getState().status === true) {
//       dispatch({type: ONE, value: Math.round(Math.random())})
//       clearInterval(getState().timer)    
//       var timerId = setInterval(() => {
//           dispatch(timeout())
//         }, 5000)
//       dispatch({type: TIMER_STARTED, payload: timerId}) // a store supposed to save `timerId`
//     }
//   }
// }

/*
 * exports
 */

module.exports = {
  CHOICE: CHOICE,
  TIMEOUT: TIMEOUT,
  TIMER_STARTED: TIMER_STARTED,
  TIMER_STOPPED: TIMER_STOPPED,
  response: response,
  }