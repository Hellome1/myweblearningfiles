const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://admin:admin888@localhost:port/stut', { useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
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

var obj = new model({
    name: 'he',
    age: 11,
    sex: 'nan'
})

obj.save().then(res => {
    console.log(res);
    return res;
}).catch(err => {
    console.log('失败' + err);
    return false;
})