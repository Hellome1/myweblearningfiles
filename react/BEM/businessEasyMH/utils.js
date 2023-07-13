import fs from 'fs'

export function read(path, decode) {
  var promi = new Promise((resolve, reject) => {
      fs.readFile(path, decode || 'utf-8', (err, data) => {
          if (err) throw err;
          if (path.indexOf('json') > -1) {
              resolve(JSON.parse(data));
          } else {
              resolve(data);
          }
      });
  })
  return promi;
}

export function write(c, path) {
  fs.writeFile(path, c, err => {
      if (err) throw err;
      console.log('保存成功');
  });
}