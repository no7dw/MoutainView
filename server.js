'use strict'

const rp = require('request-promise')
const clientPort = 8001

var options = {
    method: 'POST',
    uri: 'http://localhost:'+ clientPort + '/r',
    body: {
        argv: 2000
    },
    json: true
};
rp(options)
    .then(function (body) {
        // POST succeeded... 
        console.log("client: %d body: %s", clientPort , JSON.stringify(body))
    })
    .catch(function (err) {
        // POST failed... 
        console.log("failed", err)
    });

