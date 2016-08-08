'use strict'

var schedule = require('node-schedule');
const rp = require('request-promise')

const clientPort = 8001 //start port

// @path example: '/path'
// @body json
var runClient = function(port, path, method ,body) {
    var options = {
        method: method,
        uri: 'http://localhost:'+ port +  path,
        json: true
    };
    rp(options)
        .then(function (body) {
            console.log("client: %d body: %s", port , JSON.stringify(body))
        })
        .catch(function (err) {
            console.log("failed", err)
        });
    }

var rule = new schedule.RecurrenceRule()
rule.second = 1
schedule.scheduleJob(rule,function(){
    for(let portn = clientPort; portn < clientPort+4; portn++){
      runClient( portn, '/p', 'GET' , {})
      runClient( portn,'/h', 'GET' , {})
    } 
})

for(let portn = clientPort; portn < clientPort+4; portn++){
    runClient( portn, '/h', 'GET' , {})
    runClient( portn, '/r', 'POST' , {argv:3000})
    runClient( portn, '/p', 'GET' , {})
}
