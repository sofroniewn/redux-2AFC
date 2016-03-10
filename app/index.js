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

var configuration = {'LABJACK': {
  'CHOICE_ZERO': 'FIO0',
  'TARGET_ZERO': 'FIO1',
  'CHOICE_ONE': 'FIO2',
  'TARGET_ONE': 'FIO3'
  }
}

// var configuration = {'FIRMATA': {
//   'CHOICE_ZERO': 'FIO0',
//   'TARGET_ZERO': 'FIO1',
//   'CHOICE_ONE': 'FIO2',
//   'TARGET_ONE': 'FIO3'
//   }
// }


var createDevice = require('./bxdx/bxdx-labjack.js')
var device = createDevice(configuration.LABJACK) 
bxdx.render(outputs, store, device)


// var configuration = {'FIVE': {
//   '2': 'CHOICE-ZERO',
//   '4': 'TARGET-ZERO',
//   '3': 'CHOICE-ONE',
//   '5': 'TARGET-ONE'
//   }
// }

var configuration = {'LABJACK': {
  'FIO0': 'CHOICE-ZERO',
  'FIO2': 'CHOICE-ONE',
  },
  'FIVE': {
  '4': 'TARGET-ZERO',
  '5': 'TARGET-ONE'
  }
}

// var configuration = {'MOCK': {
//   '2': 'CHOICE-ZERO',
//   '4': 'TARGET-ZERO',
//   '3': 'CHOICE-ONE',
//   '5': 'TARGET-ONE'
//   }
// }

// // for mock
// var bx = require('./bxdx/bxdx-mock.js')
// bxdx.render(devices, store, bx)
// function mock (state) {
//   return bx(devices(store.getState()))
// }
// hxdx.render(mock, store)

// var bxdx = require('./bxdx/bxdx.js')
// //var bx = require('./bxdx/bxdx-five.js')
// var bx = require('./bxdx/bxdx-labjack.js')