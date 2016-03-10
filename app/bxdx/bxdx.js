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

  }
}














