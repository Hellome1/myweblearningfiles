/**
 * @description 登录逻辑
 */
import { Handle } from "../connect.js";
import jwt from 'jsonwebtoken';

const secret = 'IUKJJSZW+LL26643';

export const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    try {
      var decode = jwt.verify(token, secret);
      resolve(decode);
    } catch {
      reject();
    }
  })
}

export const unAuthorize = (res) => {
  console.log(`
    --------------------------------------------------------------------------------------
    ----------------------------------unAuthorized！--------------------------------------
    --------------------------------------------------------------------------------------
  `)
  res.send({
    code: 401,
    msg: 'Token失效！'
  })
}

export default (app, uri) => {
  app.post('/login', async (req, res) => {
    /* 校验用户登录 */
    const { body: { username, password} } = req;
    console.log(username, password);
    if (username && password) {
      const opt = {
        type: 'read',
        filter: {
          username,
          password
        }
      };
      // 新建一个Handle实例
      const hdIns = new Handle(uri);
      await hdIns.select('BEM', 'users').CRUD(opt);
      const result = hdIns.lastResult;
      const dataObj = result.data && result.data[0] || {};
      const { username: usr } = dataObj;
      if (usr) {
        const token = jwt.sign({username: usr}, secret, {expiresIn: 24 * 60 * 60});
        res.send({
          code: 200,
          token,
          msg: '操作成功'
        });
      } else {
        res.send({
          code: 400,
          msg: '操作失败'
        })
      }
    } else {
      res.send({
        code: 400,
        msg: '请输入用户名或密码！'
      })
    }
  })
}