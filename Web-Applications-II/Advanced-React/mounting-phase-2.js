// Using componentDidMount to set a component's state post render

// Constructor invoked (if exists) --> Render invoked --> componentDidMount invoked (if exists)

// componentDidMount
// Like render this method lives on the base React.Component class
// Part of the mounting phase
// Will be invoked after render gets called
// Will only be invoked once in the whole lifecycle
// Used for loading in any async data that you'd need to have on state during the render
// Takes time to request data. We can show a message to the user in the meantime.

// Inside of componentDidMount we can call setState which forces a re-render of our component. 
// This way, any asynchronous actions should be performed inside of our componentDidMount function, especially when it comes to fetching data via HTTP. 
// Data fetching is the de-facto purpose for using componentDidMount within a component because of its position within the component lifecycle.

// This method is guaranteed to be called only once in the whole lifecycle , immediately after a component is mounted.

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      doggos: []
    };
  }
  componentDidMount() {
    fetch("https://dog.ceo/api/breed/labrador/images")
      .then(res => res.json())
      .then(dogs => this.setState({ doggos: dogs.message }))
      .catch(err => console.log("noooo"));
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        {this.state.doggos.map(doggo => <img src={doggo} key={doggo} />)}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// The json() method of the Response interface takes a Response stream and reads it to completion. 
// It returns a promise which resolves with the result of parsing the body text as JSON.

// Note that despite the method being named json(), 
// the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

