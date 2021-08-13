import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Message from "./components/MessageComponent";
import Name from "./components/NameComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      name: "Ryan"
    };
  }

  handleChangeFunction = (event) => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Message propsMessage={this.state.message} />
        <Name propsName={this.state.name} />
        <input onChange={this.handleChangeFunction} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// MessageComponent.js
import React from "react";

const Message = props => <h1>{props.propsMessage}</h1>;
export default Message;

// NameComponent.js
import React from "react";

const Name = (props) => <h4>My name is {props.propsName} </h4>;
export default Name;



// Unlike statically defined data within our component, state is persistent, changeable and can flow into other components through use of prop drilling. 
// Changes to state immediately rerender the parts of our components effected by that change of state in a process called reactivity. 
// When working with more complex component trees, state always runs from a parent component down to a child.

// What if we want to modify that data? Well, just as we can pass parent state down through props, we can also pass functions that modify child state! 
// Executing these functions in our child components will cause state to change at our parent level components, 
// resulting in reactive rendering through out all our application!

// functional component with props passed in (not referring to a 'this' object):
const WelcomeBanner = (props) => {
  return(<h1>Hello, {props.message}!</h1>);
}


// in class components, props are attached to the this object, just like state.
class WelcomeBanner extends React.Component {
  render(){
      return(
      <div>
          <h1>Hello, {this.props.message}</h1>
      </div>
      )}
}

// Now let's add in the ability to modify that state. To do this we will need to:

// Connect a state change method to an event listener in our child component.
// Create the substance of that method in our parent.
// Pass that method to the child through props.

// Let's start at bottom, our child component. Let's say that we want use a form to dynamically update our message statement. This small component should do nicely:

const FormComponent = props => {
  return (
    <form>
      <input placeholder="change state" onChange={props.updateStateMessage} />
    </form>
  )};

// Let's build out our state changing method where it belongs, in App.js our parent

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      welcomeMessage: 'world!'
    };
  }

  updateStateMessage = (e)=> {
    this.setState({welcomeMessage:e.target.value});
  }

  render() {
    return (
      <div>
        <WelcomeBanner message={this.state.welcomeMessage} />
        <FormComponent updateStateMessage={this.updateStateMessage}/>
      </div>
    );
  }
};

// And there we go! We successfully passed our state data downstream through props in WelcomeBanner. 
// At the same time, we can also successful pass data back upstream by executing state modifying functions passed through props in FormComponent.

