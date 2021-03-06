/* eslint-env node */

var state = require('./state');

var GET = 'GET';

// next might change ntag less frequently
// this naive implementation does not handle concurrent requests
var ntagMiddleware = function *(next) {

  if (this.method !== GET && this.get('ntag') !== state.getCurrentNtag()) {
      this.throw(403, 'ntag does not match');
  }

  this.set('ntag', state.bumpNtag());

  yield next;
};

module.exports = ntagMiddleware;
