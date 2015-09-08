var resolve = require('path').resolve;
var assert = require('assert');
var send = require('koa-send');

module.exports = serve;

function serve(root, opts) {
  opts = opts || {};

  assert(root, 'root directory is required to serve files');

  const rootPath = resolve(root);

  function setLocale(){
    var locale = this.cookies.get('locale');
    var language, country;
    if (locale) {
      var tokens = locale.split('-');
      language = tokens[0];
      country = tokens[1];
    } else {
      language = 'sv';
      country = 'SE';
    }

    this.body = {language: language, country: country};
  }

  return function *serve(next){
    if (this.method == 'HEAD' || this.method == 'GET') {

      if(this.path.indexOf('/next/2/accounts') !== -1) {
        opts.root = rootPath + '/' + this.cookies.get('username');
      } else if (this.path.indexOf('/next/2/login') !== -1) {
        if (this.cookies.get('authenticated') === 'true') {
          opts.root = rootPath + '/' + this.cookies.get('username');
        } else {
          setLocale.apply(this);
          return;
        }
      } else {
        opts.root = rootPath + '/common';
      }

      if (yield send(this, this.path + '.json', opts)) return;
    }
    yield* next;
  };
}
