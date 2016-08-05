'use strict'

exports.progress = function * (){
    let body = {}
    body.code = 200
    body.msg = null
    body.data : {
        total: 10000,
        current: 500
    }
    return body
}
exports.heartbeat = function * (){
    let body = {}
    body.code = 200
    body.msg = 'good'
    body.data : null
    return body
 
}
