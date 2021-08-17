// View is a function of state
// v = fn(s)

// The view is what the user sees and interacts with on our web pages
// fn = Function/Class that contains or encapsulates our data and our view
// s = state - Data that will be represented by our view


// Constructor
// Nothing different from ES6 classes.
// used to load in initial state data
// Sets the component up with the data it needs BEFORE it gets mounted to the DOM
// You can put a console log in the constructor to see when the constructor is called
// conditionals are common in state, because if data isn't back from a server they will show a loading bar or something
// Good for recieveing props and translating those props to state

// Any class that recieves props
// you can take those props in through the constructor
// then pass in to super() too
// you can then use this.props.color directly instead of setting props on state of the child component manually
// The super keyword is used to access and call the constructor 
// The super keyword can also be used to call functions on a parent object
// Syntax
super([arguments]); // calls the parent constructor.
super.functionOnParent([arguments]);
// When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. 

// Parent.call(this, childattributes) is not something we have to do anymore.
// Super will pass the context and attributes back up to the parent class 
// Another way of saying, calls the parent function in child 'this' context, with attributes given
// remember that the 'this' context being passed to the parent function is the object returned by the child class constructor.


// The constructor can also be used to bind all class methods to the render function and vis versa (traditionally)
// So you can call 'this.classmethod' (like clickHandlers or changeHandlers) within render
// No need to bind in the construtor explicitly anymore with more advanced versions of react and babel
// New ESNext syntax does that binding for us:
// A **constructor method** is defined as an arrow method without a const 


import React from 'react';
import { data } from './extraneousSource.js';

class MyComponent extends React.Component {
  constructor() { // if I wanted to receive some props here I could pass them in through the constructor! constructor(props)...
    super(); // if i receive props through the constructor I will need to pass them back through super(props);
    this.state = {
      arbitraryStateData: data,
    }
  }

  eventHandler = () => this.setState({ foo: 'bar' });

  render() {
    return (
      <div>
        {
          // map returns an array remember? So lets give react an array of JSX elements and let it perform it's magic. 
          // For this example we'll assume this list is a string.
          this.state.arbitraryStateData.map(data => <div>{data}</div>)}
      </div>
    );
  }
}

// This how we use the constructor in the mounting phase of our component's lifecycle. 
// Now that our data is set up on state, we can access it during our render portion of the mounting phase.

// In conclusion, the constructor function on a React Class' Component's purpose 
// is to serve up initial state data for when the time comes to mount up your DOM elements.



// Render
// Render is required for all Class Components (any class that extends React.Component)
// the render() method is how we tell React what data we want to turn into DOM elements
// It is how the React reconciler knows what you want mounted to the DOM
// The React virtual DOM will then handle the steps to mount those DOM pieces.
// It's a method we're overwriting (comes from base class React.Component), has no parameters, returns JSX
// Called in the mounting phase and the updating phase
// Any changes from setState invoke a call to our render method
// When triggered, your UI gets rendered to the DOM
// State and Render come hand in hand (view is a function of state)
// render should be a pure function, meaning it should return the same thing each time you call it. 
// Its concern is to look at this.props and this.state and return some DOM element, a boolean, an array of DOM elements
// and a couple of other things that you may want to reference or look into later.
// In functional components it's the return keyword that allows us to render.



// returning out of our render function is when we'd send something to the React reconciler process, through the DOM differentiation


// The state object is like the bigger brother to the render function, it tells the render function what to do, and the render function obeys
