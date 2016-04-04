import Logger from 'bet-logger';
import Bet from 'bet-bg';


const log = new Logger('BET:wp:drive2');
const name = 'wpd2';

if(chrome.runtime.onMessage) {
  log('bg script start');

  var plugin = new Bet({
    protocol : 'http',
    host: 'localhost:8080',
    pathToConfig: 'config.json',
    pathToModule: '',
    path: '/',
    timeout: 120000,
    errTimeout: 30000,
    pluginId: name,
    localModules: [{
      f: 0,
      r: 1,
      h: '(^www\\.drive2\\.ru$)|(^drive2\\.ru$)',
      a: 1,
      l: [
        '/module.js'
      ]
    }]
  });

  brex.load();
  chrome.contextMenus.create(
    {
      title: 'Установить обои',
      contexts: ['image'],
      onclick: setWallpaper
    }
  );

  function setWallpaper (info) {
    brex.talker.api.localStorage.set(`${name}paper`, info.srcUrl);
  }
}
