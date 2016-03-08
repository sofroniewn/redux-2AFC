var hxdx = require('hxdx')
var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var thunk = require('redux-thunk')
var logger = require('./middleware/console-logger.js')
var reducer = require('./reducers')
var components = require('./components')


var devices = require('./devices')


var store = createStore(reducer, applyMiddleware(thunk, logger))
hxdx.render(components, store)

function render() {
  devices.render(store.getState())
}
store.subscribe(render)


now = require('performance-now')
console.log(now())
