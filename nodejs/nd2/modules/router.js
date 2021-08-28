const file = require('./file');
const url = require('url');

module.exports = {
    home: function (req, res) {
        file.readFile('./views/home.html', res, req);
    },
    login: function (req, res) {
        // var urlObject = url.parse(req.url, true).query;
        // console.log(urlObject.email);
        // console.log(urlObject.password);
        // file.readFile('./views/login.html', res, req);

        var post = '';
        req.on('data', function (chunk) {
            post += chunk;
        })
        req.on('end', function () {
            file.postReadFile('./views/login.html', res, req, post);
        })
    },
    register: function (req, res) {
        res.write('注册页面');
    },
    img: function (req, res) {
        file.readImg('./images/heh.jpg', res);
    }
}