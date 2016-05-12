import BetModule from 'bet-module';

var module = new BetModule({mid: 'd2paper'});

let wallValue = '';
let premiumClass = 'g-branded';
let user = module.D.querySelector('.top-nav-block a[href^="/users/"]').href.split(/[^\w]+/)[5];

let bodyClassName = module.D.body.className;


module.log(user);

loadWall();
setInterval(loadWall, 1000);

function loadWall () {
  module.A.gs.get('paper', value => {
    if (
      wallValue !== value
      &&
      module.W
      &&
      module.D
      &&
      module.D.body
      &&
        (
          new RegExp(`^\/((my)|(users\/${user}))\/`, 'i').test(module.W.location.pathname)
          ||
          window.location.pathname === '/'
        )
    ) {
      wallValue = value;
      module.D.body.style.background = value ? `url(${value}) 50% 0 repeat` : '';

      if (!(new RegExp(`${premiumClass}`, 'i').test(bodyClassName))) {
        module.D.body.className = `${(bodyClassName ? bodyClassName + ' ' : '')}${premiumClass}`;
      }
    }
  });
}
