const net = require('net');
const port = 9000;
const host = '127.0.1.1';

const client = new net.Socket();
client.setEncoding('utf-8');

//连接服务器
client.connect(port, host, function () {
    client.write('您好');
})

client.on('data', function (data) {
    console.log('服务端传来:', data);
    say();
})

client.on('error', function (err) {
    rl.close();
    console.log('error', err);
})

client.on('close', function () {
    console.log('connection closed');
})

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function say() {
    rl.question('请输入:', (inputStr) => {
        if (inputStr != 'bye') {
            client.write(inputStr + '\n');
        } else {
            client.destroy(); //关闭连接
            rl.close();
        }
    })
}