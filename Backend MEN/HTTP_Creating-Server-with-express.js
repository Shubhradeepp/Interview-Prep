const { appendFile } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(" request has been made from browser to server");
  console.log(req.method);
  console.log(req.url);
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello, Pepcoders");
  res.end();
});


//port number, host, callback func
server.listen(3000, "localhost", () => {
  console.log("server is listening on port 3000");
});


///// For express

//   fs module

//   Event loop

Blocking vs non-blocking

Blocking Operation -> Need a Thread to execute => from thread pool---> Return result



// redirects
app.get("/about-us", (req, res) => {
  res.redirect(" /about ");
});

res.status(200).json({message: "Deleted Sucessfully"}) ;



// How do APIs Work?

Users -> Client -> API(The client initiates the requests via the APIs URI  -> API call the server -> Server returns the response to api(RESPONSE) -> Client receives the response


  Imagine a menu card in a restaurant
  
  Lots of options are there, each option will give you a different order
  
  Now, collection of that list = Menu card = API's
  
  And an option in that list = Endpoint
  
  And the waiter only understood whatever things are written on the menu card