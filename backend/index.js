const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const URL = process.env.MONGODB_URL;
const client = new MongoClient(URL);

const db = client.db("Users");
const col = db.collection("UsersInfo");

app.post("/create-user", async (req, res) => {
  try {

    await client.connect();
    const user = {
      name: "Dummy user1",
      email: "DunnyUsser1@gmail.com",
      intrests: ["Chemistry", "Statistics"],
    };

    const insertUser = await col.insertOne(user);
    res.status(200).json({ msg: "success", data: user });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});


app.get("/get-all-emails", async (req, res) => {
    const  usersArray=[]


try {

    await client.connect();
   
    const cursor =  await db.collection("UsersInfo").find({});
    
    cursor.toArray()
    .then((docs) => {
      usersArray.push(...docs); // Push all documents into the array
      console.log('All documents have been processed.');
      console.log('Users array:', usersArray); // Print the array containing all user data
      const emails = usersArray.map(user => user.email);
      console.log("Emails array:",emails); // Print the array containing all
      res.status(200).json({ msg: "success",  data: usersArray,emails: emails });
    })
    .catch((err) => {
      console.error('Error occurred while fetching documents:', err);
    });
        
    } catch (error) {
    
    res.status(500).send(error);
    console.log(error);
}})


app.get("/get-all-emails", async (req, res) => {
  const  usersArray=[]


try {

  await client.connect();
 
  const cursor =  await db.collection("UsersInfo").find({});
  
  cursor.toArray()
  .then((docs) => {
    usersArray.push(...docs); // Push all documents into the array
    console.log('All documents have been processed.');
    console.log('Users array:', usersArray); // Print the array containing all user data
    const emails = usersArray.map(user => user.email);
    console.log("Emails array:",emails); // Print the array containing all
    res.status(200).json({ msg: "success",  data: usersArray,emails: emails });
  })
  .catch((err) => {
    console.error('Error occurred while fetching documents:', err);
  });
      
  } catch (error) {
  
  res.status(500).send(error);
  console.log(error);
}})








const start = async () => {
  try {
    await client.connect();
    console.log("Connected correctly to Db");
    app.listen(8080, () => {
      console.log("APP STARTED ON PORT 8080");
    });
  } catch (error) {
    console.log("Error connecting");
  }

  console.log("connected to srver");
};

start()