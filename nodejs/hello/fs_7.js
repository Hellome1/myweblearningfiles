const fs = require('fs');

fs.readdirSync('logs').map((file) => {
    fs.unlink(`logs/${file}`, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`文件${file}删除成功`);
        }
    })
})

fs.rmdir('logs', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('成功删除了目录: logs');
    }
})