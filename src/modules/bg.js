import Logger from 'bet-logger';
import Bet from 'bet-bg';
import ping from 'bet-ping';
import wp from './wp/wp';
import v from './wp/v';


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
  v(plugin, name);
  wp(plugin, name);
}
