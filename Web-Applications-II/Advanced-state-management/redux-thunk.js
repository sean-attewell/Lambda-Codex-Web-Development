// Redux Thunk is a separate node package called redux-thunk
// Redux thunk is a middleware library that helps us make asynchronus operations in Redux
// By default in Redux we'd have to wait for any API calls to come back before we do anything because it runs synchronously.

// Since the Redux action -> reducer flow is synchronous, we will use Redux Thunk to make the flow asynchronous and make API calls from our action creators.
// We are changing up the action creators to perform asynchronous API calls. 
// We can do this because we know that Redux middleware intercepts the normal Redux flow, and can make a call before actions make it to the reducer.

// A thunk is a term for a function returned by another function (a.k.a. an inner function)
// It's when a function thunks out another function.
// I think the function being returned is the thunk?
// We will use thunks in our action creators to run async oeprations in redux.

function not_a_thunk() {
  // this one is a "thunk" because it defers work for later:
  return function() {
    console.log('do stuff now');
  };
}

// Thunks allow us to return functions out of our action creators rather than returning actions
// When an action creator is called, redux-thunk intercepts and acts on returned data. 
// If the thing returned is an action, it forwards the action through to the reducer. 
// But, if the thing returned is a function, aka a thunk (a function returned from a function), then it invokes the thunk 
// and passes the dispatch function as an argument to it.

// This is where redux-thunk becomes very powerful. 
// The action-creator returned thunk has access to the dispatch function. 
// So we can run an async function, like an API call, and inside the .then() we can dispatch an action!

function logInUser(creds) {
  // this returned function is the thunk, and gets dispatch passed in
  return function(dispatch) {
    return axios.post('/login', creds).then(res => {
      const loggedInAction = { type: USER_LOGGED_IN, payload: res.data.user }
      dispatch(loggedInAction);
    });
  };
}

// Pretty cool
// The thunk has access to dispatch, and can dispatch a new action based on the result of the API call! 
// Let's clean this up a little with arrow function syntax

const logInUser = creds => dispatch => {
  return axios.post('/login', creds).then(res => {
    const loggedInAction = { type: USER_LOGGED_IN, payload: res.data.user }
    dispatch(loggedInAction);
  });
}


// We have an app here that is ready to make an API call to the Pokemon API. 
// The first step to accomplishing this is to add redux-thunk as a dependency, then go to the main index.js page and import it like this:

import thunk from 'redux-thunk';

// Next, we need to tell the applyMiddleware function about this piece of middleware.

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// Now we're ready to make our action creators asynchronous (rather than just reurning an action)!

// action/index.js
import axios from 'axios';

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL';

export const getPokemon = () => dispatch => {
  dispatch({ type: FETCH_POKEMON_START });
  axios
    .get('https://pokeapi.co/api/v2/pokemon/')
    .then(res =>
      dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results })
    )
    .catch(err => dispatch({ type: FETCH_POKEMON_FAIL, payload: err }));
};


// reducers/index.js

import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAIL
} from '../actions';

const initialState = {
  pokemon: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_POKEMON_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;

// codesandbox reference
// https://codesandbox.io/s/vy6148rx97