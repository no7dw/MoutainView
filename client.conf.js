'use strict'

let clientExample = 
{ 
    clientIdd : 1,
    argv : 10000,
    entry : "app.js",
    notifyUrl : 'http://localhost:3000/result',
    heartbeatUrl : '/',
    progressUrl : 'http://localhost:3000/progress'
}

module.export = {
    clients: [
            
        { 
            clientIdd : 1,
            argv : 10000,
        },
        
        { 
            clientIdd : 2,
            argv : 20000,
        }
    ],
    clientExample: clientExample
}

