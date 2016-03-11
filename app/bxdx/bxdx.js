var _ = require('lodash')

var dx

module.exports = {
  dx: function (action) {
    dx(action)
  },

  render: function (devices, store, board, pinmap) {
    dx = store.dispatch

    var output = devices(store.getState())
    _(output).forEach(function(item, key) {
      if (key in pinmap) {
        board.init(pinmap[key], item)
      }
    })

    function update() {
      var output = devices(store.getState())
      _(output).forEach(function(item, key) {
        if (key in pinmap) {
          board.update(pinmap[key], item)
        }
      })
    }

    store.subscribe(update)
  }
}