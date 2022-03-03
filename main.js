const { BrowserWindow, app } = require('electron')

const isProd = process.env.NODE_ENV !== 'development'

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })

  if (isProd) {
    mainWindow.loadFile(`${__dirname}/index.html`)
    console.log(`${__dirname}/index.html`)
  } else {
    mainWindow.loadURL('http://localhost:8000/')
  }
}

app.on('ready', createWindow)
