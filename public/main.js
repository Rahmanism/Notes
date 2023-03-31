// In the main process.
const { app, BrowserWindow } = require("electron")

require("@electron/remote/main").initialize()

const path = require("path")
const isDev = require("electron-is-dev")

function createWindow() {
  // Create the browser window
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      enableRemoteModule: true,
    },
  })

  // Load a remote URL
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file:///${path.join(__dirname, "../build/index.html")}`
  )

  // Or load a local HTML file
  // win.loadFile('index.html')
}

app.on("ready", createWindow)
