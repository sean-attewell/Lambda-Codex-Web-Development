// The request handler function takes a request comin from the client and produces the response
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
