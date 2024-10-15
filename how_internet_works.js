HTTPS (Hypertext Transfer Protocol Secure)
• HTTPS is a secure version of HTTP that
uses encryption to protect data during
transmission.
• It operates over port 443.
• HTTPS encrypts data using SSL (Secure
Sockets Layer) or TLS (Transport Layer
Security) protocols


How SSL Certificates Work?


The client encrypts data with a key that the server cannot read without the same key.

The client generates a key to encrypt the data before sending it to the server.

The encrypted data cannot be read by the server because it does not possess the client's key.

Transmitting the key directly poses a risk of interception by hackers.

A symmetric key system is needed, where both client and server have the same key, but the hacker does not.


// Asym Keys
// Public Key =>Enc
// Private  =>Dec


The client generates a symmetric key and encrypts it using the server's public key for secure communication.

The server shares its public key with the client, which can also be intercepted by a hacker.

The client creates its own symmetric key and encrypts it using the server's public key.

The encrypted key is sent to the server, which can only decrypt it using its private key.

Both the client and server end up with the same symmetric key for secure data encryption.




// A man-in-the-middle(MITM) attack

A hacker can intercept and manipulate public keys during communication.
"""
The server provides its public key to the client, but a hacker can duplicate this key.

The hacker can create a proxy layer, intercepting communication between the client and server.

The client unknowingly encrypts data with the hacker's public key, allowing the hacker to decrypt it.

This results in the hacker being able to sniff and forward the client's information to the server.




Let's Encrypt creates an SSL certificate by using public and private keys.
"""
The certificate includes the domain name and the server's public key.

Let's Encrypt signs the certificate, creating a unique signature using the server's public key and its own public key.  
//SIGNATURE = SERVER PVB KEY +LETS ENC PVB KEY(Authority)
The signed certificate is then returned to the server, completing the SSL certificate creation process



The SSL certificate process involves verifying public keys and encrypting communication.

The client uses the server's public key to verify the signature, ensuring it's not from a hacker.  =>
    server sends the public key (SERVER PVB KEY) and ssl certificate to the client, then the client ask the authority(LETS ENC PVB KEY(Authority) to sends its public key => Then client will validate the SIGNATURE  
   //SIGNATURE = SERVER PVB KEY +LETS ENC PVB KEY(Authority)

If the public key is valid, the client encrypts a key using SERVER  public key to establish secure communication.

The server can then decrypt this key, allowing both parties to encrypt and decrypt their data securely.

The certificate contains details like the issuer, version, and signatures, confirming the connection's security.


https://www.youtube.com/watch?v=0yw-z6f7Mb4

https://:

This is the protocol part of the URL. It stands for HyperText Transfer Protocol Secure and is used to securely transfer data between the browser and the website.

The "S" indicates that the connection is secured by SSL/TLS encryption.

www.youtube.com:

This is the domain name that identifies the website.
youtube.com is the domain, and www is a subdomain.
This is the subdomain. It stands for "World Wide Web" and historically was used to indicate that the website is accessible over the web.
It directs the request to the YouTube platform.


A domain is essentially the human-readable address of a website or service on the internet. It’s part of the URL that allows users to access websites without needing to remember the server’s IP address (which is a series of numbers). For example, google.com or example.org are domain names.

Purpose: A domain provides an easy-to-remember identifier for websites, email servers, and other services. For instance, instead of typing an IP address like 172.217.0.46, you can type google.com in your browser.

 DNS (Domain Name System)
The Domain Name System (DNS) is the system or protocol that translates domain names into IP addresses, which are the actual addresses of servers on the internet. It’s essentially the phonebook of the internet, matching domain names to their corresponding IP addresses so that users can access websites using easy-to-remember names.

How DNS Works: When you type a domain name (like google.com) into a web browser:

DNS Query: Your browser sends a request to the DNS system to resolve (or look up) the IP address associated with the domain.

DNS Servers: The request goes through several DNS servers to find the correct IP address. 

Browser Connects to Server: Once the IP address is retrieved, the browser connects to the server using the IP address and loads the website.

Purpose: DNS makes the internet more user-friendly by allowing users to access websites using domain names rather than remembering numeric IP addresses.



Node js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to execute JavaScript code on the server-side. Traditionally, JavaScript was only used in browsers for client-side scripting, but with Node.js, developers can use JavaScript to build server-side applications, APIs, and other backend services.

Node.js operates on a non-blocking, event-driven architecture. This means that instead of waiting for a task to complete before starting another, Node.js processes tasks asynchronously. When an operation (like reading a file or fetching data from a database) is performed, Node.js moves on to the next task and handles the result (through callbacks, promises, or async/await) once the operation completes.


How it works:

An event is triggered, such as a user clicking a button.

The event is emitted to the event loop, which is a queue of events that need to be processed.

The event loop checks if there are any listeners attached to the event.

If there are listeners, the event loop executes the listeners in the order they were attached.

Each listener is executed with the event as an argument, allowing the listener to access the event data and perform specific actions.



Middleware in software development refers to functions or components that sit between the client request and the server response, allowing developers to modify, process, or handle the request and response objects before they reach their final destination.

Key Characteristics of Middleware:

Access to Request and Response Objects: Middleware functions have access to both the request (req) and response (res) objects, allowing them to:

Inspect or modify the request before it reaches the route handler.
Modify the response before sending it back to the client.
Next Middleware in Line: Middleware functions can call the next() function to pass control to the next middleware in the stack. If next() is not called, the request-response cycle can be halted.

Modular Structure: Middleware functions promote modularity by separating different concerns (like logging, authentication, and error handling) into distinct functions that can be reused across different routes.


//Req Quary
app. get /about" ,
return
(req, res) {
res. From
About
Page"
+ req.query.name);
//locdhost:8000/home?name=shubhradeep&age=23

