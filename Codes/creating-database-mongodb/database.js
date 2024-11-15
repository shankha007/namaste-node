const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://namastedev:Shankha%4098@cluster0.qpxiweq.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  //   const data = {
  //     firstname: "John",
  //     lastname: "Doe",
  //     city: "Mumbai",
  //     phoneNumber: "8728122198",
  //   };

  // Insert a data / many data
  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Inserted documents =>", insertResult);

  // Find All Documents
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  const countResult = await collection.countDocuments({});
  console.log("Count of documents in the User Collection =>", countResult);

  const result = await collection.find({ firstname: "John" }).toArray();
  console.log("Result is =>", result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// NOTES: Check OneNote for notes
