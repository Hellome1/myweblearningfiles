/**
 * @description 用来临时测试代码
 */
import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("BEM");
    const myColl = database.collection("menus");
    
    const cursor = myColl.find();
    // print a message if no documents were found
    if ((await myColl.countDocuments()) === 0) {
      console.log("No documents found!");
    }
    for await (const doc of cursor) {
      console.log(doc);
    }
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
