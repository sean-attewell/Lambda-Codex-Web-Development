// Class Components have been a big part of the React ecosystem because they brought a lot of functionality that we normally didn't get with the React API when using 
// function components. Now with hooks, that functionality is available in function components. 
// However, a LOT of projects will still have class components in them, and we need to be prepared to work with classes when we see them

// We extend the Base React Class from the react library
// The base class allows us to use some of the methods that the React team has curated to tap into what we call the Component Lifecycle. 
// These methods (known as life cycle hooks) give us control over how our components work
// If we'd like to use them, we have to build out a class component that extends the React.Component parent class.
// Class components have a render method (comes from base Component class) and can also hold state
// state can be/should be set up on the constructor function
// When state updates, render gets called again
// We can pass state around as props
// When state that has been passed around changes, the props change too
// This is what makes React reactive.

// We call super in the constructor because we are extending a parent component and want access to its methods like render.

// The constructor is creating an object, so when you're interpolating 'this' you're referring to the object that gets created by the constructor
// 'this' being the object that App generates when it gets called 
// state is an object that lives on the this object

// C C R
// Class, cconstructor, Render

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Ryan"
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



// you may also see the pattern:
import React, { Component } from "react";
class App extends Component {}
// just remember that Component comes from React either way.


// So long as your component is mounted, so too will be your state. 
// It's as persistent in memory as your component.

// State is mutable, but can only be changed with the setState method
// When state changes the render function gets called again

