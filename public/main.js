const { BrowserWindow, app, ipcMain } = require('electron')
const electronReload = require('electron-reload')

const isProd = process.env.NODE_ENV !== 'development'
// console.log(remote)
let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: __dirname + '/preload.js'
    }
  })

  if (isProd) {
    mainWindow.loadFile(`${__dirname}/index.html`)
    console.log(`${__dirname}/index.html`)
  } else {
    mainWindow.loadURL('http://localhost:9691/')
  }
}

app.on('ready', createWindow)

ipcMain.on('sth', (event, data) => {
  event.sender.send('sth_response', '主进程的返回1243')
  console.log(data)
})

// dialog.showMessageBox({type: 'info', message: '在渲染进程中直接使用主进程的模块'})
