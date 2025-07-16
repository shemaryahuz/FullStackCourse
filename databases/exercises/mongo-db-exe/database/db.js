import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DB_CONNECTION);

const dbName = "threat_roprt_system";

async function connect() {
    await client.connect();
    const db = client.db(dbName);
    console.log(`Connected to MongoDB.  Database name: ${dbName}.`);
    return db;
}

const db = await connect();

export default db;