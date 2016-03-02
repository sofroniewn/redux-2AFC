/*
 * action types
 */

const ZERO = 'ZERO'
const ONE = 'ONE'
const TIMEOUT = 'TIMEOUT'
const RESET = 'RESET'

const PAUSE = 'PAUSE'

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

/*
 * exports
 */

module.exports = {
  ZERO: ZERO,
  ONE: ONE,
  TIMEOUT: TIMEOUT,
  RESET: RESET,
  PAUSE: PAUSE,
  zero: zero,
  one: one,
  timeout: timeout,
  reset: reset,
  pause: pause
}