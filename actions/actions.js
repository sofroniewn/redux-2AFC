/*
 * action types
 */

const ZERO = 'ZERO'
const ONE = 'ONE'
const TIMEOUT = 'TIMEOUT'
const RESET = 'RESET'

const PAUSE = 'PAUSE'

const TIMER_STARTED = 'TIMER_STARTED'
const TIMER_STOPPED = 'TIMER_STOPPED'

/*
 * action creators
 */

function zero() {
  return {type: ZERO, value: Math.round(Math.random())}
}

function one() {
  return {type: ONE, value: Math.round(Math.random())}
}

function timeout() {
  return {type: TIMEOUT, value: Math.round(Math.random())}
}

function reset() {
  return {type: RESET, value: Math.round(Math.random())}
}

function pause() {
  return {type: PAUSE}
}

function startTimer() {
  return (dispatch, getState) => {
    clearInterval(getState().timer)    
    var timerId = setInterval(() => {
        dispatch(timeout())
      }, 1000)
    dispatch({type: TIMER_STARTED, payload: timerId}) // a store supposed to save `timerId`
  }
}

function toggleTimer() {
  return (dispatch, getState) => {
    var timerId = getState().timer
    if (timerId === null) {
      var timerId = setInterval(() => {
        dispatch(timeout())
      }, 1000)
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
  ZERO: ZERO,
  ONE: ONE,
  TIMEOUT: TIMEOUT,
  RESET: RESET,
  PAUSE: PAUSE,
  TIMER_STARTED: TIMER_STARTED,
  TIMER_STOPPED: TIMER_STOPPED,
  zero: zero,
  one: one,
  timeout: timeout,
  reset: reset,
  pause: pause,
  startTimer: startTimer,
  toggleTimer: toggleTimer
}