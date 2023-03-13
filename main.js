const {app, BrowserWindow} = require('electron');

// Create window
function createWindow() {
    const ventana = new BrowserWindow({
        width: 1296, 
        height: 729
    });

    ventana.loadFile('index.html');
}

app.whenReady().then(createWindow);