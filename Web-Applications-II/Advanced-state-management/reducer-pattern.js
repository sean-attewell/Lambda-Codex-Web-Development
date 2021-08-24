// The difficulties of storing and efficiently performing logic on data within components becomes more and more apparent 
// as the amount of data increases. Consequently, as components grow and deal with larger sets of data
// the storing and transportation of state across the entire application increasingly becomes more and more cumbersome as well. 
// Reducers offer one possible way to address this problem within the component. 
// At the level of the application, an elegant combination of the Context API with reducers 
// provides one possible way that React developers can manage global state.

// Redux is built on the principle of immuntability
// The redux store cannot be mutated (changed directly)
// You have to replace the store with a clone of the previous object that it took care of

// Objects in JS can be mutated even if assigned with const
// e.g. myObj.name = 'Stephen';

// const newObj = myObj is just a pointer to the same object
// changing newObj will change myObj


// Mutable objects are objects whose state is allowed to change over time. 
// An immutable value is the exact opposite – after it has been created, it can never change. 
// There are some real benefits from making your state immutable. 

// predictability 
// Mutation hides change, which can create (unexpected) side effects
// This can lead to some nasty bugs in our code. 
// When we enforce immutability, we can keep our application architecture and mental model simple, 
// which makes it easier to reason about the application. 
// Simply put, it is very easy to predict how the state object will change based on certain actions/events. 
// Without immutability, our state object can be changed or updated in unpredictable ways, causing weird behavior and/or bugs.

// Mutation tracking
// provide the ability to see all changes to our application over time
// Immutability makes it easy to see the changes, all you have to do is compare objects
// if you're replacing your previous object with a new object, you can just look at thoes new changes straight away
// In redux when we change the state our components props will update as well
// We can check our previous props against our new props to know what change occurred, and know how to handle those changes. 
// If a user adds a task to the todo list, the TodoList component will update since it is receiving new props. 
// But what if we want to run an animation on the new todo? 
// We can't just run it on every render because it would run when the user toggles a task to complete, or deletes a task. 
// Since Redux state management is immutable, we can track the changes that happen on the state, and only run our animation when a new task is added.


// Redux and Immutability
// Redux has a single immutable state tree (referred to as the store) where all state changes are explicitly handled by dispatching actions. 
// Dispatched actions are processed by a reducer that accepts the previous state and the action and returns the next state of your application. 
// It is easy to predict how the state tree is going to change based on actions that are dispatched. 
// It is also easy to predict which action will be dispatched based on some event or interaction. 
// This all leads to very predictable state management.

// Writing immutable code can be tough - your Javascript skills will really be tested here - and it may seem pretty tedious, 
// especially since we will be building very small apps with small state trees during this sprint. 
// Because of that, it may be pretty hard to see the real benefits of immutable code in class. 
// However, when you start working with a large application, with a huge state tree, you will quickly grow to appreciate the benefits of writing immutable code, and the extra effort it takes will seem much more worth it.


// ***Variables that are assigned a non-primitive value are given a reference to that value.***
// That reference points to the object’s location in memory. 
// The variables don’t actually contain the value.

// Primitive types in JavaScript are immutable. They are strings, numbers, and booleans
// In this example, num remains unchanged, whereas num2 changes, even though num2 was set to the value of num 

const num = 13;
let num2 = num;
num2 += 3;
console.log('Example 1 - ', num === num2); // Example 1 - False
console.log(num) // 13
console.log(num2) // 16

// This principle is true for all primitive types. Here again, name is unchanged.

var name = 'Bruce Wayne';
var superheroName = name;
superheroName = 'Batman';
console.log('Example 2 - ', name, superheroName); // Example 2 -  Bruce Wayne Batman

// Reference types in JavaScript are mutable. 
// They are objects, arrays, and functions. 
// Being that they are mutable, we can see side-effects occuring if we are not careful with our code.

const kansasCity = {
  cityName: 'Kansas City',
  state: 'Missouri',
  population: 488943
  };
  
  const austen = kansasCity;
  austen.cityName = 'Austen';
  austen.state = 'Texas';
  austen.population = 950715
  
  /* 
    If we log the 'kansasCity' object, what is it going to look like? It has been mutated! 
  */
  
  console.log('Example 1 - ', kansasCity);
  // Example 1 -  { cityName: 'Austen', state: 'Texas', population: 950715 }

// This is happening is because the 'austen' object is not created in it's own part of the computer memory. 
// It is only given a reference to the original object. 
// In other words, it's value is not a unique value. It's value points to the 'kansasCity' object's location in memory. 
// So when we directly mutate 'austen' by doing something like austen.cityName = 'Austen', it changes the value it's been pointed to on the original object.


// The same thing will apply to arrays. In the following example, fruits is mutated with the .push() function. Both arrays now have 'Pineapple' in them.


const fruits = ['Banana', 'Apple', 'Kiwi'];
const fruitsWithPineapple = fruits;
fruitsWithPineapple.push('Pineapple');

console.log('Example 2 - ', fruits, fruitsWithPineapple);
// [ 'Banana', 'Apple', 'Kiwi', 'Pineapple' ] [ 'Banana', 'Apple', 'Kiwi', 'Pineapple' ]


// Array.reduce() reminder

const numbers = [15.5, 2.3, 1.1, 4.7];
const newValue = numbers.reduce(getSum, 0);
console.log(newValue) // 24

