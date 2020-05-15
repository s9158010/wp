const { remote } = require('electron')

const currWindow = remote.BrowserWindow.getFocusedWindow()

window.closeCurrentWindow = function () {
  currWindow.close()
}

window.openFile = function () {
  const { dialog } = remote
  dialog.showOpenDialog(
    function (fileName) {
      if (fileName === undefined) {
        window.alert('No file selected')
        return
      }
      filePath.innerText = fileName[0]
      var videoControl = document.getElementById('videoControl')
      videoControl.setAttribute('src', fileName[0])
      console.log('fileName[0]=', fileName[0])
    }
  )
}