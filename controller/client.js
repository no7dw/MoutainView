'use strict'

const RES = require('../lib/body-res')

exports.progress = function * (){
    console.log("progress", this.query)
    let body = RES.body
    body.data = {
        total: 10000,
        current: 500
    }
    return this.body = body
}
exports.heartbeat = function * (){
    console.log("heartbeat", this.query)
    let body = RES.body
    return this.body = body
 
}

