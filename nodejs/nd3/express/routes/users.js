var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function (req, res) {
  res.send('user lists');
})

router.get('/ab*cd', function (req, res) {
  res.send('regexp');
})

router.get('/form', function (req, res) {
  res.sendFile(__dirname + '/form.html');
})

router.post('/save', function (req, res) {
  res.send('表单提交');
})

router.all('/all', function (req, res) {
  res.send('all');
})

module.exports = router;
