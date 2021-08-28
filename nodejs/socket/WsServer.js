const WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 9000 });

var clientMap = new Object, i = 0;

wss.on('connection', function (ws) {
    ws.name = ++i;
    console.log(ws.name + '上线');
    clientMap[ws.name] = ws;
    ws.on('message', function (message) {
        broadcast(message, ws);
    })
    ws.on('close', function () {
         //调用内存回收
        console.log(ws.name + '离开');
    })
})

function broadcast(msg, ws) {
    for (var key in clientMap) {
        clientMap[key].send(ws.name + '说' + msg);
    }
}