var hxdx = require('hxdx')
var bxdx = require('./bxdx')
var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var thunk = require('redux-thunk')
var logger = require('./middleware/console-logger.js')
var reducer = require('./reducers')
var components = require('./components')
var devices = require('./devices')

var store = createStore(reducer, applyMiddleware(thunk, logger))
hxdx.render(components, store)


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// var configuration = {'LABJACK': {
//   'CHOICE_ZERO': 'FIO0',
//   'TARGET_ZERO': 'FIO1',
//   'CHOICE_ONE': 'FIO2',
//   'TARGET_ONE': 'FIO3'
//   }
// }
// var board = require('./bxdx/bx-labjack.js')
// board.emitter.on('ready', function () {
//   console.log('LABJACK ready')
//   bxdx(devices, store, board, configuration.LABJACK)
// })


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// var configuration = {'FIRMATA': {
//   'CHOICE_ZERO': 2,
//   'TARGET_ZERO': 4,
//   'CHOICE_ONE': 3,
//   'TARGET_ONE': 5
//   }
// }
// path = '/dev/cu.usbmodem1411'
// var board = require('./bxdx/bx-firmata.js')(path)
// board.emitter.on('ready', function () {
//   console.log('FIRMATA ready')
//   bxdx(devices, store, board, configuration.FIRMATA)
// })


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
var configuration = {'FIVE': {
  'CHOICE_ZERO': 2,
  'TARGET_ZERO': 4,
  'CHOICE_ONE': 3,
  'TARGET_ONE': 5
  }
}
var board = require('./bxdx/bx-five.js')
board.emitter.on('ready', function () {
  console.log('FIVE ready')
  bxdx(devices, store, board, configuration.FIVE)
})


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// var configuration = {'LABJACK': {
//     'CHOICE_ZERO': 'FIO0',
//     'TARGET_ZERO': 'FIO1',
//     'CHOICE_ONE': 'FIO2',
//     'TARGET_ONE': 'FIO3'
//     },
//   'FIRMATA': {
//     'CHOICE_ZERO': 2,
//     'TARGET_ZERO': 4,
//     'CHOICE_ONE': 3,
//     'TARGET_ONE': 5
//   }
// }
// var boardL = require('./bxdx/bx-labjack.js')
// boardL.emitter.on('ready', function () {
//   console.log('LABJACK ready')
//   bxdx(devices, store, boardL, configuration.LABJACK)
// })
// path = '/dev/cu.usbmodem1411'
// var board = require('./bxdx/bx-firmata.js')(path)
// board.emitter.on('ready', function () {
//   console.log('FIRMATA ready')
//   bxdx(devices, store, board, configuration.FIRMATA)
// })


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
var mock = require('./bxdx/bxdx-mock.js')
mock(devices, store)


