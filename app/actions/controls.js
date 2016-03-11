/*
 * action types
 */

const RESET = 'RESET'
const PAUSE = 'PAUSE'
const TIMEOUT = 'TIMEOUT'
const TIMER_STARTED = 'TIMER_STARTED'
const TIMER_STOPPED = 'TIMER_STOPPED'


/*
 * action creators
 */

function timeout() {
  return {type: TIMEOUT, next: Math.round(Math.random())}
}

function reset() {
  return {type: RESET, next: Math.round(Math.random())}
}

function pause() {
  return (dispatch, getState) => {
    dispatch({type: PAUSE})
    var timerId = getState().timer
    if (timerId === null) {
      var timerId = setInterval(() => {
        dispatch(timeout())
      }, 5000)
      dispatch({type: TIMER_STARTED, payload: timerId}) // a store supposed to save `timerId`
    } else {
      clearInterval(getState().timer)    
      dispatch({type: TIMER_STOPPED, payload: null}) // now store supposed to set `timerId` to `null` 
    }
  }
}

/*
 * exports
 */

module.exports = {
  RESET: RESET,
  PAUSE: PAUSE,
  TIMEOUT: TIMEOUT,
  TIMER_STARTED: TIMER_STARTED,
  TIMER_STOPPED: TIMER_STOPPED,
  pause: pause,
  reset: reset
}