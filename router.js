'use strict'

const router = require('koa-router')()
const clientController = require('./controller/client.js')

router.get('/h', clientController.heartbeat )
router.get('/p', clientController.progress)
router.post('/r', clientController.run)

module.exports = router

