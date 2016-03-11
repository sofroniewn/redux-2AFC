NanoTimer = require('nanotimer')

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
    getState().timer.clearInterval()    
    var timerId = new NanoTimer()
    timerId.setInterval(() => {
        dispatch(timeout())
      }, '', '5s')
    dispatch({type: CHOICE, value: value, next: next(), timer: timerId})
  }
}

function reset() {
  return {type: RESET}
}

function pause() {
  return (dispatch, getState) => {
    var timerId = getState().timer
    if (timerId === null) {
      var timerId = new NanoTimer()
      timerId.setInterval(() => {
        dispatch(timeout())
      }, '', '5s')
    } else {
      timerId.clearInterval()    
      timerId = null
    }
    var globalTimerId = getState().globalTimer
    if (globalTimerId === null) {
      var globalTimerId = new NanoTimer()
      globalTimerId.setTimeout(() => {
        dispatch(pause())
      }, '', '8s')
    } else {
      globalTimerId.clearInterval()
      globalTimerId = null
    }
    dispatch({type: PAUSE, timer: timerId, globalTimer: globalTimerId})
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