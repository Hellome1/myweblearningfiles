const fs = require('fs');
const queryString = require('querystring');

module.exports = {
    readFile: function (file, res, req) {
        fs.readFile(file, 'utf-8', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.write(data);
            res.end();
        })
    },
    postReadFile: function (file, res, req, post) {
        var urlObject = queryString.parse(post);
        var array = ['email', 'password'];
        var reg;

        fs.readFile(file, 'utf-8', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

            for (var i = 0; i < array.length; i++){
                reg = new RegExp('{' + array[i] + '}', 'gi');
                data = data.replace(reg, urlObject[array[i]]);
            }

            if (urlObject.email && urlObject.password) {
                data = data.replace(/\{infoClass\}/ig, '');
                data = data.replace(/\{formClass\}/ig, 'hide');
            } else {
                data = data.replace(/\{infoClass\}/ig, 'hide');
                data = data.replace(/\{formClass\}/ig, '');
            }

            res.write(data);
            res.end();
        })


    },
    readImg: function (file, res) {
        fs.readFile(file, 'binary', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.write(data, 'binary');
            res.end();
        })
    }
}