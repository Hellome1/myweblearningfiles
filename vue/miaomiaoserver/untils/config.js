var mongoose = require('mongoose')

var Mongoose = {
  url: 'mongodb://admin:admin888@localhost:port/stut',
  connect() {
    mongoose.connect(this.url, (err) => {
      if (err) {
        console.log('数据库连接失败')
      } else {
        console.log('数据库连接成功')
      }
    })
  }
}

module.exports = {
  Mongoose
}