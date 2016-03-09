var hxdx = require('hxdx')
var bxdx = require('./bxdx/bxdx.js')
var bx = require('./bxdx/bxdx-five.js')
var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var thunk = require('redux-thunk')
var logger = require('./middleware/console-logger.js')
var reducer = require('./reducers')
var components = require('./components')
var devices = require('./devices')

var store = createStore(reducer, applyMiddleware(thunk, logger))

hxdx.render(components, store)

var pinmap = [2, 3, 4, 5]
bxdx.render(devices, store, bx, pinmap)




///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// // Configure labjack seperate read / writes
// var ljn = require('labjack-nodejs');
// var createDeviceObject = ljn.getDevice();
// var board = new createDeviceObject();
// function err (res) {console.log('Board error: ', res)}

// // Add hardware
// var _ = require('lodash')
// var devices = require('./devices')
// var pinAddress = ['FIO0', 'FIO2', 'FIO1', 'FIO3']
// // var pinMode = [0, 0, 1, 1]

// var oldValues = [0, 0, 0, 0]

// var NanoTimer = require('nanotimer')
// board.open(err, function () {
//   console.log('Board ready')

//   var outputList = devices(store.getState())

//   _(outputList).forEach(function(output, key) {
//     if(output['mode'] === 0) {
//       var timer = new NanoTimer()
//       timer.setInterval(function () {
//         board.read(pinAddress[key], err, function(value) {
//           if (value === 1 & value !== oldValues[key]) {
//             output['onclick']()
//           }
//           oldValues[key] = value
//         })
//       }, '', '5m')
//     }
//   })

//   function bx() {
//     var outputList = devices(store.getState())
//     _(outputList).forEach(function(output, key) {
//       if(output['mode'] === 1) {
//         board.writeSync(pinAddress[key], output['value'])
//       }
//     })
//   }
//   store.subscribe(bx)
// })

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// function bx() {
//     var outputList = devices(store.getState())
//     _(outputList).forEach(function(output, key) {
//       if(output['mode'] === 0) {
//         board.readSync(pinAddress[key], err, function(value) {
//           if (value === 1) {
//             output['callback']()
//           }
//         })
//       }
//       else if (output['mode'] === 1) {
//         board.writeSync(pinAddress[key], output['value'])
//       }
//     })
//   }