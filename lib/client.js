'use strict'

exports.progress = function * (){
    console.log("progress", this.query)
    let body = {}
    body.code = 200
    body.msg = null
    body.data = {
        total: 10000,
        current: 500
    }
    return body
}
exports.heartbeat = function * (){
    console.log("heartbeat", this.query)
    let body = {}
    body.code = 200
    body.msg = 'good'
    body.data = null
    return body
 
}
