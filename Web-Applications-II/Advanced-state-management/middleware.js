// Common programming tool (not just Redux) to intercept some process, run a funtion then (usually) continue the process.
// A way to work with data that is flowing through the process before that process finishes.
// You will see middleware used a lot when you start learning about NodeJS

// Redux middleware
// intercepts every action that is dispatched before it gets to the reducer

// Middleware can:
// Stop actions
// Forward an action untouched
// Dispatch a different action (or change the action itself)
// Dispatch multiple actions

// We can have multiple middleware.
// Middleware runs sequentially, in the order they are defined.
// Middleware is added to the store when it is created.


// Setup with redux-logger middleware

// npm install redux-logger
// import logger from 'redux-logger';

// Finally, we need to import a helper function from redux. 
// This function is the applyMiddleware function. 
// You can probably guess that we will pass logger into this function. You would be correct! 
// But the applyMiddleware function is going to be inside the createStore function. 

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

// redux logger intercepted the action, logged some information, then forwarded action onto the reducer
// You can see the previous state, the action dispatched and then the next state resulting from it

// Open the console, and then interact with your app. 
// You will see the actions as they are logged, 
// the state tree before the action passes to the reducer, 
// and the resulting state tree after the action passes to the reducer!

// Note: if you use redux-logger with other middleware packages, make sure logger is passed to applyMiddleware last.



// Look at this package - https://github.com/elgerlambert/redux-localstorage. 
// Try to now implement this so that your store is saved to localStorage. 
// The configuration is a little different than what we did above, so you will have to follow what the docs show
