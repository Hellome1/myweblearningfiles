const { MongoClient } = require("mongodb");
// Connection URI
const url =
  "mongodb://admin:admin888@localhost:27017";
const dbName = 'stut';
// Create a new MongoClient

function connect(callback) {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        if (err) {
            connsole.log(err);
        } else {
            var db = client.db(dbName);
            callback && callback(db);
            client.close();
        }
    })
}



module.exports = {
    connect
}