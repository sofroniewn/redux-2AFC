var hxdx = require('hxdx')
var bxdx = require('./bxdx/bxdx.js')
//var bx = require('./bxdx/bxdx-five.js')
var bx = require('./bxdx/bxdx-labjack.js')
var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var thunk = require('redux-thunk')
var logger = require('./middleware/console-logger.js')
var reducer = require('./reducers')
var components = require('./components')
var devices = require('./devices')

var store = createStore(reducer, applyMiddleware(thunk, logger))

hxdx.render(components, store)
//bxdx.render(devices, store, bx)


// for mock
var bx = require('./bxdx/bxdx-mock.js')
bxdx.render(devices, store, bx)
function mock (state) {
  return bx(devices(store.getState()))
}
hxdx.render(mock, store)
