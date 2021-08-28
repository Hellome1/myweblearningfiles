const express = require('express');
const path = require('path');

const app = express();


// 设置静态路径
app.use(express.static(path.join(__dirname, 'public')));

// 监听端口号
app.listen(process.env.PORT || '3000');