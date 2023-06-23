const { MongoClient } = require("mongodb");
const nodemailer = require("nodemailer");
require("dotenv").config();

const URL = process.env.MONGODB_URL;
const client = new MongoClient(URL);
const db = client.db("Users");
const col = db.collection("UsersInfo");
const usersArray=[]


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'nickolas.adams53@ethereal.email',
      pass: '16uvAv39rqZyGAx7nm'

  }
});


const html =`<a href="https://beb2-2405-201-802b-6809-bd87-9a81-f12a-68d.ngrok-free.app/">Click here to browse to site</a>`;


const getUserEmails=async()=>{

  
        try {
          await client.connect();
          const cursor = db.collection("UsersInfo").find({});
          const usersArray = await cursor.toArray();
          const emails = usersArray.map(user => user.email);
          console.log(emails);
          return emails;
        } catch (error) {
          console.log(error);
          throw error;
        } finally {
          await client.close();
        }
      };
      








async function main() {



    try {
        const userEmails = await getUserEmails();
        console.log(userEmails);
        const info = await transporter.sendMail({
            from: '"PageWise" <luis47@ethereal.email>', // sender address
            to:userEmails,// list of receivers
            subject: "Reccomendation For Your interest", // Subject line
            text: "Explore a vast library of articles tailored to your interests. Empower your learning journey and stay up-to-date with the latest breakthroughs", // plain text body
            html: html, // html body
          })
          console.log("Message sent: %s", info.messageId);
       
      } catch (error) {
        console.log(error);
      }
   // Print the array containing all
   
}



main().catch(console.error);
