var express = require('express');
var router = express.Router();
var models = require('../models/conn');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 注册接口
router.post('/register', function (req, res) {
  var data = {
    username: req.body.username,
    password: req.body.password == req.body.recheck ? req.body.password : null
  }
  // 数据校验
  models.connect(function (db) {
    if (data.password) {
      db.collection('users').insertOne(data, function (err, ret) {
        if (err) {
          console.log('注册失败');
          res.redirect('/register');
        } else {
          res.redirect('/login');
        }
      })
    }
  })
});

// 登录接口
router.post('/login', function (req, res) {
  var data = {
    username: req.body.username,
    password: req.body.password
  }
  // 数据校验
  // console.log(data);
  models.connect(function (db) {
    console.log('登录');
    db.collection('users').find(data).toArray(function (err, docs) {
      if (err) {
        res.redirect('/login');
      } else {
        if (docs.length == 0) {
          res.redirect('/login');
        } else {
          // 登录成功，进行session会话存储
          req.session.username = data.username;
          res.redirect('/')
        }
      }
    })
  })
})

// 退出登录
router.get('/logout', function (req, res) {
  req.session.username = null;
  res.redirect('/login');
})

module.exports = router;
