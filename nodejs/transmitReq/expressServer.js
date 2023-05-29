const express = require('express');
const bodyParse = require('body-parser');
const superagent = require('superagent');

const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.all('*', (req, res, next) => {
  // 允许跨域
  res.header('Access-Control-Allow-Origin', '*');
  // 允许证书 携带cookie
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/get', (req, res) => {
  var data = req.query,
    serverCookie = req.headers.cookie,
    nres = res;

  if (!data.api) {
    res.json({ 'msg': 'api字段不能为空！' });
    return;
  }
  var sreq = superagent.get(data.api);
  var dataAccept = data.Accept || 'application/json';
  var contentType = 'application/json; charset=utf-8';
  sreq.set({
    'Accept': dataAccept,
    'Content-Type': contentType
  });
  if (serverCookie) {
    sreq.set({
      'Cookie': serverCookie
    });
  }
  if (data.datas) {
    sreq.query(data.datas);
  }
  sreq.end((err, res) => {
    if (err) {
      nres.json({ 'msg': '请求发生错误可能是api地址无效或者请求方式错误！' });
    } else {
      console.log(res);
      if (JSON.stringify(res.body) == '{}') {
        var text = res.text;
        if (text.indexOf('<') === 0) {
          nres.send(text);
        } else if (text[0] == '{' && text[text.length - 1] == '}') {
          nres.json(JSON.parse(text));
        } else {
          nres.json({ 'data': text });
        }
      }
    }
  });
});

app.post('/post', (req, res) => {
  var data = req.body,
    serverCookie = req.headers.cookie,
    nres = res;

  if (!data.api) {
    res.json({ 'msg': 'api字段不能为空！' });
    return;
  }
  var sreq = superagent.post(data.api);
  var dataAccept = data.Accept || 'application/json';
  var contentType = 'application/json; charset=utf-8';
  sreq.set({
    'Accept': dataAccept,
    'Content-Type': contentType
  });
  if (serverCookie) {
    sreq.set({
      'Cookie': serverCookie
    });
  }
  if (data.datas) {
    sreq.send(data.datas);
  }
  sreq.end((err, res) => {
    if (err) {
      nres.json({ 'msg': '请求发生错误可能是api地址无效或者请求方式错误！' });
    } else {
      console.log(res);
      if (JSON.stringify(res.body) == '{}') {
        var text = res.text;
        if (text[0] == '{' && text[text.length - 1] == '}') {
          nres.json(JSON.parse(text));
        } else {
          nres.json({ 'data': text });
        }
      }
    }
  });
});

app.get('/', (req, res) => {
  res.send('服务正在运行...');
});

app.listen(3001, () => {
  console.log('App running on \'http://localhost:3001\'.');
})