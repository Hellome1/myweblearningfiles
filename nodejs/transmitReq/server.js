const http = require('http');
const url = require('url');
const server = http.createServer();

// 配置
const port = 3000;

server.on('request', (req, res) => {
  var { connection, host, ...originHeaders } = req.headers;
  var { query, pathname } = url.parse(req.url, true)
  // console.log(req.url);
  console.log(query, '\n', pathname);
  var options = {
    "method": req.method,
    "hostname": 'www.baidu.com',
    "port": '80',
    "path": req.url,
    "headers": { originHeaders }
  };

  // 获取请求参数
  var p = new Promise((resolve, reject) => {
    var postbody = [];
    req.on('data', (chunk) => {
      postbody.push(chunk);
    });
    req.on('end', () => {
      var postbodyBuffer = Buffer.concat(postbody);
      // console.log(postbodyBuffer.toString());
      resolve(postbodyBuffer);
    })
  });

  // 获取到请求参数后转发
  p.then((postbodyBuffer) => {
    let responsebody = [];
    var request = http.request(options, (response) => {
      response.on('data', (chunk) => {
        responsebody.push(chunk);
      });
      response.on('end', () => {
        var responsebodyBuffer = Buffer.concat(responsebody);
        // console.log(responsebodyBuffer.toString());
        res.end(responsebodyBuffer);
      })
    });
    request.write(postbodyBuffer);
    request.end();
  });
})

server.listen(port, () => {
  console.log('Server running on \'http://localhost:3000/\'');
})