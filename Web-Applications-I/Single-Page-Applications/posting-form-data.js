// When our client applications need to work with data from a server and database, we transmit that data back-and-forth using HTTP. 
// This is a protocol that allows communication between web browsers and web servers.

// You've previously learned how to use a GET request, but we're going to take it a step further today by submitting data to a web server. 
// Within the HTTP protocol, a POST request is a HTTP Request Method. To be precise, it is the method that allows us to "post" (or create) information on a web server. 
// When a user makes a POST request, they are adding data to the server's database.

// We'll look at some examples of how to make a POST request by extending the functionality of the form that we built above.

// To make our POST request to our database, we're going to bring in axios, a promise-based library that makes it easy for us to transmit data to-and-from our web server.

// nmp install axios
// import axios from 'axios'


// First, here's what an axios call looks like for POST request:
const sentData = { data: "Hello World!" };

axios
  .post("https://yourdatabaseurlgoeshere.com", sentData)
  .then(res => {
    console.log(res.data); // Data was created successfully and logs to console
  })
  .catch(err => {
    console.log(err); // There was an error creating the data and logs to console
  });

// The promise created by axios will then resolve into a successful response or reject with an error. 
// We're using console.log()s here, but you will typically write logic inside of .then() and .catch() that may include:
// Setting data into state in your component
// Alerting the user to an error
// Use the new data to create side effects in your component(s) that modify the interface for your user in some way

// instance, a POST request, such as the one above, might return a response (or res) like the following:

// {
//   error: false,
//   data: { data: "Hello World!" },
//   message: "Your data was successfully created."
// }

// This is just a rough example, and every server works differently. 
// You will need to initially console.log() the server's response to find out what kind of data you're receiving back in your response. 
// This is super important - always console log the server's response!


// Another example:
// NOTE: For all of our examples together we are going to make use of the reqres API. 
// This API allows us to make real POST requests to a real server and get real responses. 
// The post to https://reqres.in/api/users accomplishes that.




  // new state to set our post request too. So we can console.log and see it.
  const [post, setPost] = useState([]);


  // this handles what happens when we submit the form. We want to prevent the default
  //form submission from the browser and control what happens when we submit.
  const formSubmit = e => {
    e.preventDefault();
    console.log("submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setPost(res.data); // get just the form data from the REST api
        console.log("success", res);
      })
      .catch(err => console.log(err.response));
  };

  /* displaying our post request data */
  <pre>{JSON.stringify(post, null, 2)}</pre>

  // In this example, our axios call to https://reqres.in/api/users now runs whenever we submit the form and run the handleSubmit function.
  // Our form now takes in user data and, when the user clicks the "submit" button, it will POST the user's data to the webserver.

