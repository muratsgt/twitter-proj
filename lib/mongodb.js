import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI;
const mong_db = process.env.MONGODB_DB;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}


if (!uri) {
  throw new Error('Please add your Mongo URI to environmental variable')
}
// check the MongoDB DB
if (!mong_db) {
  throw new Error('Define the db environmental variable');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  // check the cached
  if (cachedClient && cachedDb) {
    // load from cache
    console.log(`YEEEEEESSSSSSSSS  CAAACHEEDDD`)
    return {
      client: cachedClient,
      db: cachedDb
    }
  }

  // connect to cluster
  const client = new MongoClient(uri, options);
  await client.connect();
  let db = client.db(mong_db);

  // set cache
  cachedClient = client;
  cachedDb = db;

  console.log(`NOT CAAACHEEDDD`)

  return {
    client: cachedClient,
    db: cachedDb
  };
}