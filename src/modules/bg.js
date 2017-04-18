/* global chrome:true */

'use strict';

import BetBg from 'bet-bg';

if (chrome.runtime.onMessage) {
  new BetBg().run();
}
