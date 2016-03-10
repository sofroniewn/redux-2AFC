var app = require('app')
var BrowserWindow = require('browser-window')

var mainWindow = null

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    height: 505,
    resizable: false,
    title: '10-2AFC',
    width: 595
  })

  mainWindow.loadURL('file://' + __dirname + '/app/index.html')
  
  mainWindow.openDevTools()
  
  mainWindow.on('closed', function () {
    mainWindow = null
  })
})