const {app, BrowserWindow} = require('electron');

// Create window
function createWindow() {
    const ventana = new BrowserWindow({
        width: 960, 
        height: 540
    });

    ventana.loadFile('index.html');
}

app.whenReady().then(createWindow);