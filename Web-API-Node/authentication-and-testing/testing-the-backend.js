// The tests we write for endpoints are called integration tests because they test how different parts of the system work together. 
// This is different from the unit tests we use to verify the correctness of one part of the system in isolation.

// We'll use a npm module called supertest that makes it easier to write tests for Node.js HTTP servers. 
// We can use supertest to load an instance of our server, send requests to the different endpoints, and make assertions about the responses.

// We could use supertest to verify that making a POST request to a particular endpoint returns a 201 HTTP status code after successfully creating a resource
// or, that it returns a 500 code if the server ran into an error while processing the request.
//  Writing such a test may look like this:

// Save a reference to the server.
// Use supertest to make a POST request passing correct data inside the body.
// Check that the server responds with status code 201.
// Writing such a test verifies that all middleware, including the route handler is working as intended.


// Please follow along as we configure our testing environment and write a simple endpoint and its corresponding tests.

// Create a new folder and cd into it.

// Type git init to initialize a git repository to help jest detect changes.

// Initialize it with a package.json by running npm init -y in our terminal.

// Use npm to add express as a regular dependency and jest and supertest as development dependencies.
// for the dev dependencies:
// npm i jest --save-dev

// Add a test script inside package.json that runs our tests: "test": "jest --watch --verbose".

// Configure jest to run in node mode since we'll be running in Node.js.

// inside package.json add a property called jest and configure it like this:
//   "jest": {
//     "testEnvironment": "node"
//   }


// We have all we need to start working on our API. Begin by adding a file that holds tests for our server, call it server.spec.js and add the following code.

/*
- when making a GET request to the `/` endpoint
  the API should respond with status code 200
  and the following JSON object: `{ api: 'running' }`.
*/
const request = require('supertest'); // calling it "request" is a common practice

const server = require('./server.js'); // this is our first red, file doesn't exist yet

describe('server.js', () => {
  // http calls made with supertest return promises, we can use async/await if desired
  describe('index route', () => {
    it('should return an OK status code from the index route', async () => {
      const expectedStatusCode = 200;

      // do a get request to our api (server.js) and inspect the response
      const response = await request(server).get('/');

      expect(response.status).toEqual(expectedStatusCode);

      // same test using promise .then() instead of async/await
      // let response;
      // return request(server).get('/').then(res => {
      //   response = res;

      //   expect(response.status).toEqual(expectedStatusCode);
      // })
    });

    it('should return a JSON object from the index route', async () => {
      const expectedBody = { api: 'running' };

      const response = await request(server).get('/');

      expect(response.body).toEqual(expectedBody);
    });

    it('should return a JSON object from the index route', async () => {
      const response = await request(server).get('/');

      expect(response.type).toEqual('application/json');
    });
  });
});


// In this code, we consider three questions commonly tested for our endpoints:

// Does it return the correct status code for the input provided?
// Does it return the data in the expected format?
// Does the data returned, if any, have the right content?
// We are listing them all at once, but you will write one test case at a time and complete any required refactoring before writing the next test.

// When testing your endpoints, start with those three tests and then move on to write tests that are unique for the system you're building. The payroll endpoints for an accounting system, for example, require different tests than those for an accounts payable module. There is no one size fit's all when it comes to testing. Each system will have its own set of requirements that all require verification.

// Create the server.js file and add the following code to make the tests pass:

const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

module.exports = server;

// Notice we are not starting the server with server.listen(port), This is a common pattern. 
// We separate the server implementation from the code that runs the server. 
// If we start listening for requests in this file, then every time a test runs, it will start a new instance of the API using the specified port and run into an "address (meaning the port number) in use" error. 
// Using this technique, we avoid those types of errors and decouple two different concerns: 1) building a server and 2) using a server to listen for requests.

