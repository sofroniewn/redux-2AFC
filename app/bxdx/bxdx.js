var dx

module.exports = {
  dx: function (action) {
    dx(action)
  },

  render: function (devices, store, bx, pinmap) {
    dx = store.dispatch
    
    function update() {
      bx.update(devices(store.getState()), pinmap)
    }
    
    bx.board.on('ready', function () {
      console.log('Board ready')
      bx.init(devices(store.getState()), pinmap)
      store.subscribe(update)
    })
  }
}














