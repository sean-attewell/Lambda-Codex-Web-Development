// Redux is a predictable state management library for JavaScript applications 
// and is the most popular State container for React applications
// Less of a library, more of an architecture for data flow

// The UI has a component that recieves the state tree
// and will usually pass that data down through props to other components

// You may have asked yourself a question like 
// "Which of my components should have state vs. which of my components should just be a way to present some DOM elements?"

// Luckily you're not alone in this dilemma. In fact, the Facebook team that built React in the first place noticed that managing state could become a nightmare 
// at scale were they only to use component state. 
// So, they built a pattern, and said, "everyone here at Facebook is going to write code after this pattern." 
// This way, they could eliminate many of the problems that unwieldy state-full components could surface. 
// That pattern was called Flux, and it's primary use case was to add some stringency to the React ecosystem because by itself, 
// React is very unopinionated in how one should be designing their application and managing state.

// Flux was great, but developers had a hard time with implementation because the pattern presented a few other problems. 
// Because of this, (and around the same time that React was becoming so popular) Dan Abramov built out a 'Time-traveling' approach to debug an application. 
// This method eventually became known as Redux. 
// Dan wanted to be able to go back in time to see when/where the state had changed in his application, and to do that, 
// he ended up creating one of the most popular state-management libraries known to React Developers today.

// Redux is a small, light-weight state container for use when building JavaScript applications. 
// Remember, Redux has nothing to do with React other than the fact that many developers use them together

// The Store
// Everything that changes within your application is represented by a single JavaScript Object known as the store. 
// The store contains our state for our application.

// Application state is Immutable
// When the application state changes, we clone the state object, modify the clone, and replace the original state with the new copy. 
// We never mutate the original object, and we never write to our store object.

// Pure functions change our state
// Given the same input, a pure function returns the same output every time. 
// All functions (reducers) in Redux must be pure functions. 
// Meaning they take in some state and a description of what changes took place and return a copy of our state.

// Redux is pretty simple at its core, the complications with Redux arise when we try and implement it within a React application. 
// Usually, these issues are because there is some new syntax, and it's just a matter of time spent learning to sort them out.


// https://egghead.io/lessons/react-redux-pure-and-impure-functions

// Pure functions returned values depend only on their arguments, do not have side effects like network or databse calls
// Predictable - will return the same thing with the same arugments each time
// Pure functions don't mutate the values passed in to it


// Redux setup (see .png)
// In this section, we'll learn how to create the Redux Store and how to use a library called react-redux to connect our React application to the Store. 
// Because Redux is a standalone library, (meaning it can be used on its own or with another library/framework for state-management and data flow) 
// we have to use a second helper package that will enable us to string together Redux within a React application. 
// That package is called React-Redux.

// From the very beginning, we need to stress that Redux has no relation to React. 
// You can write Redux apps with React, Angular, Ember, jQuery, or vanilla JavaScript.

// Installation 
// This process assumes you've used Create React App to boilerplate out a React application.

// npm install react-redux redux

import { createStore } from 'redux';

// createStore will take in a single reducer that represents the state (data) of our application globally. 
// We need to create a store variable, and use createStore to create the Redux store.

const store = createStore(reducer);

// let's create a function called reducer that returns an object representing our state.

function reducer() {
  return {
    user: {
      name: 'Dustin'
    },
    movies: [
      'Star Wars',
      'Lord of the Rings',
      'Harry Potter'
    ],
    todoList: [
      { task: 'Learn Redux', id: 0, completed: false }
    ],
    moviesToWatch: 13
  }
}

// Now that we have a store, we want to make our application aware of it. 
// The way this works is that react-redux gives us a <Provider></Provider> component that wraps around our entire application. 
// We will pass our newly created store to that component as a prop.

// Within our Root Component (usually Index.js), go ahead and import Provider from react-redux.

import { connect, Provider } from 'react-redux';

// Then, all we need to do is wrap our <App/> with the <Provider> component and pass a store prop set equal to the store we created. This will look like this:

<Provider store={store}>
  <App/>
</Provider>


// Conecting components to the Store
// Now that we have built a store to manage our state, we need to connect our components to that store. 
// We can do so using the connect function, within the components themselves. 
// We can also build a helper function within the component files to tell the connect function what pieces of state we want to access. 
// This function is usually named mapStateToProps, and it will map pieces of our Redux state to the props of our component

import { connect } from 'react-redux';

// Next, we use the connect function, where we export the component at the bottom of the file. 
// We invoke connect twice (function currying). First with two arguments - a function and an object. 
// Second with just the component we are trying to connect. 
// For now, we'll pass null and {} into the first invocation.

export default connect(null, {})(MovieList)

// Now MovieList is connected to the store. 
// Let's write our mapStateToProps function now, to tell connect which pieces of our state we want to bring in to this component. 
// This function takes in state as a parameter, then returns an object where the properties can be passed to props, 
// and the values are retrieved from the store for our component.

const mapStateToProps = state => {
  return {
    movies: state.movies,
    moviesToWatch: state.moviesToWatch,
    user: state.user
  }
}

// Let's pass this in as the first argument to the first connect invocation. 
// Notice that state is being passed into this function. 
// Under the hood, connect passes our entire state tree to mapStateToProps. 
// That means that within that function, we have access to all our state via the state argument. 
// But, the component only receives the pieces of state that we turn out of mapStateToProps.

export default connect(mapStateToProps, {})(MovieList)

// Now, if you look at the props in the React tools, you will see that all three pieces of our state have been passed to our component 
// through the connect function! 
// As a side note, other props we've passed to this component the traditional way are still going to be available.

// By the way, did you notice that we are using a function that takes in a component, extends its functionality, and returns a component? connect is a HOC!!!`

// The connect() function is actually a higher order component
// It takes in mapStateToProps and an object the first call, then a component the second call
export default connect(mapStateToProps, {})(MovieList);  
// It returns a brand new component which is a copy of MovieList with added functionality
// i.e. the fact we have our state tree from the redux store coming in as props
// Remember you can pass down props as normal to the component as well

