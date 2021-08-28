const { MongoClient } = require("mongodb");
// Connection URI
const url =
  "mongodb://admin:admin888@localhost:27017";
const dbName = 'stut';
// Create a new MongoClient

async function connect(callback) {
  try {
    var client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    // Connect the client to the server
    await client.connect(function () {
      const db = client.db(dbName);
      callback && callback(db);
    });
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
      
  } finally {
    // Ensures that the client will close when you finish/error
    console.log('---closed---');
    await client.close();
  }
}

// connect(async function (db) {
//     const res = await db.collection('tests').find().toArray();
//     console.log(1);
//     console.log(res);
// });

module.exports = {
  connect
}