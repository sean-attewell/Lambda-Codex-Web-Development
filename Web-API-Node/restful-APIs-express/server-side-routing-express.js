// Routing is one of Express' main features
// Maps requests from clients to the appropriate request handler function
// Based off the URL and type of HTTP method used

// this request handler executes when making a GET request to /about
server.get('/about', (req, res) => {
  res.status(200).send('<h1>About Us</h1>');
});

// this request handler executes when making a GET request to /contact
server.get('/contact', (req, res) => {
  res.status(200).send('<h1>Contact Form</h1>');
});

// this request handler executes when making a POST request to /hobbits
server.post('/hobbits', (req, res) => {
  res.status(201).json({ url: '/hobbits', operation: 'POST' });
});

// this request handler executes when making a PUT request to /hobbits
server.put('/hobbits', (req, res) => {
  res.status(200).json({ url: '/hobbits', operation: 'PUT' });
});

// this request handler executes when making a DELETE request to /hobbits
server.delete('/hobbits', (req, res) => {
  res.status(204);
});

// We are returning HTTP Status Code 204 (No Content). 
// However, suppose you return any data to the client, perhaps the removed resource, on successful deletes. 
// In that case, you'd change that to be 200 instead.


// Reading data from query strings, the request body and a route's parameters

// A request body is on the 'req' object
// The query string represented by key value pairs in the URL
// Dynamic routing (or route paramaters - these are at the end of the url after a slash)

// route paramaters
// Used to sent some bits of information about the resource we're requesting
// e.g. hobbits/4 if the users id was 4
// Route Params are a way to dynaically configure out endpoints in order to send up different id's for different users
// :id will be dynamically set by whatever comes after hobbits
// if you console.log(req.params) you'll se something like { id: 'frodo' }

server.delete('/hobbits/:id', (req, res) => {
  const id = req.params.id;
  // or we could destructure it like so: const { id } = req.params;
  res.status(200).json({
    url: `/hobbits/${id}`,
    operation: `DELETE for hobbit with id ${id}`,
  });
});

// This route handler will execute every DELETE for a URL that begins with /hobbits/ followed by any value. 
// So, DELETE requests to /hobbits/123 and /hobbits/frodo will both trigger this request handler. 
// The value passed after /hobbits/ will end up as the id property on req.params.

// The value for a route parameter will always be string, even if the value passed is numeric. 
// When hitting /hobbits/123 in our example, the type of req.params.id will be string.

// Express routing has support for multiple route parameters. 
// For example, defining a route URL that reads /hobbits/:id/friends/:friendId, will add properties for id and friendId to req.params.


// Query Strings
// HTTP protocol is stateless by design
// We send information directly on the the URL we're requesting structured as key value pairs
// `?key=value`
// pairs are seperated by an ampersand &
// www.myapi.com/user?name=luis
// the key would be name and the value would be luis {name: 'luis'}
// req.query property is an object, and it has a .sortby to use
// if it's localhost:5000/hobbits?sortby=name
// console.log(req.query) will look like {sortby: 'name'}

// We'll provide a way for clients to hit our /hobbits and pass the field they want to use to sort the responses, and our API will sort the data by that field in ascending order.

server.get('/hobbits', (req, res) => {
  // query string parameters get added to req.query
  const sortField = req.query.sortby || 'id';
  const hobbits = [
    {
      id: 1,
      name: 'Samwise Gamgee',
    },
    {
      id: 2,
      name: 'Frodo Baggins',
    },
  ];

  // apply the sorting
  const response = hobbits.sort(
    (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
  );

  res.status(200).json(response);
});

// Visit localhost:8000/hobbits?sortby=name, and the list should be sorted by name. 
// Visit localhost:8000/hobbits?sortby=id, and the list should now be sorted by id. 
// If no sortby parameter is provided, it should default to sorting by id.

// To read values from the query string, we use the req.query object added by Express. 
// There will be a key and a value in the req.query object for each key/value pair found in the query string.

// The parameter's value will be of type array if more than one value is passed for the same key and string when only one value is passed. 
// For example, in the query string ?id=123, req.query.id will be a string, but for ?id=123&id=234, it will be an array.

// Another gotcha is that the names of query string parameters are case sensitive, sortby and sortBy are two different parameters.


// Request body
// Objects that Clients can send with relevant information for the API they're requesting
// Pertinent for POST and PUT requests
// Whenever you create info like 'username' and 'password' you send that info on the body of the request
// console.log(req.body) looks like an object

// add this code right after const server = express();
server.use(express.json());

let hobbits = [
  {
    id: 1,
    name: 'Bilbo Baggins',
    age: 111,
  },
  {
    id: 2,
    name: 'Frodo Baggins',
    age: 33,
  },
];
let nextId = 3;

// and modify the post endpoint like so:
server.post('/hobbits', (req, res) => {
  const hobbit = req.body;
  hobbit.id = nextId++;

  hobbits.push(hobbit);

  res.status(201).json(hobbits);
});

// Then we define a variable for manual id generation. 
// When using a database, this is not necessary as the database management system generates ids automatically.

// To read data from the request body, we need to do two things:

// Add the line: server.use(express.json()); after the express application has been created.
// Read the data from the body property that Express adds to the request object. 
// Express takes all the client's information from the body and makes it available as a nice JavaScript object.

// In a production application, you would validate before attempting to save it to the database.

// Let's test it using Postman:

// Change the method to POST.
// Select the Body tab underneath the address bar.
// Click on the raw radio button.
// From the dropdown menu to the right of the binary radio button, select `JSON (application/json).

// Add the following JSON object as the body:

// {
//   "name": "Samwise Gamgee",
//   "age": 30
// }

// Click on Send, and the API should return the list of hobbits, including Sam!


// A PUT example

// We start by adding support for a route parameter the clients can use to specify the id of the hobbit they intend to update:

server.put('/hobbits/:id', (req, res) => {
  res.status(200).json({ url: '/hobbits', operation: 'PUT' });
});

// Next, we read the hobbit information from the request body using req.body and use it to update the existing hobbit.

server.put('/hobbits/:id', (req, res) => {
  const hobbit = hobbits.find(h => h.id == req.params.id);

  if (!hobbit) {
    res.status(404).json({ message: 'Hobbit does not exist' });
  } else {
    // modify the existing hobbit
    Object.assign(hobbit, req.body);

    res.status(200).json(hobbit);
  }
});

// Concentrate on the code related to reading the id from the req.params object and reading the hobbit information from req.body. 
// The rest of the code will change as this is a simple example using an in-memory array. Most production APIs will use a database.

