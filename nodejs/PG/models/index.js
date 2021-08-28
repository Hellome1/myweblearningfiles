const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://admin:admin888@localhost:port/stut', { useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
    if (err) {
        console.log('错误');
        throw err;
    }
    console.log('连接成功');
})

const model = mongoose.model('stu', new Schema({
    username: { type: String, default: 'username' },
    password: { type: String },
    recheck: { type: String }
}))

const createModel = (postData) => {
    if (postData.password != postData.recheck) {
        return false;
    }
    var obj = new model(postData);
    return obj.save()
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log('插入失败' + err);
            return false;
    })
}

const listModel = (skip, limit) => {
    return model.find().skip(skip).limit(limit)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log('查询失败' + err);
            return {};
    })
}

module.exports = {
    createModel,
    listModel
}