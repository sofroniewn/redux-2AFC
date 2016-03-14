now = require('performance-now')
/*
 * action types
 */

const CHOICE = 'CHOICE'
const TIMEOUT = 'TIMEOUT'
const NEXT = 'NEXT'
const RESET = 'RESET'
const START = 'START'
const TICK = 'TICK'

/*
 * action creators
 */

function timeout() {
  return {type: TIMEOUT, target: Math.round(Math.random())}
}

function tick() {
  return {type: TICK}
}

function reset() {
  return {type: RESET}
}

function start() {
  return {type: START}
}

function response(value) {
  return (dispatch, getState) => {
    state = getState()
    if (state.playing) {
      dispatch({type: CHOICE, value: value, target: Math.round(Math.random())})
    }
  }
}

/*
 * exports
 */

module.exports = {constants: {
    CHOICE: CHOICE,
    TIMEOUT: TIMEOUT,
    RESET: RESET,
    START: START,
    NEXT: NEXT,
    TICK: TICK},
  response: response,
  start: start,
  reset: reset,
  tick: tick,
  timeout:timeout
}