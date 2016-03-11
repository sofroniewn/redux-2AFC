/*
 * action types
 */

const RESET = 'RESET'
const PAUSE = 'PAUSE'
const TIMEOUT = 'TIMEOUT'

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
  RESET: RESET,
  PAUSE: PAUSE,
  TIMEOUT: TIMEOUT,
  pause: pause,
  reset: reset
}