var mongoose = require('mongoose')
var { Head } = require('../untils/connect')
var url = require('url')
/* useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false. Please remove these options from your code. */
// mongoose.set('useCreateIndex', true)

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: {
    unique: true
    }
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  date: {
    type: Date,
    default: Date.now()
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isFreeze: {
    type: Boolean,
    default: false
  },
  userHead: {
    type: String,
    default: url.resolve(Head.baseUrl, 'default.jpg')
  }
})

var UserModel = mongoose.model('user', UserSchema)
UserModel.createIndexes()

var save = (data) => {
  var user = new UserModel(data)
  return user.save().then(() => {
    return true
  }).catch(() => {
    return false
  })
}

var findLogin = (data) => {
  console.log('finding')
  return UserModel.findOne(data)
}

var updatePassword = (email, password) => {
  return UserModel.update({ email }, { $set: { password } })
    .then(() => {
    return true
    }).catch(() => {
    return false
  })
}

var usersList = () => {
  return UserModel.find()
}

var updateFreeze = (email, isFreeze) => {
  return UserModel.update({ email }, { $set: { isFreeze } }).then(() => {
    return true
  }).catch(() => {
    return false
  })
}

var deleteUser = (email) => {
  return UserModel.deleteOne({email})
}

var updateUserHead = (username, userHead) => {
  return UserModel.update({ username }, { $set: { userHead } }).then(() => {
    return true
  }).catch(() => {
    return false
  })
}

module.exports = {
  save,
  findLogin,
  updatePassword,
  usersList,
  updateFreeze,
  deleteUser,
  updateUserHead
}