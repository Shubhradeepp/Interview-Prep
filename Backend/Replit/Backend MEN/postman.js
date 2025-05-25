/*
GET => http://localhost:2000/persons

npm i mongoose
Driver -> Mongoose is a popular JavaScript Object Data Modeling (ODM) library for Node.js that simplifies interacting with MongoDB databases


db.js
// Define MongoDB connection URL
const mongoDB = 'mongodb://localhost:27017/test';

//Set-up MongoDB Connection
 mongoose.connect(mongoURL,
 {
 useNewUrlParser: true, useUnifiedTopology: true}
 )

//Object Creation to setup dridge b/w Node and MongoDB
 const db=mongoose.connection

 add event listner to db connection
 db.on('error', console.error.bind(console, 'MongoDB connection error:

 //Export
module.exports=db;

*/