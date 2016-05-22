import BetModule from 'bet-module';

var module = new BetModule({mid: 'd2paper'});

let userName = '';
let wallValue = '';
let premiumClass = 'g-branded';
let bodyClassName = module.D.body.className;
let user = module.D.querySelector('.js-top-nav-user a[href^="/users/"]');

if (
  user
  &&
  user.href
) {
  userName = user.href.split(/[^\w]+/)[5];

  if (userName) {
    loadWall();
    setInterval(loadWall, 1000);
  }
}

function loadWall () {
  module.A.gs.get('paper', value => {
    if (
      value === ''
      &&
      wallValue !== value
    ) {
      wallValue = value;
      return setPremiumView(wallValue);
    }
    if (
      value
      &&
      wallValue !== value
      &&
      module.W
      &&
      module.D
      &&
      module.D.body
      &&
        (
          new RegExp(`^\/((my)|(users\/${userName}))\/`, 'i').test(module.W.location.pathname)
          ||
          window.location.pathname === '/'
        )
    ) {
      wallValue = value;
      setPremiumView(wallValue);
    }
  });
}

function setPremiumView (value) {
  module.D.body.style.background = value ? `url(${value}) 50% 0 repeat` : '';
  let isPremium = !!(new RegExp(`${premiumClass}`, 'i').test(bodyClassName));

  if (!value && !isPremium) {
    return module.D.body.className = module.D.body.className.replace(new RegExp(` ?${premiumClass} ?`), '');
  }

  if (!isPremium) {
    module.D.body.className = `${(bodyClassName ? bodyClassName + ' ' : '')}${premiumClass}`;
  }
}
