// Modules to control application life and create native browser window
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path')
const url = require('url')
const Menu = electron.Menu;
const MenuItem = electron.MenuItem
const globalShortcut = electron.globalShortcut

// Hot Reload
require('electron-reload')(__dirname);

// Window Constants
let mainWindow, secondWindow, colorWindow, framelessWindow;

function createWindow() {
  // Create the main browser window (Parent Window)
  mainWindow = new BrowserWindow({
    width: 1000, height: 620,
    title: 'Parent',
    webPreferences: {
      preload: path.join(__dirname, './Secondary/preload.js')
    }
  });

  // Create the secondary browser window (Child Window)
  secondWindow = new BrowserWindow({
    width: 750, height: 465,
    parent: mainWindow, modal: true,
    title: 'Child'
  });

  /* Create a colored window
  colorWindow = new BrowserWindow({
    backgroundColor: '#ff00ff'
  });
  */

  /* Create a frameless window
  framelessWindow = new BrowserWindow({
    frame: false
  })
  */

  // load file into main window
  mainWindow.loadFile('./HTML/Primary/index.html');

  // load URL into child window
  secondWindow.loadURL('http://www.tjlarrechea.com/index.html');

  // load URL
  // mainWindow.loadURL('address goes here')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
