// The event object is wrapped inside of a synthetic event object in React
// Events are completely custom in React. Meaning they don't have to rely on the web browser and the React implementation controls how events work.

// before React, rather than just putting the event handler in the JSX,
// you'd have to select the button, and assign it to the onclick attribute

const btn = document.querySelector('button');

btn.onclick = buttonClickHandler;

// In react to bind an event to a button in a class component
// Declare the method using an arrow function 
// e.g. handleSingleClickEvent = () => alert('Double Click Event Triggered')
// No explicit binding required, it will use the 'this' keyword inside of the Component
// Now inside of the render function we can just say 
// <button onDoubleClick={this.handleSingleClickEvent}>


// We have already seen how events are handled within React class components. 
// We need an event handler function and we need to link it to an eventlistener method within our DOM.

class Button extends React.Component {
  handleButton = (e)=> {
    console.log(e);  }

  render() {
    return <button onClick={this.handleButton}>Click Me</button>;
  }
}

// Notice once again the need for that this object when referencing our event handler. 
// Within class components, ***just like our props and state***, our event handlers are bound to the instance of this class and are accessed through this.

// We have also seen that "e" parameter before. This parameter is known is React as a synthetic event object. 
// Inside this object, we will have access to various pieces of information regarding this event triggered, 
// including the target DOM element, the type of event, and methods that control the propagation of that event like preventDefault

// We can now do anything we want within event handler, from triggering a change of state to starting an external api call.

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      someValue: ""
    };
  }
  singleClickHandler = () => alert("Single Click!");

  doubleClickHandler = () => alert("Double Clicked!");

  mouseEnterHandler = () => alert("Mouse Enterd");

  changeHandler = (event) => {
    this.setState({ someValue: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello Handlers</h1>
        <h2>You typed: {this.state.someValue}</h2>
        <button onClick={this.singleClickHandler}>Click Handler Demo</button>
        <button onDoubleClick={this.doubleClickHandler}>
          Double Click Handler
        </button>
        <div onMouseEnter={this.mouseEnterHandler}>Mouse Enter</div>
        <input
          type="text"
          onChange={this.changeHandler}
          placeholder="Change my input"
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);