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

//var pinmap = [2, 3, 4, 5]
var pinmap = ['FIO0', 'FIO2', 'FIO1', 'FIO3']
bxdx.render(devices, store, bx, pinmap)