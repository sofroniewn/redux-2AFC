var dx

module.exports = {
  dx: function (action) {
    dx(action)
  },

  render: function (output, store, device) {
    dx = store.dispatch
    
    function update() {
      device.update(output(store.getState()))
    }

    device.init(output(store.getState()))
    store.subscribe(update)

    // device.board.on('ready', function () {
    //   console.log('Board ready')
    //   device.init(output(store.getState()))
    //   store.subscribe(update)
    // })

    // device.board.open(device.err, function () {
    //   console.log('Board ready')
    //   device.init(output(store.getState()))
    //   store.subscribe(update)
    // })
  }
}














