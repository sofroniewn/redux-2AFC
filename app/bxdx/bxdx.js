var dx

module.exports = {
  dx: function (action) {
    dx(action)
  },

  render: function (outputs, store, device) {
    dx = store.dispatch
    
    function update() {
      device.update(outputs(store.getState()))
    }
    
    // bx.board.on('ready', function () {
    //   console.log('Board ready')
    //   bx.init(outputs(store.getState()))
    //   store.subscribe(update)
    // })

    device.board.open(device.err, function () {
      console.log('Board ready')
      device.init(outputs(store.getState()))
      store.subscribe(update)
    })
  }
}














