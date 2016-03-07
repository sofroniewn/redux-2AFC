var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var thunk = require('redux-thunk')
var logger = require('./middleware/console-logger.js')
var reducer = require('./reducers/index')

var store = createStore(reducer, applyMiddleware(thunk, logger))

var controls = require('./components/controls.js')
var choice = require('./components/choice.js')
function render() {
  controls.render(store.getState())
  choice.render(store.getState())
}

store.subscribe(render)