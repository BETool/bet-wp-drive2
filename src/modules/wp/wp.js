export default function (plugin, name) {
  let menuAdd = null;
  let menuRemove = null;

  menuAdd = chrome.contextMenus.create(
    {
      title: 'Установить обои',
      contexts: ['image'],
      onclick: setWallpaper
    }
  );

  if (plugin.talker.api.localStorage.get(`${name}paper`)) {
    addRemoveMenu();
  }


  function setWallpaper (info) {
    plugin.talker.api.localStorage.set(`${name}paper`, info.srcUrl);

    if (menuRemove === null) {
      addRemoveMenu();
    }
  }

  function removeWallpaper () {
    plugin.talker.api.localStorage.set(`${name}paper`, '');
    chrome.contextMenus.remove(menuRemove);
    menuRemove = null;
  }

  function addRemoveMenu () {
    menuRemove = chrome.contextMenus.create(
      {
        title: 'Удалить обои c drive2.ru',
        contexts: ['all'],
        onclick: removeWallpaper
      }
    );
  }
}
