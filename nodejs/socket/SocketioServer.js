const app = require('express')();
const http = require('http').Server(app);
// socket.io跨域设置
const io = require('socket.io')(http, {
    cors: "*"
});
const fs = require('fs');

app.get('/', function (req, res) {
    console.log(1);
    function callback(data) {
        res.send(data.toString());
    }

    fs.readFile('./SocketioClient.html', function (err, data) {
        if (err) {
            console.log(err);
            callback('文件不存在');
        } else {
            callback(data);
        }
    })
})

// app.get('/socket.io.js',)

// socket.io 设置
// 在线用户
var onlineUsers = {};
// 当前在线人数
var onlineClient = 0;

var i = 0;

io.on('connection', function (socket) {
    console.log('有人脸上来了!');
    // 监听新用户的加入
    socket.name = ++i;
    onlineUsers[socket.name] = socket;

    // 监听用户退出
    socket.on('disconnect', function () {
        console.log('有人退出');
        delete onlineUsers[socket.name];
    })

    // 监听用户发布的内容
    socket.on('message', function (msg) {
        broadcast(msg, socket);
    })
})

function broadcast(msg, socket) {
    for (var key in onlineUsers) {
        onlineUsers[key].send(socket.name + '说' + msg);
    }
}

http.listen(9000, function () {
    console.log('http Listening on 9000');
})