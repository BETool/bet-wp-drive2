import Logger from 'bet-logger';
import Bet from 'bet-cs';


const log = new Logger(`BET:cs:${window.location.hostname}`);
const name = 'wpd2';

if(chrome.runtime.onMessage) {
  log('cs script start');
  new Bet({pluginId: name}).load();
}
