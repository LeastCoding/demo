const { app, BrowserWindow } = require('electron')

const createApp = function(w,h, path = 'index.html',callback){

    let createWindow = function (){

        let win = new BrowserWindow({
            width: w,
            height: h
        })

        win.loadFile(path)

        callback(win);

        return win;
    }


    app.whenReady().then(() => {
        createWindow()
    
        app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
            if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })
    })
}

exports.createApp = createApp