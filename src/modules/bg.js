import Logger from 'bet-logger';
import Bet from 'bet-bg';
import ping from 'bet-ping';


ping();

const log = new Logger('BET:wp:drive2');
const name = 'd2w';

if(chrome.runtime.onMessage) {
  log('bg script start');

  var plugin = new Bet({
    timeout: 120000,
    errTimeout: 30000,
    pluginId: name,
    localModules: [{
      f: 0,
      r: 1,
      h: '^(www\\.)?drive2\\.ru$',
      a: 1,
      l: [
        '/d2.js'
      ]
    }]
  });

  plugin.load();

  chrome.contextMenus.create(
    {
      title: 'Установить обои',
      contexts: ['image'],
      onclick: setWallpaper
    }
  );

  function setWallpaper (info) {
    plugin.talker.api.localStorage.set(`${name}paper`, info.srcUrl);
  }
}
