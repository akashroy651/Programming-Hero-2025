const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion, Admin, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

// middleWare
app.use(cors())
app.use(express.json())

// database ar details

// simpleDBUser
// Ns467LZSn8jjUYPb


// const uri = "mongodb+srv://simpleDBUser:<db_password>@cluster0.d3mrlwo.mongodb.net/?appName=Cluster0";
const uri = "mongodb+srv://simpleDBUser:Ns467LZSn8jjUYPb@cluster0.d3mrlwo.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


app.get('/', (req, res) => {
    res.send('simple Crud server is running')
})


async function run() {
    try {
        await client.connect();
    //  ata mongodb ar doc deke kora
        const userDB = client.db('usersDB');
        const usersCollection = userDB.collection('users')

        app.get('/users', async (req, res) => {
            // mongodb doc -- access data from a cursor ai khan theke niya
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);

        })


        // deleter jonno 
        app.get('/users/:id', async (req, res) =>{
            const id = req.params.id;
            console.log('need user with id', id)
            const query = {_id: new ObjectId(id)}
            const result = await usersCollection.findOne(query)
            res.send(result)
        })



        // add database related apis here
        app.post('/users', async (req, res) => {
            // console.log('hitting the users post api')
            const newUser = req.body;
            console.log('user info', newUser)

            // uporer je mongodb doc deke lika tar r akta part

            const result = await usersCollection.insertOne(newUser)
            res.send(result)
        })


        app.delete('/users/:id',  async (req, res) => {
            console.log(req.params.id)
            // console.log('delete a user from database')
            const id = req.params.id
            // mongodb deke kora nut doc ar sate temon mill nai
            const query = {_id: new ObjectId(id)}
            const result = await usersCollection.deleteOne(query);
            res.send(result)
        })



        await client.db('admin').command({ping: 1});
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {
        // amra close cai na tai likbo na tao dekar jonno like raklam 
        //   await client.close()
    }
}
run().catch(console.dir)


app.listen(port, () => {
    console.log(`simple  crud server is running on port ${port}`);

})


// 54.8 bedhe gici