'use strict'

const app = require('koa')()
const router = require('./router')

const logger = require('./lib/logger').logger
const clientConf = require('./client.conf')
const bodyparser = require('koa-bodyparser')

const port = 8001

app.use(logger)
app.use(bodyparser())
app.use(router.routes())

app.listen(port)
console.log('Listening port: %d !!!', port )

