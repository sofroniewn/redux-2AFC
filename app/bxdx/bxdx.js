var dx

module.exports = {
  dx: function (action) {
    dx(action)
  },

  render: function (devices, store, bx) {
    dx = store.dispatch
    
    // function update() {
    //   bx.update(devices(store.getState()))
    // }
    
    // bx.board.on('ready', function () {
    //   console.log('Board ready')
    //   bx.init(devices(store.getState()))
    //   store.subscribe(update)
    // })

    // bx.board.open(bx.err, function () {
    //   console.log('Board ready')
    //   bx.init(devices(store.getState()))
    //   store.subscribe(update)
    // })
  }
}














