NanoTimer = require('nanotimer')
now = require('performance-now')

timer = new NanoTimer()

timer.setInterval(function() {
  console.log('hello')
}, '', '2s')

setInterval(function() {
  console.log('EXAMPLEEEEE')
  console.log(timer.intervalT1)
}, 500)