// Every language and framework will handle form data a bit differently, but most of them will use the same basic HTML elements to build a form. 
// Each will have their own responsibilities.
// Here are the elements we'll talk about right now with a brief definition from MDN:

// <form>
// The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.

// <input>
// The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user.

// <label>
// The HTML <label> element represents a caption for an item in a user interface.

// In summary, the form contains interactive controls (form elements)
// the input is the interactive control used to collect data from the user
// and the label is how we caption the input to provide a better experience for our users.


// the form is stateful. To some extent, the <form> tag will be able to keep track of what its children are doing. 

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

// In a regular DOM environment, each change to this input would create a "change event" that the DOM API would expose to us, but remember: 
// React operates out of a virtual DOM. When React is deciding what to render to the page, the DOM doesn't even exist yet. 
// That's why the React team created "synthetic events," which effectively simulate DOM events inside the virtual DOM. 
// We don't need to worry about the details of synthetic events at the moment. 
// They're designed to work as much like their native DOM counterparts as possible, and for the vast majority of cases, they do.

// The onChange handler on an input captures the typing event. 
// The event object stores the new value from the input. 
// We get access to the typing event from onChange, because the event holds the value of the input. 
// Because of this, we have access to what our user's input from the event object! 
// This pathway is vital if we want to manage input values in react state, rather than through the DOM.

// Let's take a look at onChange. As we've seen with other event handlers, we will pass in a callback function to onChange. 
// This can be done inline or with a function defined elsewhere (usually in the component). 
// Notice that the event object gets passed into the callback function as a parameter.

// inline
<input onChange={event => console.log(event)} />

// function defined somewhere else
const logEvent = event => {
  console.log(event);
}
// ...
<input onChange={logEvent} />

// If we use the onChange synthetic event listener on our <input> tag, we'll be able to capture its value. Then we'll set that value to a state variable. 
// We can access the value like this - event.target.value.

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <label>
          Favorite Ice Cream:
          <input type="text" onChange={changeHandler} /> 
        </label>
      </form>
    </div>
  );
};

// Now our React state will stay in sync with the input data!

// Above onChange attribute could also be in the form onChange={event => handleChange(event)} 


// onSubmit

// In our case, with a single page application, we definitely don't want our page refreshing. If it did so, it would clear our state and cause all kinds of problems.
// In the early days of the internet, when the spec for this stuff was written, that behavior was actually useful. Not anymore.

// We need to block the default behavior of the onSubmit listener. 
// To do that, we'll need to grab that event object again. 
// We'll also need to peel the submit handler off our <button> and put it on to the <form> itself. 
// Remember when I told you that the <form> tag keeps track of what its children do? This is one example. 
// If there's only one <button> inside a <form>, the form will know to fire the function attached to its onSubmit listener. 
// The form is also the element causing the default refresh of our page, and, as such, it's the only thing that can prevent it, so we have to grab the event object from the form.

