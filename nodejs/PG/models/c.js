const connect = require('./t').connect;

connect(async function (db) {
    const res = await db.collection('tests').find().toArray();
    console.log(1);
    console.log(res);
});