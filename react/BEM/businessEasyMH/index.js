import express from 'express'
import bodyParser from 'body-parser';
import config from './config/config.js';

/* 接口 */
import menuServer from './apis/menus.js';
import roleServer from './apis/roles.js';
import userServer from './apis/users.js';
import loginServer from './apis/login.js';

/* 生成一个express实例用于开启服务接口 */
const app = express();

/* body-parser 中间件解析请求body参数 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/* 返回头设置 */
app.all('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // 允许跨域
  res.setHeader('Access-Control-Allow-Headers', '*'); // 允许设置任意请求头
  next(); // 继续处理
})

/* 从配置获取mongodb链接地址 */
const { uri } = config;

/* 开启菜单服务接口 */
menuServer(app, uri);
/* 角色接口 */
roleServer(app, uri);
userServer(app, uri);
loginServer(app, uri);

app.listen(3000, (err) => {
  if (err) throw err;
  else console.log('app listen at 3000.')
})