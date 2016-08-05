'use strict'

const app = require('koa')()
const Router = require('koa-router')
const router = new Router()
const libClient = require('./lib/client')
const clientConf = require('./client.conf')
const bodyparser = require('koa-bodyparser')

router.use('/', console.log)
router.get('/health', libClient.heartbeat )
router.put('/progress', libClient.progress)

const port = 8001
var logger = function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s ms', this.method, this.url, ms);
}
app.use(logger)
app.use(bodyparser())
app.use(router.routes())

app.listen(port)
console.log('Listening port: %d !!!', port )

