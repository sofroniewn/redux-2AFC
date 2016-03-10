var hxdx = require('hxdx')
var bxdx = require('./bxdx/bxdx.js')
var createStore = require('redux').createStore
var applyMiddleware = require('redux').applyMiddleware
var thunk = require('redux-thunk')
var logger = require('./middleware/console-logger.js')
var reducer = require('./reducers')
var components = require('./components')
var outputs = require('./outputs')

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
// var createDevice = require('./bxdx/bxdx-labjack.js')
// var device = createDevice(configuration.LABJACK) 
// device.emitter.on('ready', function () {
//   console.log('LABJACK ready')
//   bxdx.render(outputs, store, device)
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
// var createDevice = require('./bxdx/bxdx-firmata.js')
// var device = createDevice(configuration.FIRMATA) 
// device.emitter.on('ready', function () {
//   console.log('FIRMATA ready')
//   bxdx.render(outputs, store, device)
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
// var createDevice = require('./bxdx/bxdx-five.js')
// var device = createDevice(configuration.FIVE) 
// device.emitter.on('ready', function () {
//   console.log('FIVE ready')
//   bxdx.render(outputs, store, device)
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
var configuration = {'LABJACK': {
    'CHOICE_ZERO': 'FIO0',
    'TARGET_ZERO': 'FIO1',
    'CHOICE_ONE': 'FIO2',
    'TARGET_ONE': 'FIO3'
    },
  'FIRMATA': {
    'CHOICE_ZERO': 2,
    'TARGET_ZERO': 4,
    'CHOICE_ONE': 3,
    'TARGET_ONE': 5
  }
}
var createDeviceL = require('./bxdx/bxdx-labjack.js')
var deviceL = createDeviceL(configuration.LABJACK) 
deviceL.emitter.on('ready', function () {
  console.log('LABJACK ready')
  bxdx.render(outputs, store, deviceL)
})
var createDevice = require('./bxdx/bxdx-firmata.js')
var device = createDevice(configuration.FIRMATA) 
device.emitter.on('ready', function () {
  console.log('FIRMATA ready')
  bxdx.render(outputs, store, device)
})



///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
var deviceMock = require('./bxdx/bxdx-mock.js')()
bxdx.render(outputs, store, deviceMock)


