const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri)

async function populate() {
  try {
    const db = client.db("test");
    const collection = await db.createCollection("todo_items");
    await collection.deleteMany({})

    await collection.insertMany([
      { name: "Do the dishes", completed: false },
      { name: "Walk the dog", desc: "At least 15 minutes", completed: false },
      { name: "Take out the trash", completed: true },
    ]);

  } finally {
    await client.close()
  }
}

populate().catch(console.dir)