// When an action is dispatched, it flows through every reducer in a script. 
// Redux was built on this fundamental principle, among others.

// Reducers are pure functions, meaning they don't produce any side-effects. 
// A reducer follows the key principles that come from the Array.reduce() function, in that they behave similarly to the callback that you would pass to reduce. They aren't the same thing, but they behave and do similar things, so that is an appropriate comparison to keep in mind.

// Reducers take in two arguments, the current state from the Redux store, and the action object, sent via action creator functions. 
// Remember that an action gives us a packet of information as an object with a type and payload field that we can use. 
// The type tells the reducer what to do, and the payload tells the reducer what to update on state.

// Reducers will NEVER update state directly, they only return a new object Remember this as you craft your reducers - 
// that they are not only functional and pure, but they lend themselves to the pattern of immutability well.

// Inside reducers, we use switch statements to look at the action type, then return the updated state. 
// Switch statements are like long if / else if / else if / ... / else statement.


// Back in our title app, let's create another folder inside src called reducers, and inside that, a reducer.js file. 
// To start, we will create an initialState object. 


// Then we'll create the reducer function. Remember, it takes two arguments - state (with the initial state as a default - watch the syntax there), and action.

// Then it will contain a switch statement that looks at action.type and return state as the default.

// Next, we need to build a case for our action. 
// The dispatched action is the UPDATE_TITLE action. 
// So, we'll want to import the action type from the actions.js file first. 
// It is a named export, so you need to use brackets to import it.

// Then, in the case for UPDATE_TITLE, we will return a new state object. 
// We do this be returning an object with state spread into it
// and updating the title property with action.payload


// reducer.js

import { UPDATE_TITLE } from '../actions/actions';

const initialState = {
  title: 'Title from Redux store'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}

export default reducer;

// We are returning a brand new object. We do NOT update the state object and return that
// We are using the spread operator to "spread" in our old state
// We then update the one piece of data we want to update - title

// This syntax is the convention when building reducers. 
// This is something that takes some good repetition to get used to!

// Now that we have built our reducer, we need to import it into the index.js file and pass it into the createStore function 
// in place of the fake one we built earlier. 
// The convention for the import is to call it rootReducer inside index.js.

// index.js
import rootReducer from './reducers/reducer';

const store = createStore(rootReducer);
