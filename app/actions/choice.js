/*
 * action types
 */

const CHOICE = 'CHOICE'
const TIMEOUT = 'TIMEOUT'

/*
 * action creators
 */

function timeout() {
  return {type: TIMEOUT, next: Math.round(Math.random())}
}

function response(value) {
  return (dispatch, getState) => {
    if (getState().status === true) {
      clearInterval(getState().timer)    
      var timerId = setInterval(() => {
          dispatch(timeout())
        }, 5000)
      dispatch({type: CHOICE, value: value, next: Math.round(Math.random()), timer: timerId})
    }
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