import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div className="App">
      {console.log(name)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input type="text" onChange={event => handleChange(event)} />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;



// handling multiple inputs

// We have two goals. First, we want to store both the username and password in a single state object. 
// Second, we only want to write one single change handler function that will dynamically find the correct key in our state object to change. 
// To achieve these goals, we need to learn about two tools provided to us by ES6: the spread operator and computed properties.

// creating a new binding doesn't give us a new object (just creates a new reference to the same object data stored in memory). 
// How can we create a new object? 
// Well, there are a few ways, but one convenient (and arguably the most readable) method is to use the ... spread operator.

let foo = { key: "value" };

let bar = { ...foo };

console.log(foo); //  {key: "value"}
console.log(bar); //  {key: "value"}

foo.key = "change";

console.log(foo); //  {key: "change"}
console.log(bar); //  {key: "value"}

// This time when we declare bar, we take all the key/value pairs inside foo (in this case, there's only one)
// and "spread" them out (copy them) inside a brand new object literal.

// https://www.educba.com/javascript-literals/
// JavaScript Literals are syntactic representations for different types of data like numeric, string, Boolean, array, etc data. 
// Literals in JavaScript provide a means of representing particular or some specific values in our program. 
// Consider an example, var name = “john”, a string variable named name is declared and assigned a string value “john”. 
// The literal “john” represents, the value john for the variable name.


const handleNameChange = event => {
  setUser({ ...user, name: event.target.value });
};

const handlePasswordChange = event => {
  setUser({ ...user, password: event.target.value });
};

// Here, our spread operators are telling React "Please copy all the keys and values in the user object into this new object literal, 
// then overwrite the name and password keys respectively with the specified value." 


// Computed properties
// Another extremely useful tool from ES6, computed properties, lets us compute the properties of objects, as the name implies.

let myObject = { firstProperty: "Hi Lambda!" };

// We know that JavaScript provides us with two ways to access this property: dot notation and bracket notation.

myObject.firstProperty; //"Hi Lambda!"
myObject["firstProperty"]; //"Hi Lambda!"

// Take a look at the bracket notation. Have you ever stopped to wonder why you have to surround the key you're trying to access in quotes? 
// Well, under the hood, all object properties are strings. 
// The dot notation is a bit easier to type, but sometimes it's not legal to use it - when our property has a special character or starts with a number, for example.

let myOtherObject = {"3": "totally legal key/value pair"};

// myOtherObject.3; // JavaScript freaks out at you.
// myOtherObject."3"; // JavaScript freaks out at you.
myOtherObject[3]; // JavaScript is pleased.  It will implicitly coerce this integer to a string.

// Side note: Incidentally, this is why we access elements in arrays with bracket notation. 
// Arrays are secretly just objects whose keys are hardcoded as strings of consecutive integers.

// But this brings us back to myObject["firstProperty"]; //"Hi Lambda!". 
// Why can't we just write myObject[firstProperty]; //"Hi Lambda!" without the quotes around firstProperty? 
// Because if you put quotes around firstProperty, JavaScript will attempt to look that string up in the object. 
// If you don't include the quotes JavaScript is going to attempt to evaluate what you wrote as a variable. 
// This is a powerful tool. Now instead of referring to our object properties with a hardcoded string, we can attempt to look one up on the basis of an evaluated expression.

let myThirdObject = { 1: "sup", 2: "hey" };

let computedProperty = 1;

myThirdObject[computedProperty]; // "sup";
myThirdObject[1 + 1]; //"hey";


// Using our knowledge of computed properties, we can now rewrite our handler functions like this:

const handleNameChange = event => {
  setUser({ ...user, [event.target.name]: event.target.value });
};

const handlePasswordChange = event => {
  setUser({ ...user, [event.target.name]: event.target.value });
};

// And now that these functions are literally the same letter-for-letter, there's truly no reason to have two of them.

import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.username);
    console.log(user.password);
  };

  return (
    <div className="App">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;


// controlled inputs 
// React components can be broken down into two categories - "controlled" and "uncontrolled" components. 
// It is highly encouraged to use controlled inputs wherever we can so that the data on the DOM is controlled by us via state, 
// rather than DOM elements like form inputs

// we want our components to manage the data that is in our form. 
// There are dozens of reasons why we want this power, from form validation to styling, but in this case, 
// let's say that when the user clicks submit, we want to be able to clear the input fields automatically. 
// For that, we'll need to "bind the value" of the inputs to the state. To do that, we'll add another attribute to our <input> - the value attribute.

{/* <input value="Hi Lambda!">` */}

// Using the value attribute forces the text inside the input field to correspond to the string assigned to it - in this case, "Hi Lambda!". 
// Hardcoding it like this makes the input rather useless because now the user can't change the text. 
// But, what if, instead of hardcoding the value attribute, we passed it a dynamic value from our state:

import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setUser({ username: '', password: '' });
  };

  return (
    <div className="App">
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;

// The inputs are controlled by state! The text in the input will only change if state changes. 
// So, now, when the user types something into an input field, it updates our state. 
// React notices our state has changed, so it triggers a re-render. 
// When it evaluates what text should go in the input fields by looking at the value attribute, it notices it should put the data in 
// its state into those fields, and the elements render with the user's input.

// We want to clear the input fields when we hit submit. And for that, our inputs need to do what their parent tells them to do. 
// We can now do exactly that because we've attached the input's value attributes to our state.
// Now when the user clicks submit, the state will be reset with empty strings. 
// And since the value of the input fields is now dictated by the state, they'll be emptied as well.


