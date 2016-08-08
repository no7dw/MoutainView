'use strict'

const RES = require('../lib/body-res')

exports.progress = function * (){
    console.log("progress", this.request.body)
    let body = RES.body
    body.data = {
        total: 10000,
        current: 500
    }
    return this.body = body
}
exports.heartbeat = function * (){
    console.log("heartbeat", this.request.body)
    let body = RES.body
    body.msg = "I'm healthy"
    return this.body = body
}

exports.run = function * (){
    console.log("run", this.request.body)
    let body = RES.body
    body.msg = "run success"
    return this.body = body
}

