var electron = require('electron');
var path = require('path');
var url = require('url');

var window =  null

electron.app.once('ready', function() {

window = new electron.BrowserWindow({
  show: false,
  transparent: true,
  frame: false
})

window.loadURL(url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true
}))

  window.once('ready-to-show', function() {
    window.maximize()
    window.show()
  })

})
