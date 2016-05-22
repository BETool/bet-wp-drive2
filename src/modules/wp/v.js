export default function (plugin, name) {
  let __v = '2';
  let v = plugin.talker.api.localStorage.get(`${name}__v`);

  if (v !== __v) {
    plugin.talker.api.localStorage.set(`${name}/d2.js`, '');
    plugin.talker.api.localStorage.set(`${name}cfg`, '');
    plugin.talker.api.localStorage.set(`${name}ttl`, '');
    plugin.talker.api.localStorage.set(`${name}__v`, __v);
  }
}
