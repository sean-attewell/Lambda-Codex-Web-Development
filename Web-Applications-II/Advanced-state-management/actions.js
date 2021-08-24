// Actions
// Actions in Redux are packets of information that contain an action type and associated data.

// In code, an action is simply an object with up to two properties - a type property and an optional payload property. 
// Each action MUST have a type property. 
// The type property is a string that explains what interaction just happened. 
// By convention, we use all caps and underscores for types - ie LOGIN_USER or TOGGLE_TODO. 
// The payload property is data that goes along with that interaction.

// Actions are "dispatched" to our reducer - aka, passed into the reducer function as an argument. 
// When our reducer recieves an action, it will update the state according to the type and payload on the action.

// Let's say we have a toggle handler function that switches a boolean field called show, which is set on our state in our Redux store. 
// An action for such an event would look like this:

// { type: "TOGGLE_SHOW", show: !state.show };
// This allows us to keep things as simple as possible when responding to events and interactions!

// Importantly in Redux, reducers are the only place we can update our state. 
// Actions tell our reducers "how" to update the state, and perhaps with what data it should be updated,
// but only a reducer can actually update the state. 



// Action creators
// Actions should not be confused with action creators (though admittedly, it's very easy to confuse them). 
// An action creator is a function that creates an action. Or in other words, an action creator is a function that returns an action object.

// Action creators are a middle step between events/interactions and the dispatch process. 
// They make it possible to write reusable functions that can create actions on the fly, rather than us hard coding actions into our components. 
// With action creators in mind, here is an updated look at our data flow:

// Store sets the state ->
// Event or user interaction happens ->
// An action creator is called and dispatches an action ->
// Actions tell us about the changes from the event ->
// Reducers handle those actions and replace the store accordingly.

// This flow is one of the reasons that Redux is so powerful. 
// The two major principles here are Functional Programming and Immutability. 
// Dispatched actions are the trigger for reducers, and reducers are pure functions that never produce any side-effects. 
// Everything you do in Redux is functional.

// NOTE: If you make your action creators inside a file called index.js within an action folder
// you won't need to specify the file name in the import, can just import from the actions directory


// Action types
// The final term we want to cover here is action types. We've talked about, and even demonstrated the type property of an action. 
// We want to change that up right now, ever-so-slightly… Instead of passing a string to action.type we create a variable with the name of the string, 
// and assign it the string we would have passed to an action. 
// Then we give action.type the variable as it's value.

// We do this because we deal with strings like we deal with types. 
// Strings are used in multiple places like you'll see in reducers very soon, misspellings occur, and are very hard to debug. 
// If we misspell our action type in our reducer, our state won't be updated correctly, and we'll be left wondering what went wrong.

// Instead, we'll create an action type, and import it wherever we need it. 
// That way, with linters IntelliSense in our code editor, we can spot errors a lot quicker. This is what action types looks like:

export const TOGGLE_SHOW = 'TOGGLE_SHOW';

// then in our action:
// { type: TOGGLE_SHOW, payload: !state.show }


// EXAMPLE
// https://codesandbox.io/s/w2n0o4qwmw

// actions.js
export const UPDATE_TITLE = 'UPDATE_TITLE';

export function updateTitle(newTitle) {
  console.log(newTitle); // make sure it's working (since we don't have a recuer to handle action yet)
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  };
}

// title.js
import React from 'react';
import { connect } from 'react-redux';

import { updateTitle } from '../actions/actions';

class Title extends React.Component {
  state = {
    newTitleText: ''
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateTitle = e => {
    e.preventDefault();
    this.props.updateTitle(this.state.newTitleText);
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input
          type="text"
          name="newTitleText"
          value={this.state.newTitleText}
          onChange={this.handleChanges}
        />
        <button onClick={this.updateTitle}>Update title</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

export default connect(
  mapStateToProps,
  { updateTitle } // same as { updateTitle: updateTitle }
)(Title);

// it is the connect function that works in the background to actually dispatch our actions to the reducer. 
// We can't just import an action creator and use it in our component. It must go through connect and be used from the props object.


