const express = require("express");
const cors = require("cors");
// .env ar jonno
require('dotenv').config()
// console.log(process.env)
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

// vul token jeno access na tar jonno

const admin = require("firebase-admin");

const serviceAccount = require("./smart-deals-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});






// middleware
app.use(cors());
app.use(express.json());

// atao middleware but jwt middleware
const logger = (req,res,next) =>{
    console.log('logging information');
    next()
}
//  end jwt middleware

//  firebase middleware token
const verifyFireBaseToken = async (req, res, next) => {
    console.log('in the verify middleware', req.headers.authorization)
    if(!req.headers.authorization){
        // do nor allow to go
        return res.status(401).send({ message: 'unauthorized access'})
    }
    const token = req.headers.authorization.split(' ')[1];
    if(!token) {
        return res.status(401).send({ message: 'unauthorized a access'})
    }
        // verify token
    try{
     const userinfo = await admin.auth().verifyIdToken(token);
     req.token_email=userinfo.email;
     console.log('after token validation', userinfo)
        next();
    }
    catch{
      console.log("invallid token")
        return res.status(401).send({ message: 'unauthorized a access'})

    }
        
    // verify id token
  
}


// smartdbUser
// owCWvbeMh1L5bMZL

// const uri ="mongodb+srv://smartdbUser:owCWvbeMh1L5bMZL@cluster0.d3mrlwo.mongodb.net/?appName=Cluster0";
const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d3mrlwo.mongodb.net/?appName=Cluster0`;
//  mongodb client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const db = client.db("smart_db");
    const productsCollection = db.collection("products");
    const bidsCollection = db.collection("bids");
    const usersCollection = db.collection("users")

//  users api
    app.post('/users', async (req, res) => {
        const newUser = req.body;

        const email = req.body.email
        const query = {email:email}
        const existingUser = await usersCollection.findOne(query);
        if(existingUser){
            res.send({ message: 'user already exits. do not need to insert again'})
        }
        else{
               const result = await usersCollection.insertOne(newUser)
                     res.send(result)
        }
        // const result = await usersCollection.insertOne(newUser)
        // res.send(result)

    })

    // product api
    // all find ar jonno
    app.get("/products/", async (req, res) => {
      // const cursor = productsCollection.find().sort({price_min: -1}).limit(2);

      console.log(req.query);
      const email = req.query.email;
      const query = {};
      if (email) {
        query.email = email;
      }

      const cursor = productsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });


    app.get('/latest-products', async (req, res) => {
        const cursor = productsCollection.find().sort({created_at: -1}).limit(6);
        const result = await cursor.toArray();
        res.send(result)
    })


    //  single find ar jonno
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;    
      const query = { _id: id };
      const result = await productsCollection.findOne(query);
      res.send(result);
    });


   

    app.post("/products", async (req, res) => {
      const newProduct = req.body;
      const result = await productsCollection.insertOne(newProduct);
      res.send(result);
    });

    //  edit korar jonno
    app.patch("/products/:id", async (req, res) => {
      const id = req.params.id;
      const updateProduct = req.body;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: {
          name: updateProduct.name,
          price: updateProduct.price,
        },
      };
      const result = await productsCollection.updateOne(query, update);
      res.send(result);
    });

    app.delete("/products/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productsCollection.deleteOne(query);
      res.send(result);
    });

    // bids related api
    app.get("/bids", logger, verifyFireBaseToken, async (req, res) => {
        //  jwt  start
        // console.log('header', req.headers)
        // end jwt
        const email =req.query.email;
        const query = {};
        if(email){
          if(email !== req.token_email){
            return res.status(403).send({message: 'forbidden access'})
          }
            query.buyer_email = email;
        }
      const cursor = bidsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });


     app.get('/products/bids/:productId', verifyFireBaseToken, async (req, res) => {
       const productId = req.params.productId;
        const query = {product: productId}
        const cursor = bidsCollection.find(query).sort({bid_price: -1})
        const result = await cursor.toArray();
        res.send(result)
    
    }) 


    // app.get('/bids', async (req, res) => {

    //     const query = {};
    //     if(query.email){
    //         query.buyer_email= email;
    //     }

    //     const cursor =bidsCollection.find(query);
    //     const result = await cursor.toArray();
    //     res.send(result);
    // })



    app.post('/bids', async (req, res) => {
        const newBid = req.body;
        const result = await bidsCollection.insertOne(newBid);
        res.send(result);
    } )

    // my theke  bids delete korar  jonno
    app.delete('/bids/:id', async (req, res) => {
        const id = req.params.id;
        const query ={ _id: new ObjectId(id)}
        const result = await bidsCollection.deleteOne(query)
        res.send(result);
    })


    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Smart server is running");
});

app.listen(port, () => {
  console.log(`Smart server is running on port: ${port}`);
});
