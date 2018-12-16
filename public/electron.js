const electron = require("electron");
const isDev = require("electron-is-dev");
const { default: installExtension, REDUX_DEVTOOLS } = isDev && require("electron-devtools-installer");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const globalShortcut = electron.globalShortcut;
const session = electron.session;

const path = require("path");
const url = require("url");

let mainWindow;

if (isDev) {
  installExtension(REDUX_DEVTOOLS)
    .then(name => console.log(`Added Extension:  ${name}`))
    .catch(err => {
      /* ignore */
    });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    autoHideMenuBar: true,
    title: "TradeMate",
    backgroundColor: "#0b0c10"
  });
  mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);
  mainWindow.maximize();
  mainWindow.on("closed", () => (mainWindow = null));
  mainWindow.on("ready-to-show", function() {
    mainWindow.show();
    mainWindow.focus();
  });
}

app.on("ready", () => {
  globalShortcut.register("CommandOrControl+F12", () => {
    if (mainWindow) {
      mainWindow.openDevTools();
    }
  });
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        "Content-Security-Policy": [
          "script-src 'unsafe-inline' 'self' http://localhost:3000 https://fonts.googleapis.com https://cdn.jsdelivr.net"
        ]
      }
    });
  });
  createWindow();
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
