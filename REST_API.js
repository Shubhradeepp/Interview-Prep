Representational State Transfer (REST)

Architectural style of a API

// Meaning 

Representational => Format [JSON,xml] 
State => State of Data (Response) 
Transfer => Transfer response between parties

The original state of response or data (json/xml) will tranfer during the api call (carry response/data) to the client, that's mean no SSR,
After that CSR will happen (client render the data in diffrent state like[HTML]), but original state of data in dB remains the same.

// Resource State: The image file (e.g., product_image.jpg) is stored on the server. This file exists independently of any specific client and doesn't change unless an update is made.

// Representation of the Resource: When the client (a mobile app) requests the product image, the server sends the image or a specific version of it (e.g., a smaller thumbnail or different resolution) as a response. This is the representation of the resource for the client.

// Application State: The mobile app then renders the image on its UI. If the user requests a zoomed-in version or a different color variation, the app's state will change based on the new representation it fetches from the server. 
However, the image file on the server remains the same (constant resource state), unless the actual file is modified.

 
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


  // For an e-commerce application with many categories and big data (including a large number of users, products, and transactions), a NoSQL database like MongoDB would be more suitable


 Node.js Express.js server with MongoDB, the data query and manipulation language used for API interactions is
=> MongoDB Query Language (MQL), 

  // Fetch all users with age greater than 25
const usersCollection = db.collection('users');
usersCollection.find({ age: { $gt: 25 } }).toArray((err, result) => {  //Process the result
   });


  //Graph Ql
  GraphQL is a query language for APIs that provides a flexible and efficient way to fetch data from a server;
 
// Why Graph ql

1)Data Fetching	Client-driven, flexible;

2)Over-fetching
In REST APIs, you often have to fetch more data than you actually need. 
For instance, if you want a user's name and email, you might have to fetch the entire user object, including unnecessary fields like address, phone number, and preferences. This can lead to increased network traffic and unnecessary processing on both the client and server sides.

3)Under-fetching
On the other hand, under-fetching occurs when you need to make multiple requests to fetch all the required data. 
For example, if you want a user's name and their posts, you might need to make separate GET requests to fetch the user and then their posts. This can increase the number of network round trips and slow down the application.

Advantages of GraphQL:

  Reduced Network Overhead: GraphQL fetches only the necessary data, reducing network traffic.

  Flexibility: Clients can request different data sets based on their needs.  


Major Changes Summary:
  Schema Definition: Define your data structure using GraphQL schema language.
  Data Fetching: Shift from RESTful endpoints to a single GraphQL endpoint.
  Query Structure: Construct GraphQL queries to request specific data.
  Resolver Implementation: Write resolvers to fetch data from your data sources. 
  //Resolvers are functions that fetch data for the fields in your schema.


  Monolithic Architecture
  Monolithic architecture is a software development approach where all components of an application are tightly coupled and deployed as a single unit. In a monolithic application, the entire system is built and deployable as a single executable file.

  Faster Development: Can be faster to develop smaller applications.

  Shared Codebase: All components share a common codebase.
  Centralized Management: Changes to the application require modifying and redeploying the entire system.
  Scalability Challenges: Difficult to scale independently, as the entire application needs to be scaled.
  Technology Constraints: Limited flexibility in technology choices due to the tightly coupled nature.


  Microservices: A modular architecture where the application is broken down into smaller, independent services that communicate via APIs.
  
Decoupling: Services are loosely coupled, allowing for independent development and deployment.
Modularity: Each microservice is a self-contained unit with its own codebase, database, and deployment process.
Scalability: Microservices can be scaled independently, allowing for efficient resource allocation.
Technology Agnostic: Different microservices can use different technologies and programming languages.
Fault Isolation: Failures in one microservice do not necessarily affect the entire application.


//When to Transition to Microservices

Increased Complexity: Your application has grown too complex for a monolithic architecture, making it hard to maintain or scale.

Independent Scalability: Different parts of your application need to scale independently due to varying loads or user demands.

Frequent Deployments: You require faster and more frequent deployments, enabling teams to work on features or services independently.

Technology Diversity: You want to use different technologies or frameworks for different components based on specific requirements
