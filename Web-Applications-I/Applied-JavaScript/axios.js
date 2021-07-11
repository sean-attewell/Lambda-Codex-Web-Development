// HTTP (Hypertext Transfer Protocol)
// HTTP is a network protocol, a set of rules that govern the way web clients, like a browser, communicate with web servers over the internet.

// We, as developers, need to know what HTTP Methods are and how they are used to perform CRUD (Create, Read, Update, Delete) operations 
// on server resources and what HTTP status codes are and what they are used for.

// HTTP Methods provide a common language or nomenclature that the client can use to let the server know what operation it wants to perform.
// When a client needs to ask a server for information it should do a GET request specifying a URL that points to the desired resource.
// A POST request is used to ask the server to add or create new resources.
// The method used by the client to ask the server to make changes to specific resources is PUT.
// To remove or delete data from the server the client needs to send a DELETE request.

// HTTP Status Codes are used to indicate if a request has been successful or not and why. The server will set the status code for all responses sent to the client.

// You can use the httpie.org website to look at requests to and responses to and from an end point

// Endpoints are a URL we use to interact with an API
// An API is a web service which gives us data over the network (JSON in this case)


// axios
// axios is a Javascript library. It is used to send HTTP requests to servers. 
// It is not necessary to do this, but it makes things much easier. 
// Because all server requests are asynchronous, axios uses Promises.
// Once you get the basic pattern down, axios is incredibly easy to use.

// To read more you can check out the documentation here: https://github.com/axios/axiosn


// Rather than using NPM to install axios, in the example video he uses a CDN (Content Delivery Network)
// This is a link in a script tag in the HTML <head>
// this will essentially download axios and allow us to use it in our own javascript file.
// Put it at the end of <head> but before your program 
// use the defer attribute

// <script defer src="https://unpkg.com/axios/dist/axios.min.js"></script>
// <script defer src="index.js"></script>

// Chrome will download both scripts concurrently
// But then will wait until the DOM is fully constructed and execute the scripts in order
// First axios then our code (which depends on axios, hence axios needing to execute first)

// axios is a global variable that exists because of our script that executed
// axios is an object containing many methods, .get being one of them. 
// It takes a string as its first argument. This string is the url of the resource we are requesting
// axios.get will return a Promise to us.
// axios is nice enough to parse the JSON response and turn it into a real JavaScript object!
// That is accesible inside res.data

axios.get('http://serverlocation.com/data')
    .then( response => {
        // deal with the response data in here
    })
    .catch( err => {
        // deal with the error in here
    })


// Now lets put it inside an event listener callback on a button:

// const URL = 'https://api.thedogapi.com/v1/'

// const grabTheData = event => {
//   axios.get(URL + 1)
//     .then(res => {
//       console.log(res.data)
//       event.target.textContent = res.data.name
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

// theButton.addEventListener('click', grabTheData)



const URL = 'https://api.thedogapi.com/v1/'

const grabTheData = id => event => {
  axios.get(URL + id)
    .then(res => {
      console.log(res.data)
      event.target.textContent = res.data.name
    })
    .catch(err => {
      console.log(err)
    })
}

theButton1.addEventListener('click', grabTheData(1))
theButton2.addEventListener('click', grabTheData(2))
theButton3.addEventListener('click', grabTheData(3))

// grabTheData invoked with the id returns a function that takes an event object
// which is what addEventListener expects as the second object


// async await version 
// (looks more like synchronus code)
// you can use regular try catch to deal with both resolve and reject paths

const grabTheData = id => async event => {
  try {
    const res = await axios.get(URL + id)
    console.log(res.data)
    event.target.textContent = res.data.name
  } catch (e) {
    console.log(e)
  }
}

theButton1.addEventListener('click', grabTheData(1))
theButton2.addEventListener('click', grabTheData(2))
theButton3.addEventListener('click', grabTheData(3))


// Putting everything together we can now build a component function
// request dynamic data from a server
// build components based on that data
// and add those components to the DOM.

// First we will build our component creator function:

function buttonCreator(buttonTitle){
    let newButton = document.createElement('button');
    newButton.textContent = buttonTitle;
    newButton.classList.add('button');
    return newButton;
}

// Don't make assumptions about the data returned from your endpoint
// Always investigate using either chrome network tab (select all under filter), postman, or httpie.org
// In this example the response object will have a key on it called data that key will have a value of an array with a list of strings.

axios.get('http://fakeserver.com/data')
    .then( response => {
        // Remember response is an object, response.data is an array.
        response.data.forEach( item => {
            let button = buttonCreator(item);
            parent.appendChild(button);
        })
    })
    .catch( error => {
        console.log("Error:", err);
    })




