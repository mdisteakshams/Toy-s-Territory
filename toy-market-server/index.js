const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// MiddleWare

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jp0io1a.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();
    // env file
    // collection
    // showing my toys
    // all toys
    // Update
    // delete
    // Vercel

    const addToyCollections = client
      .db("addedToysUser")
      .collection("addedToys");
    app.get("/addToys", async (req, res) => {
      console.log(req.query.email);
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      const result = await addToyCollections.find(query).toArray();
      res.send(result);
    });

    app.post("/addToys", async (req, res) => {
      const added = req.body;
      console.log(added);
      const result = await addToyCollections.insertOne(added);
      res.send(result);
    });

    app.get("/addToys/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await addToyCollections.findOne(query);
      res.send(result);
    });
    app.put("/addToys/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedToys = req.body;
      const Toys = {
        $set: {
          price: updatedToys.price,
          quantity: updatedToys.quantity,
          detail: updatedToys.detail
        },
      }
      const result = await addToyCollections.updateOne(filter, Toys, options);
      res.send(result);
    });

    app.delete("/addToys/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await addToyCollections.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Toy Factory is Running");
});
app.listen(port, () => {
  console.log(`Toy Factory is running on port: ${port}`);
});
