'use strict'

const app = require('koa')()
const Router = require('koa-router')
const router = new Router()
const libClient = require('./lib/client')

router.get('/', libClient.hearbeat )
router.put('/progress', libClient.progress)


