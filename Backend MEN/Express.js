//npm i express
const express = require("express");
const app = express();
//This line creates an Express application instance.
//express() is a function provided by the imported Express module that creates a new Express application. Assigning the return value (the application instance) to app allows you to interact with the application using its methods and properties.

//Root path:(/) , Endpoint
app.get("/", function (req, res) {
  //GET requests
  //POST
  //PUT
  /*Imagine updating a user's profile.
    
A PUT request would send the entire updated profile object, including name, email, address, etc.

A PATCH request would only send the specific changes, like a new email address or a change in password.*/
  //PATCH
  //DELETE
  res.send("Hello World");
});

app.get("/idli", (req, res) => {
  res.send("Responce World idli");
});

app.get("/curry", (req, res) => {
  var curry = {
    name: "Chicken",
    Quant: "Half",
    gravy: true,
    piece: 3,
  };
  res.send(curry);
});
/* => 
{
  "name": "Chicken",
  "Quant": "Half",
  "gravy": true,
  "piece": 3
}
*/

//app.listen(3000)
//.env file    require('dotenv').config()

//PORT=3000
//Production
const port = process.env.PORT || 5000;
app.listen(port, () => {
  Console.log(`listening on port ${port}`);
});

// run server  node server.js
//localhost:3000
// requests to the specified path root path(/)
//localhost:3000/
//localhost:3000/curry
