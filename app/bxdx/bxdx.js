var dx

module.exports = {
  dx: function (action) {
    dx(action)
  },

  render: function (devices, store, board) {
    dx = store.dispatch
    
    function update() {
      board.update(devices(store.getState()))
    }

    board.init(devices(store.getState()))
    store.subscribe(update)

  }
}














