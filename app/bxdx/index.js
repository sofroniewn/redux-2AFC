var _ = require('lodash')

module.exports = function (devices, store, board, pinmap) {

  var output = devices(store.getState(), store.dispatch)
  _(output).forEach(function(item, key) {
    if (key in pinmap) {
      board.init(pinmap[key], item, key)
      board.update(pinmap[key], item, key)
    }
  })

  function update() {
    var output = devices(store.getState(), store.dispatch)
    _(output).forEach(function(item, key) {
      if (key in pinmap) {
        board.update(pinmap[key], item, key)
      }
    })
  }

  store.subscribe(update)
}