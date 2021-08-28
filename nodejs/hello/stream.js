const fs = require('fs');
const zlib = require('zlib');

var fileReadStream = fs.createReadStream('data.json');
var fileWriteStream = fs.createWriteStream('data.json.gz');

fileWriteStream.on('pipe', (source) => {
    console.log(source);
})

// pipe 也可以将读取到的文件流写入创建的的文件流
fileReadStream
    .pipe(zlib.createGzip())
    .pipe(fileWriteStream);

// var count = 0;

// fileReadStream.once('data', (chunk) => {
//     console.log(chunk.toString());
//     fileWriteStream.write(chunk);
// })

// fileReadStream.on('data', (chunk) => {
//     console.log(`${++count} 接收到: ${chunk.length}`);
// })

// fileReadStream.on('end', () => {
//     console.log('—— 结束 ——');
// })

// fileReadStream.on('error', (error) => {
//     console.log(error);
// })