const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
	win = new BrowserWindow({
		width: 450,
		height: 535,
		minHeight: 535,
		minWidth: 450,
		icon: __dirname + "/al/img/icon.png"
	});

	win.loadURL(url.format({
		pathname: __dirname+'/al/index.html',
		protocol: 'file:',
		slashes: true
	}));

	//win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	app.quit();
});
