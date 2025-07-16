import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DB_CONNECTION);

const dbName = "sample_mflix";
let db;

export async function connect() {
    if (!db){
        await client.connect();
        db = client.db(dbName);
        console.log(`Connected to MongoDB.  Database: ${dbName}`);
    }
    return db;
}

connect();