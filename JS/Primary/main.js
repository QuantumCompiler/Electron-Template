// Modules to control application life and create native browser window
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;
const globalShortcut = electron.globalShortcut;
const isMac = process.platform === 'darwin';

// Hot Reload
require('electron-reload')(__dirname);

// Window Constants
let mainWindow, secondWindow, colorWindow, framelessWindow;

function createWindow() {
  // Create the main browser window (Parent Window)
  mainWindow = new BrowserWindow({
    width: 1000, height: 620,
    webPreferences: {
      preload: path.join(__dirname, './Secondary/preload.js')
    }
  });

  // Create the secondary browser window (Child Window)
  /*
  secondWindow = new BrowserWindow({
    width: 750, height: 465,
    parent: mainWindow, modal: true,
    title: 'Child'
  });
  */

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

  // Build the application menu
  const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
    isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
        {
          label: 'Speech',
          submenu: [
            { role: 'startSpeaking' },
            { role: 'stopSpeaking' }
          ]
        }
      ] : [
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close' }
      ])
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// Global shortcut to show the application
globalShortcut.register('Alt+1', function () {
  win.show()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});

// Create a context menu
// This is the menu when you right click within an application
app.on('browser-window-created', function (event, win) {
  const ctxMenu = new Menu()

  // Undo action
  ctxMenu.append(new MenuItem({ role: 'undo' }))
  win.webContents.on('context-menu', function (e, params) {
    ctxMenu.popup(win, params.x, params.y)
  });
  // Redo action
  ctxMenu.append(new MenuItem({ role: 'redo' }))
  win.webContents.on('context-menu', function (e, params) {
    ctxMenu.popup(win, params.x, params.y)
  });
  // Seperatory
  ctxMenu.append(new MenuItem({ type: 'separator' }))
  win.webContents.on('context-menu', function (e, params) {
    ctxMenu.popup(win, params.x, params.y)
  });
  // Cut action
  ctxMenu.append(new MenuItem({ role: 'cut' }))
  win.webContents.on('context-menu', function (e, params) {
    ctxMenu.popup(win, params.x, params.y)
  });
  // Copy action
  ctxMenu.append(new MenuItem({ role: 'copy' }))
  win.webContents.on('context-menu', function (e, params) {
    ctxMenu.popup(win, params.x, params.y)
  });
  // Paste action
  ctxMenu.append(new MenuItem({ role: 'paste' }))
  win.webContents.on('context-menu', function (e, params) {
    ctxMenu.popup(win, params.x, params.y)
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
