var electron = require('electron');
var path = require('path');
var url = require('url');


var window =  null

electron.app.once('ready', createWindow=()=> {

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
  electron.app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

electron.app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (window !== null) {
    createWindow()
  }
})


