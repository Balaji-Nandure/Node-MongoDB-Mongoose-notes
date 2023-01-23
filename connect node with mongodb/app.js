/** @format */
// u will not use mongoDB driver for connectiong it with database. so u can jump for mongoose

const { MongoClient } = require("mongodb");
// Connection URI
const url = "mongodb://127.0.0.1:27017/fruitsDB";
// Create a new MongoClient
const client = new MongoClient(url);
async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Establish and verify connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
