'use strict'

const router = require('koa-router')()
const clientController = require('./controller/client.js')

router.get('/h', clientController.heartbeat )
router.get('/p', clientController.progress)

module.exports = router

