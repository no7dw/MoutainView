'use strict'
// logger
exports.logger = function *(next){
        var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s ms', this.method, this.url, ms);
}

