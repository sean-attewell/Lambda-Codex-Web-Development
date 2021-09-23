// The request handler function takes a request coming from the client and produces the response
// It's a callback used in http.createServer()
// const server = http.createServer((req, res) => {}) 
// it takes two objects, one representing the request and one the response


// Traditionally, developers only used the JavaScript language in web browsers. 
// But, in 2009, Node.js was unveiled, and with it, the developer tool kit expanded greatly. 
// Node.js gave developers the chance to use JavaScript to write software that, up to that point, could only be written using C, C++, Java, Python, Ruby, C#, and the like.

// We will use Node to write server code. 
// Specifically, web services that communicate with clients using the JavaScript Object Notation (JSON) format for data interchange.

// Some of the advantages of using Node.js for writing server-side code are:

// Node.js uses the same programming language (JavaScript) and paradigm for both client and server. 
// Using the same language, we minimize context switching and share code between the client and the server.
// JavaScript is single-threaded, which removes the complexity involved in handling multiple threads.
// JavaScript is asynchronous, which allows us to take full advantage of the processor it's running on. 
// Taking full advantage of the processor is crucial because the node process will be running on a single CPU.
// Using JavaScript gives us access to the npm repository. This repository is the largest ecosystem of valuable libraries (most free to use) in npm modules.

// Some of the disadvantages of using Node.js for writing server-side code are:

// By strictly using JavaScript on the server, we cannot use the right tool (a particular language) for the job.
// Because JavaScript is single-threaded, we can't take advantage of servers with multiple cores/processors.
// Because JavaScript is asynchronous, it is harder to learn for developers that have only worked with languages that default to synchronous operations that block the execution thread.
// In the npm repository, there are often too many packages that do the same thing. This excess of packages makes it harder to choose one and, in some cases, may introduce vulnerabilities into our code.

// To write a simple web server with Node.js:

// Use Node's HTTP module to abstract away complex network-related operations.
// Write the single request handler function to handle all requests to the server.

// The request handler is a function that takes the request coming from the client and produces the response. 
// The function takes two arguments: 1) an object representing the request and 2) an object representing the response.

// This process works, but the resulting code is verbose, even for the simplest of servers. 
// Also, note that when using only Node.js to build a server, we use a single request handler function for all requests.


// Using only Node.js, let's write a simple web server that returns a message

// index.js
const http = require("http"); // built in node.js module to handle http traffic

const hostname = "127.0.0.1"; // the local computer where the server is running. localhost is a hostname that refers to the current computer used to access it.
const port = 3000; // a port we'll use to watch for traffic. Hence http://localhost:3000/

const server = http.createServer((req, res) => {
    // creates our server
    res.statusCode = 200; // http status code returned to the client
    res.setHeader("Content-Type", "text/plain"); // inform the client that we'll be returning text
    res.end("Hello World from Node\n"); // end the request and send a response with the specified message
});

server.listen(port, hostname, () => {
    // start watching for connections on the port specified
    console.log(`Server running at http://${hostname}:${port}/`);
});

// I ran this file in node 
// The console where I ran this file shows Server running at http://127.0.0.1:3000/
// the server is now waiting for connections
// then opened http://localhost:3000 in the browser to find "Hello World from Node"

// localhost and the IP address 127.0.0.1 point to the same thing: your local computer


// Express
// A JS framework that sits on top of the NodeJS Web Server (it's like react for your backend!)
// Sits ontop of the raw http module provided by node
// adds Routing, Middleware support and a more eloquent API

// Express middleware are functions that ger the request and response, perform operations on them, 
// and either move into the next middleware or retrn a response back to the client.
// e.g. logging requests or security through authentication 

// run npm init -y
// set up a package.json and lets you insall node packages
// Made a file called server.js first which is included as "main"; "server.js" in the package.json
// yarn add express
// Then you have a node_modules directory
// dependency shows in package.json with version

// yarn start to run the code...

// Express, a light and unopinionated framework that sits on top of Node.js, making it easier to create web applications and services. 
// Sending an HTML file or image is now a one-line task with the sendFile helper method in Express.

// Ultimately, Express is just a Node.js module like any other module.

// What can we do with Express? So many things! For example:

// Build web applications.
// Serve Single Page Applications (SPAs).
// Build RESTful web services that work with JSON.
// Serve static content, like HTML files, images, audio files, PDFs, and more.
// Power real-time applications using technologies like Web Sockets or WebRTC.
// Some of the benefits of using Express are that it is:

// Simple
// Unopinionated
// Extensible
// Light-weight
// Compatible with Connect middleware (Links to an external site.)
// This compatibility means we can tap into an extensive collection of modules written for Connect.
// All packaged into a clean, intuitive, and easy-to-use API.
// Abstracts away common tasks (writing web applications can be lengthy, hence the need for a library like this).
// Some of the drawbacks of Express are:

// It's not a one-stop solution. Because of its simplicity, it does very little out of the box—especially when compared to frameworks like Ruby on Rails and Django.
// We are forced to make more decisions due to the flexibility and control it provides

// Main Features of Express

// Middleware
// Middleware functions can get the request and response objects, operate on them, and (when specified) trigger some action. Examples are logging or security.

// Express's middleware stack is an array of functions.

// Middleware can change the request or response, but it doesn't have to.

// Routing
// Routing is a way to select which request handler function is executed. 
// It does so based on the URL visited and the HTTP method used. 
// Thus, routing provides a way to break an application into smaller parts.

// Routers for Application Modularity
// We can break up applications into routers. 
// For example, we could have a router to serve our SPA and another router for our API. 
// Each router can have its middleware and routing. 
// This combination provides improved functionality.

// Convenience Helpers
// Express has many helpers that provide out-of-the-box functionality to make writing web applications and API servers easier.

// A lot of those helpers are extension methods added to the request and response objects.

// Examples from the Api Reference include: response.redirect(), response.status(), response.send(), and request.ip.

// Views
// Views provide a way to dynamically render HTML on the server and even generate it using other languages.

// Let's write our first server using Express:

// Create a new file called server.js to host our server code.
// Type npm init -y to generate a package.json.
// Install the express npm module using: npm install express.
// Inside server.js add the following code:

const express = require('express'); // import the express package

const server = express(); // creates the server

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
  res.send('Hello from Express');
});

// watch for connections on port 5000
server.listen(5000, () =>
  console.log('Server running on http://localhost:5000')
);

// Run the server by typing: node server.js and visit http://localhost:5000 in the browser.


// Application Programming Interface
// server software that publishes a set of endpoints that clients can use to manage resources 

// yarn install to install all package.json dependencies 

// nodemon is an npm package that watches JS files and restarts the server when there are any changes

// server.get('/', (req, res) => {})
// call back is only run if it's a get request and the url is '/' (the root of our site)

// yarn start or npm start to run it