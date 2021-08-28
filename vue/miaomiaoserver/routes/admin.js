var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  if (req.session.username && req.session.isAdmin) {
    next()
  } else {
    res.send({
      msg: '没有管理员权限',
      code: -1
    })
  }
})

var adminController = require('../controllers/admin')

/* GET users listing. */
router.get('/', adminController.index)
router.get('/usersList', adminController.usersList)
router.post('/updateFreeze', adminController.updateFreeze)
router.post('/deleteUser', adminController.deleteUser)

module.exports = router;
