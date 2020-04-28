# Electron.js 的新修改


* 不能直接在 html 裏 requrie 了，必須改用下列方式

說明 -- https://github.com/electron/electron/issues/9920#issuecomment-575839738


##  危險方法

For security reasons, you should keep nodeIntegration: false and use a preload script to expose just what you need from Node/Electron API to the renderer process (view) via window variable. From the Electron docs:

Preload scripts continue to have access to require and other Node.js features

Example: 

main.js

```js
const mainWindow = new BrowserWindow({
  webPreferences: {
    preload: path.join(app.getAppPath(), 'preload.js')
  }
})
```

preload.js

```js
const { remote } = require('electron');

let currWindow = remote.BrowserWindow.getFocusedWindow();

window.closeCurrentWindow = function(){
  currWindow.close();
}

```

renderer.js

```js
let closebtn = document.getElementById('closebtn');

closebtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.closeCurrentWindow();
});
```

## 安全方法

main.js

```js
const {
  app,
  BrowserWindow,
  ipcMain
} = require("electron");
const path = require("path");
const fs = require("fs");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

async function createWindow() {

  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, "preload.js") // use a preload script
    }
  });

  // Load app
  win.loadFile(path.join(__dirname, "dist/index.html"));

  // rest of code..
}

app.on("ready", createWindow);

ipcMain.on("toMain", (event, args) => {
  fs.readFile("path/to/file", (error, data) => {
    // Do something with file contents

    // Send result back to renderer process
    win.webContents.send("fromMain", responseObj);
  });
});
```

preload.js

```js
const {
    contextBridge,
    ipcRenderer
} = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, data) => {
            // whitelist channels
            let validChannels = ["toMain"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        receive: (channel, func) => {
            let validChannels = ["fromMain"];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender` 
                ipcRenderer.on(channel, (event, ...args) => fn(...args));
            }
        }
    }
);
```

index.html

```js
<!doctype html>
<html lang="en-US">
<head>
    <meta charset="utf-8"/>
    <title>Title</title>
</head>
<body>
    <script>
        window.api.receive("fromMain", (data) => {
            console.log(`Received ${data} from main process`);
        });
        window.api.send("toMain", "some data");
    </script>
</body>
</html>
```
