var hxdx = require('hxdx')
var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var thunk = require('redux-thunk')
var logger = require('./middleware/console-logger.js')
var reducer = require('./reducers')
var components = require('./components')

var store = createStore(reducer, applyMiddleware(thunk, logger))
hxdx.render(components, store)

// add hardware devices
var board = require('./board')
board.on('ready', function () {
  console.log('Board ready')
  var devices = require('./devices')
  function render() {
    devices.render(store.getState())
  }
  store.subscribe(render)
})