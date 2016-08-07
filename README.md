# MoutainView

### routine 

    - server know how many client
    - send each client with argv
    - get progress from each client in some interval

### how to trigger

    //server call client to run with arguments
    server$ curl --data={"argv": 1000 } localhost:8001/r

### how to get progress

    //get process from client
    client$ curl localhost:8001/p
    {"code":0,"msg":null,"data":{"total":10000,"current":500}}

### how to report health

    //get heartbeat from client
    client$ curl localhost:8001/h
    {"code":0,"msg":null,"data":null}

### how many clients?
use consul

