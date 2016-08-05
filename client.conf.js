'use strict'

let clientExample = 
{ 
    clientIdd : 1,
    query : 10000,
    notifyUrl : 'http://localhost:3000/result',
    heartbeatUrl : '/',
    progressUrl : 'http://localhost:3000/progress'
}

module.export = {
    clients: [
            
        { 
            clientIdd : 1,
            query : 10000,
        },
        
        { 
            clientIdd : 2,
            query : 20000,
        }
    ],
    clientExample: clientExample
}

