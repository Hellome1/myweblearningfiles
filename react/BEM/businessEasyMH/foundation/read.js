import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("insertDB");
    const haiku = database.collection("haiku");

    // Query for a movie that has the title 'The Room'
    const query = { title: "Record of a Shriveled Datum" };

    const options = {
      // sort matched documents in descending order by rating
      sort: { "imdb.rating": -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, title: 1, imdb: 1 },
    };

    const res = await haiku.findOne();

    // since this method returns the matched document, not a cursor, print it directly
    console.log(res);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
