var express = require('express');
var router = express.Router();
var models = require('../models/conn');
var moment = require('moment');

var fs = require('fs');
var multiparty = require('multiparty');

/* GET home page. */
router.get('/', function (req, res, next) {
  var username = req.session.username;
  var page = req.query.page || 1;
  var data = {
    total: 0, // 总共有多少页
    curPage: page,
    list: [] // 当前页的文章列表
  }
  var pageSize = 16;
  models.connect(function (db) {
    // 第一步查询所有文章
    db.collection('articles').find().toArray(function (err, docs) {
      data.total = Math.ceil(docs.length / pageSize);
      
      // 查询当前页的文章列表
      models.connect(function (db) {
        db.collection('articles').find().sort({ _id: -1 }).limit(pageSize).skip((page - 1) * pageSize).toArray(function (err, docs2) {
          if (docs2.length == 0) {
            res.redirect('/?page=' + ((page - 1) || 1));
          } else {
            docs2.map(function (ele, index) {
              ele['time'] = moment(ele.id).format('YYYY-MM-DD HH:mm:ss')
            })
            data.list = docs2;
            res.render('index', { username: username, data: data});
          }
        })
      })
    })
  })
});


// 渲染注册页
router.get('/register', function (req, res) {
  res.render('register');
})

// 渲染登录页
router.get('/login', function (req, res) {
  res.render('login');
})

// 渲染写文章页面 / 编辑文章页面
router.get('/write', function (req, res) {
  var username = req.session.username || '';
  var id = parseInt(req.query.id);
  var page = req.query.page;
  var item = {
    title: '',
    content: ''
  }
  if (id) { // 编辑
    models.connect(function (db) {
      db.collection('articles').findOne({ id: id }, function (err, docs) {
        if (err) {
          console.log('查询失败');
        } else {
          item = docs;
          item['page'] = page;
          res.render('write', { username: username, item: item });
        }
      })
    })
  } else { // 新增
    res.render('write', { username: username, item: item });
  }
})

// 渲染详情页
router.get('/detail', function (req, res) {
  var id = parseInt(req.query.id);
  var username = req.session.username;
  models.connect(function (db) {
    db.collection('articles').findOne({ id: id }, function (err, docs) {
      if (err) {
        console.log('查询失败', err);
      } else {
        var item = docs;
        item['time'] = moment(item.id).format('YYYY-MM-DD HH:mm:ss')
        res.render('detail', { item: item, username: username });
      }
    })
  })
})

router.post('/kindeditor/php/upload_json.php', function (req, res) {
  var form = new multiparty.Form();
  form.parse(req, function (err, fields, files) {
    if (err) {
      console.log('上传失败', err);
    } else {
      console.log(files);
      var file = files.imgFile[0];

      var rs = fs.createReadStream(file.path);
      var newPath = '/uploads/' + file.originalFilename
      var ws = fs.createWriteStream('./public' + newPath);
      rs.pipe(ws);
      ws.on('close', function () {
        console.log('文件上传成功');
        var msg = {
              "error" : 0,
              "url" : newPath
            }
        res.send(msg);
      })
    }
  })
  

  // var msg = {
  //       "error" : 0,
  //       "url" : "http://localhost:3000/images/2.png"
  //     }
  // res.send(msg);

  // fs.readFile('E:/123/nodejs/PG/public/kindeditor/php/upload_json.php', 'utf-8',function (err, data) {
  //   if (err) {
  //     throw err;
  //   } else {
  //     res.render(data);
  //     // res.send(data);
  //   }
  // })
})

// router.get('/path', function (req, res) {
  
// })

module.exports = router;
