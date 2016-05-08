import BetModule from 'bet-module';

var module = new BetModule({mid: 'd2paper'});
let wallValue = '';
let user = document.querySelector('.top-nav-block a[href^="/users/"]').href.split(/[^\w]+/)[5];

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
    }
  });
}
