
const uri = process.env.MONGODB_URI;
const dbname = process.env.DBNAME;

export const collections = {
    PRODUCTS: "products",
    USERS: "users"
}


const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect = (cname) => {
    return client.db(dbname).collection(cname)
}

















// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const dbname = process.env.DBNAME;

// export const collections = {
//   PRODUCTS: "products",
//   USERS: "users",
// };

// let client;
// let clientPromise;

// if (!clientPromise) {
//   client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });
//   clientPromise = client.connect(); // 🔥 MUST
// }

// export const dbConnect = async (cname) => {
//   const connectedClient = await clientPromise;
//   return connectedClient.db(dbname).collection(cname);
// };

// // const usersCollection = await dbConnect(collections.USERS);
// // const users = await usersCollection.find().toArray();
// // console.log("sky-user",users);