function getSum(total, num) {
  return total + Math.round(num);
}


// Reducer functions take two arguments – the current state and action – and return a new, updated state object based on both arguments.
// In pseudocode, this idea looks like:

//     (state, action) => newState

// More specifically, consider a function in JavaScript that, when passed an integer, 
// would return that value + 1, without mutating the original integer's value. 
// Notice we could pass is our initialState value - 0 - and the return a new value - 1 - without overriding the initialState.

const initialState = 0
const reducer = (state) => {
  const newState = state + 1
  return newState;
}

const newStateValue = reducer(initialState);
console.log(initialState, newStateValue); // 0, 1


// Often, returning something such as an integer or a string is not the best choice, especially as data grows more complex than previous examples.
// Consider the previous example, where component's state utilizes an object as its data structure of choice:

const initialState = { count: 0 }
const reducer = (state) => {
  return { count: state.count + 1 }
}

// Again, we are returning a new object and are not directly mutating or overriding the initialState object.

// This reducer function is a pure function without any side-effects. 
// Reducer functions are the perfect fit for managing changes in state while maintaining the immutability we want in our components.

// We've discussed the nature of the incoming state value, but what about the action?

// The action, represented by an object, contains properties related to some action that happens in our apps.
// Every action object is required to have a type property, which will "inform" the reducer actions happening in the app. 
// The type allows the reducer to know what part of the state needs to change.


// Looking again at reducer above, let's show it that we want to increment our count state by passing in an action with 'increment' as the type.

const initialState = { count: 0 }
const reducer = (state, action) => {
  if (action.type === 'increment') {
    return { count: state.count + 1 }
  }
}

reducer(initialState, { type: 'increment' })

// This strategy is especially powerful when we want our reducer to be able to reduce the state. Take a look at our reducer now:

const initialState = { count: 0 }

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return { count: state.count + 1 }
  } else if (action.type === 'decrement') {
    return { count: state.count - 1 }
  }
}

reducer(initialState, { type: 'increment' });
reducer(initialState, { type: 'decrement' });

// Now our state management is very predictable. 
// Our current state passes into the reducer, and an action follows to tell the reducer how to update the state.

// We can also add a payload property to our action objects (sometimes called data). 
// Our reducer needs to have some data passed into it through the action to be able to update the state correctly, and this is where that data would live.

const initialState = { name: 'Donald Duck' }
const reducer = (state, action) => {
  if (action.type === 'changeName') {
    // how do we know what to change the name to? The action payload!
    return { name: action.payload }
  }
}

reducer(initialState, { type: 'changeName', payload: 'Mickey Mouse' });

// As you will see in the follow along, the action, and its associated property type, allow us to use the reducer to perform conditional state transformations.


// There's one last edit we need to make to get to production quality. 
// As you can imagine, or if, if else, if else … etc, statements are going to get very complex and long. 
// We'll use JavaScript's switch statement to make that part of our reducer a lot more readable:

const initialState = { count: 0 }
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 }
    default: 
      return state; 
  }
}

reducer(initialState, { type: 'increment' });
reducer(initialState, { type: 'decrement' });

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

// the default clause is optional and is executed if the value of expression doesn't match any of the case clauses.

// The optional break statement associated with each case label ensures that the program breaks out of switch 
// once the matched statement is executed and continues execution at the statement following switch. 
// If break is omitted, the program continues execution at the next statement in the switch statement. 
// The break statement is not required if a return statement precedes it.


// useReducer hook
// The useReducer hook is an alternative to useState (useState actually uses useReducer hook under the hood). 
// It is preferable when you have complex logic that you have to deal with in a component, 
// or when you find yourself with a lot of state properties (more than 3) in a single component. 
// useReducer, takes in a reducer function (that we build), as well as a value for the initialState. 
// Then it returns both the current state and a dispatch method in an array, just like useState does.

const [state, dispatch] = useReducer(reducer, initialState);

// The dispatch method is a significant addition to our arsenal here. 
// It will "dispatch" an action to our reducer when specific events occur in our application. 
// The dispatch allows us to powerfully combine the reducer function from our previous section, 
// with the ability to maintain our state at the level of the component.

// The useReducer hook has all the functionality we love from the useState hook 
// and combines it with the power of the reducers we are building ourselves.
// In doing so, it provides access to both the state and a function that dispatch actions to our reducer.


// Let's build out a component to go along with our counter reducer. 

import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 }
    case 'DECREASE':
      return { count: state.count - 1 }
    default:
      return state
  }
}

function Counter() {
  // Use the useReducer hook by destructuring its two properties: state, and dispatch 
  // and pass in the reducer and the initialState to the useReducer function
  const [state, dispatch] = useReducer(reducer, initialState)

  // Note the two button elements which allow the user to increase and decrease the count.  
  // Each of them contains an onClick event that dispatches the desired action object, with its given type.  
  // Each action, when fired, is dispatched to the reducer and the appropriate logic is applied.
  return (
    <>
      {/* Note, we have access to the current state and the dispatch method from the useReducer hook
      so we can utilize them to display the count 
      as well as couple the dispatching of the actions from the appropriate buttons.*/}
      <div className="count">Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>-1</button>
    </>
  )
}

// looks like the reducer function automatically receives the current state as a parameter from the useReducer hook
// so you just need to pass in the action when calling dispatch in the onClick callback.
