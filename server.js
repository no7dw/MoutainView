'use strict'

var schedule = require('node-schedule');
const rp = require('request-promise')
const clientPort = 8001

// @path example: '/path'
// @body json
var runClient = function(path, method ,body) {
    var options = {
        method: method,
        uri: 'http://localhost:'+ clientPort +  path,
        json: true
    };
    rp(options)
        .then(function (body) {
            console.log("client: %d body: %s", clientPort , JSON.stringify(body))
        })
        .catch(function (err) {
            console.log("failed", err)
        });
    }
runClient('/r', 'POST' , {argv:3000})

var rule = new schedule.RecurrenceRule()
rule.second = 1
schedule.scheduleJob(rule,function(){
  runClient('/h', 'GET' , {})
  //console.log('The answer to life, the universe, and everything!', new Date());
})

runClient('/h', 'GET' , {})
