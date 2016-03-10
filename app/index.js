var hxdx = require('hxdx')
var bxdx = require('./bxdx/bxdx.js')
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
// var createBoard = require('./bxdx/bxdx-labjack.js')
// var board = createBoard(configuration.LABJACK) 
// device.emitter.on('ready', function () {
//   console.log('LABJACK ready')
//   bxdx.render(devices, store, board)
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
// var createBoard = require('./bxdx/bxdx-firmata.js')
// var board = createBoard(configuration.FIRMATA) 
// board.emitter.on('ready', function () {
//   console.log('FIRMATA ready')
//   bxdx.render(devices, store, board)
// })


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// var configuration = {'FIVE': {
//   'CHOICE_ZERO': 2,
//   'TARGET_ZERO': 4,
//   'CHOICE_ONE': 3,
//   'TARGET_ONE': 5
//   }
// }
// var createBoard = require('./bxdx/bxdx-five.js')
// var board = createBoard(configuration.FIVE) 
// board.emitter.on('ready', function () {
//   console.log('FIVE ready')
//   bxdx.render(devices, store, board)
// })

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// var configuration = {'LABJACK': {
//     'CHOICE_ZERO': 'FIO0',
//     'CHOICE_ONE': 'FIO2',
//   },
//   'FIRMATA': {
//     'TARGET_ZERO': 4,
//     'TARGET_ONE': 5
//   }
// }
////////////////////////////////////
////////////////////////////////////
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
// var createBoardL = require('./bxdx/bxdx-labjack.js')
// var boardL = createBoardL(configuration.LABJACK) 
// boardL.emitter.on('ready', function () {
//   console.log('LABJACK ready')
//   bxdx.render(devices, store, boardL)
// })
// var createBoard = require('./bxdx/bxdx-firmata.js')
// var board = createBoard(configuration.FIRMATA) 
// board.emitter.on('ready', function () {
//   console.log('FIRMATA ready')
//   bxdx.render(devices, store, board)
// })



///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
var boardM = require('./bxdx/bxdx-mock.js')()
bxdx.render(devices, store, boardM)


