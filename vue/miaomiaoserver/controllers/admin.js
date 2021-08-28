var UserModel = require('../models/users')

var index = async (req, res, next) => {
  res.send({
    msg: '管理员权限',
    code: 0
  })
}

var usersList = async (req, res, next) => {
  var result = await UserModel.usersList()
  if (result) {
    res.send({
      msg: '所有用户信息',
      code: 0,
      data: {
        usersList: result
      }
    })
  } else {
    res.send({
      msg: '获取用户信息失败',
      code: -1
    })
  }
}

var updateFreeze = async (req, res, next) => {
  var { email, isFreeze } = req.body
  var result = await UserModel.updateFreeze(email, isFreeze)

  if (result) {
    res.send({
      msg: '账号冻结操作成功',
      code: 0
    })
  } else {
    res.send({
      msg: '账号冻结操作失败',
      code: -1
    })
  }
}

var deleteUser = async (req, res, next) => {
  var { email } = req.body
  var result = await UserModel.deleteUser(email)
  if (result) {
    res.send({
      msg: '账号删除操作成功',
      code: 0
    })
  } else {
    res.send({
      msg: '账号删除操作失败',
      code: -1
    })
  }
}

module.exports = {
  index,
  usersList,
  updateFreeze,
  deleteUser
}