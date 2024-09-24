Representational State Transfer (REST)

Architectural style of a API

Rules=>

//1) Client-Server Architecture: 

Clear separation of concerns between the client and server. Should'n be depend on each other.

The client handles the user interface and user experience (client side rendering)
 while the server manages data and business logic (Server Side Rendering (SSR) Should'n be Happen . => SSR is very Fast

In case the server send a response in HTML it would difficult to render in diffrent client like (Aleza, mobile app) so we always shoud avoid SSR and send a raw format (JSON data) as response.API

//2) Use HTTP Methods => Use GET, PUT,POST, DELETE,PATCH accordingly


Advantages of Using REST APIs:

Standardization: Super Easy to consume, Shape of the request and response,  for who who use the api how to request it.
Flexibility: They support various data formats (JSON, XML, etc.) and HTTP methods (GET, POST, PUT, DELETE).
Platform independence: REST APIs can be accessed from different platforms and programming languages.
Decoupling: Clients and servers are loosely coupled, allowing for independent development and maintenance.

// Versatility: REST APIs can be used for various use cases, from web applications to mobile apps and IoT devices.
// Scalability: RESTful APIs are designed to be scalable, handling increasing workloads efficiently.
// Easy to understand: The use of HTTP methods and URIs makes REST APIs intuitive to understand and use.

Content negotiation => Client  to specify which shape of resource the want.
 is a mechanism used in HTTP that allows a client (like a browser or app) and a server to determine the best way to communicate by agreeing on the most appropriate format or language for the response.


 Client Request Headers: The client sends headers indicating what type of content it can accept or prefers. 

Common headers include:
Accept: Specifies the media types (e.g., application/json, application/xml, text/html) the client can handle.
Accept-Language: Indicates the preferred language (e.g., en-US, fr-CA) the client prefers for the content.
Accept-Encoding: Specifies the compression algorithms (e.g., gzip, deflate) the client supports.


//Data model
SQL uses a relational model, where data is organized into tables with defined relationships (Tabular form).
MongoDB uses a document-based model, where data is stored in JSON-like documents with dynamic schemas. 

//Use cases
SQL is used for storing structured data and performing complex queries, 
MongoDB is used for storing large volumes of unstructured data and real-time analytics. 
 
//Programming languages
SQL Server is only compatible with C, C++, and .Net languages. 
MongoDB is more flexible than SQL Server, as it can be used with a variety of programming languages, including JavaScript, Python, Java, PHP, C++, C, Ruby, and Perl. 

USE CASE: =>

  SQL=>  Banking systems where money transfers between accounts must be 100% reliable, or e-commerce systems where orders and payments are tightly integrated.

  No SQL=> Big Data and High-Speed Data Ingestion, real-time analytics, social media, IoT


  For an e-commerce application with many categories and big data (including a large number of users, products, and transactions), a NoSQL database like MongoDB would be more suitable  

