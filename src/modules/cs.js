/* global chrome:true */

'use strict';

import BetCs from 'bet-cs';

if (chrome.runtime.onMessage) {
  new BetCs().load();
}
