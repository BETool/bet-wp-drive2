/* global chrome:true */

'use strict';

import BetBg from 'bet-bg';

const config = {
  ttl: 0,
  ettl: 0,
  pluginId: 'd2w',
  config: [{
    f: 0,
    r: 1,
    i: 1,
    h: '^(www\\.)?drive2\\.ru$',
    l: [
      '/d2.js',
    ],
  }],
};

if (chrome.runtime.onMessage) {
  new BetBg(config).run();
}
