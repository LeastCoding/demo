const { Menu } = require('electron')
const menuList = [

    {
        label: 'menu1',
        submenu: [
          {
            label: 'Undo',
            accelerator: 'CmdOrCtrl+Z',
            role: 'undo'
          },
          {
            label: 'Open',
            accelerator: 'CmdOrCtrl+O',
            click: () => {
              electron.dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]});
            }
          },
          {
            label: 'submenu1',
            submenu: [
              {
                label: 'item1',
                accelerator: 'CmdOrCtrl+A',
                click: () => {
                  this.win.openDevTools();
                }
              },
              {
                label: 'item2',
                accelerator: 'CmdOrCtrl+B',
                click: () => {
                   this.win.closeDevTools();
                }
              }
            ]
          }
        ]
    }
];

const menu = function(win){

    Menu.setApplicationMenu(Menu.buildFromTemplate(menuList));
}

exports.createMenu = menu