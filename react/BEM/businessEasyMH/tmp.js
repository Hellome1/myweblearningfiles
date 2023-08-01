/**
 * @description 用来临时测试代码
 */
import jwt from 'jsonwebtoken';

const secret = 'IUKJJSZW+LL26643';
const token = jwt.sign({
  username: 'czy',
  pwd: 123
}, secret);

console.log(token);

const info = jwt.verify(token, secret);
console.log(info);