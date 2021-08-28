const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const db = mongoose.connect('mongodb://127.0.0.1:27017/admin', {
    "user": "admin",
    "pass": "admin888"
}, function (err) {
    if (err) {
        console.log('错误');
        throw err;
    }
    console.log('连接成功');
})

const model = mongoose.model('test', new Schema({
    name: { type: String, default: 'username' },
    age: { type: Number },
    sex: {type: String}
}))

model.findOne({})
    .then(res => {
        console.log(res);
        return res;
    }).catch(err => {
        console.log(err);
        return false;
})