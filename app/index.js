var hxdx = require('hxdx')
var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var thunk = require('redux-thunk')
var logger = require('./middleware/console-logger.js')
var reducer = require('./reducers')

var store = createStore(reducer, applyMiddleware(thunk, logger))
var components = require('./components')
hxdx.render(components, store)