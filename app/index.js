var hxdx = require('hxdx')
var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var thunk = require('redux-thunk')
var logger = require('./middleware/console-logger.js')
var reducer = require('./reducers')
var components = require('./components')

var store = createStore(reducer, applyMiddleware(thunk, logger))
hxdx.render(components, store)

// Configure johnny-five
var Readable = require('stream').Readable  
var util = require('util')  
var five = require('johnny-five')
util.inherits(MyStream, Readable)  
function MyStream(opt) {  
  Readable.call(this, opt)
}
MyStream.prototype._read = function() {};  
// hook in our stream
process.__defineGetter__('stdin', function() {  
  if (process.__stdin) return process.__stdin
  process.__stdin = new MyStream()
  return process.__stdin
})
var board = new five.Board()


// Add hardware
var _ = require('lodash')
var devices = require('./devices')
var pinAddress = [2, 3, 4, 5]
// var pinMode = [0, 0, 1, 1]

board.on('ready', function () {
  console.log('Board ready')

  var outputList = devices(store.getState())

  var pins = _.map(pinAddress, function (address, key){
    return new five.Pin({pin: address, mode: outputList[key]['mode']})
  })

  _(outputList).forEach(function(output, key) {
    if(output['mode'] === 0) {
      pins[key].on('high', function() {
        output['callback']()
      })
    }
  })

  function bx() {
    var outputList = devices(store.getState())
    _(outputList).forEach(function(output, key) {
      if(output['mode'] === 1) {
        pins[key].write(output['value'])
      }
    })
  }
  store.subscribe(bx)
})