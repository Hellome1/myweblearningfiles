// 1、引入express模块
const express = require('express');
// 2、创建app对象，通过语法express()  底层原理http模块的createServer
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// 3、路由，语法  app.HTTP请求方式(路径，回调函数)
app.get('/', (req, res) => {
    // send是express用来响应数据
    res.send('hello');
})

const stuController = require(__dirname + '/controller/stu');
//学生添加
app.post('/stu', stuController.create);
//学生列表
app.get('/stu', stuController.index);

app.listen(3000, function () {
    console.log('app listening on:3000');
})