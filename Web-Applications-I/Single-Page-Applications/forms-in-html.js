// Every language and framework will handle form data a bit differently, but most of them will use the same basic HTML elements to build a form. 
// Each will have their own responsibilities. H
// ere are the elements we'll talk about right now with a brief definition from MDN:

// <form>
// The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.

// <input>
// The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user.

// <label>
// The HTML <label> element represents a caption for an item in a user interface.

// In summary, the form contains interactive controls (form elements)
// the input is the interactive control used to collect data from the user
// and the label is how we caption the input to provide a better experience for our users.


// the form id stateful. To some extent, the <form> tag will be able to keep track of what its children are doing. 

// A basic text field is what an <input> tag defaults to, but this isn't very semantic, is it?
// Another way to say it is that this code isn't very "self-documenting," 
// meaning other developers looking at our code in the future might have a harder time understanding what it's for. 
// What's even worse is that screen readers might have difficulty parsing what it's for. 
// A trivial effort from us can mean a world of difference for a future developer or for someone using a screen reader.

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default App;
