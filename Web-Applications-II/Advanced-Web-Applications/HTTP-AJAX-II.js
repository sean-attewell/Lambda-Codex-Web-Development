// PUT is the "U" in CRUD, and it stands for UPDATE. We use the PUT method to change a resource's information. 
// PUT takes in a body object like POST and identifies data that needs to be updated somewhere.

axios
  .put(`http://somecoolurl.com/${couldHaveDynamicId}`, updatedData)
      .then(response => {
        // response is the response we get back from the server
        // Whatever resource was changed should be reflected in our client
      })
      .catch(err => {
        // if something goes wrong, we handle any errors here
      });


// https://codesandbox.io/s/k353v1z79r

// We are going to work on updating a quote. To set this up, we built a form for the PUT request. 
// Usually, you would be in charge of populating the form fields with whichever item you are updating, but for this example, we hardcoded a quote into state. // Keep in mind that in apps you build from scratch, populating the form fields may take a bit of work.

// Now, in index.js, there is a putMessage function. Let's call axios.put and pass in the URL. 
// This time the endpoint will be /quote/:id. :id here is a lot like dynamic parameters in React Router. 
// It is a dynamic variable that will be the id of whatever item you are updating. Just hardcode any number in there for this example. Also, add your .then() and .catch() and console.log the resonse and err inside those

// Also, pass in quote as a parameter to putMessage so we have the data we need to send to the server.

// On state we have putSuccessMessage and putError. 
// Let's set our successMessage to state in our .then() and the error message to state in the .catch(). 
// And like before, we'll clear out the opposite state property in each case:


putMessage = quote => {
  axios
    .put("https://lambda-school-test-apis.herokuapp.com/quotes/76", quote)
    .then(response => {
      this.setState({
        putSuccessMessage: response.data.successMessage,
        putError: ""
      });
    })
    .catch(err => {
      this.setState({
        putSuccessMessage: "",
        putError: err.response.data.Error
      });
    });
};

// Pass putMessage, putSuccessMessage and putError down to the PutMovieQuoteForm component. 

// index.js
<PutMovieQuoteForm
  putMessage={this.putMessage}
  putSuccessMessage={this.state.putSuccessMessage}
  putError={this.state.putError}
/>

// Then go to PutMovieQuoteForm.js and invoke this.props.putMessage with the movie quote that is on state.

// PutMovieQuote.js
putMessage = e => {
  e.preventDefault();
  this.props.putMessage(this.state.movieQuote);
};



// The DELETE HTTP request method is the "D" in CRUD. 
// We use this to delete or destroy data that lives away from our webpage. 
// When we call .delete, we're instructing the server to remove some information somewhere. 
// Typically we initiate deletion by sending some identifying piece of information on the URL parameter along with our requested URL string. 
// The URL string will be a dynamic field that we'll need to ensure matches the resource that we want to be destroyed.

// REMEMBER body objects (or data) objects are to be used with PUT, POST and PATCH (we don't need to go into patch here). 
// Don't expect the axios.delete() method to be able to take in a data object

axios
    .delete(`http://somecoolurl.com/${someDynamicId}`)
      .then(response => {
        //  response is the response we get back from the server
        //  usually on a positive response, we either re-set the state in React OR we navigate to the next page etc.
      })
      .catch(err => {
        //  if something goes wrong, we handle any errors here
      });


// https://codesandbox.io/s/n4kx9lqx40

// Deleting is dangerous. Often times delete buttons invoke some kind of confirmation message, 
// usually in a modal, that asks if you are sure you want to delete that thing

// In index.js, there is a deleteMessage function. 
// Let's call axios.delete and pass in the URL. 
// The endpoint will be /quote/:id. 
// Like the put function, :id here is a dynamic variable that will be the id of whatever item you are deleting. 
// Just hardcode any number in there for this example. 
// Also, add your .then() and .catch() 
// On state we have deleteSuccessMessage and deleteError. Let's set our successMessage to state in our .then() and the error message to state in the .catch(). 
// Just like before, we'll clear out the opposite state property in each case:

deleteMessage = () => {
  axios
    .delete("https://lambda-school-test-apis.herokuapp.com/quotes/42")
    .then(response => {
      this.setState({
        deleteSuccessMessage: response.data.successMessage,
        deleteError: ""
      });
    })
    .catch(err => {
      this.setState({
        deleteSuccessMessage: "",
        deleteError: err.response.data.Error
      });
    });
};

// Pass deleteMessage, deleteSuccessMessage and deleteError down to the DeleteMovieQuoteForm component. 

// index.js
<DeleteMovieQuoteForm
  deleteMessage={this.deleteMessage}
  deleteSuccessMessage={this.state.deleteSuccessMessage}
  deleteError={this.state.deleteError}
/>

// DeleteMovieQuote.js
deleteMessage = e => {
  e.preventDefault();
  this.props.deleteMessage(this.state.movieQuote);
};

