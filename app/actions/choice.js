/*
 * action types
 */

const ZERO = 'ZERO'
const ONE = 'ONE'
const TIMEOUT = 'TIMEOUT'
const TIMER_STARTED = 'TIMER_STARTED'
const TIMER_STOPPED = 'TIMER_STOPPED'

/*
 * action creators
 */

function timeout() {
  return {type: TIMEOUT, value: Math.round(Math.random())}
}

function zero() {
  return (dispatch, getState) => {
    if (getState().status === true) {
      dispatch({type: ZERO, value: Math.round(Math.random())})
      clearInterval(getState().timer)    
      var timerId = setInterval(() => {
          dispatch(timeout())
        }, 5000)
      dispatch({type: TIMER_STARTED, payload: timerId}) // a store supposed to save `timerId`
    }
  }
}

function one() {
  return (dispatch, getState) => {
    if (getState().status === true) {
      dispatch({type: ONE, value: Math.round(Math.random())})
      clearInterval(getState().timer)    
      var timerId = setInterval(() => {
          dispatch(timeout())
        }, 5000)
      dispatch({type: TIMER_STARTED, payload: timerId}) // a store supposed to save `timerId`
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
  TIMER_STARTED: TIMER_STARTED,
  TIMER_STOPPED: TIMER_STOPPED,
  zero: zero,
  one: one,
  }