/*
 * action types
 */

const CHOICE = 'CHOICE'
const TIMEOUT = 'TIMEOUT'
const RESET = 'RESET'
const PAUSE = 'PAUSE'

/*
 * action creators
 */

function next () {
  return Math.round(Math.random())
}

function timeout() {
  return {type: TIMEOUT, next: next()}
}

function response(value) {
  return (dispatch, getState) => {
    if (getState().status) {
      clearInterval(getState().timer)    
      var timerId = setInterval(() => {
          dispatch(timeout())
        }, 5000)
      dispatch({type: CHOICE, value: value, next: next(), timer: timerId})
    }
  }
}

function reset() {
  return {type: RESET}
}

function pause() {
  return (dispatch, getState) => {
    var timerId = getState().timer
    if (timerId === null) {
      var timerId = setInterval(() => {
        dispatch(timeout())
      }, 5000)
    } else {
      clearInterval(getState().timer)    
      timerId = null
    }
    dispatch({type: PAUSE, timer: timerId})
  }
}

/*
 * exports
 */

module.exports = {
  CHOICE: CHOICE,
  TIMEOUT: TIMEOUT,
  RESET: RESET,
  PAUSE: PAUSE,
  response: response,
  pause: pause,
  reset: reset
}