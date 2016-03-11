/*
 * action types
 */

const CHOICE = 'CHOICE'
const TIMEOUT = 'TIMEOUT'

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
    clearInterval(getState().timer)    
    var timerId = setInterval(() => {
        dispatch(timeout())
      }, 5000)
    dispatch({type: CHOICE, value: value, next: next(), timer: timerId})
  }
}

/*
 * exports
 */

module.exports = {
  CHOICE: CHOICE,
  TIMEOUT: TIMEOUT,
  response: response
}