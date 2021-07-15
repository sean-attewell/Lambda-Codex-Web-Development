// Side effects include console logs, requesting data from an API, scheduling timers
// They happen every time the DOM has finished updating

// So if the state changes (incoming data either private data or through props), 
// this triggers the component function to run again (say the App function)
// React then decides if the elements have changed since the last run of the APP function
// If there has been, a repaint is in order 
// As soon as that is done, the side effects will run
// console.log("You see me every time React finishes with the DOM")

// So if you click a button like 'make happy' when you're already happy
// No DOM surgery is performed so no side effect is run.


// What are "side effects"? A side effect is anything that affects something outside the scope of the function being executed. 
// Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. 
// There are two categories of side effects in React components - those that don't require cleanup and those that do require cleanup.
// We will discuss effects which require cleanup later 

// A React component without side effects is called a pure component. 
// A component is considered pure if it always renders the same output for the same state and props. 
// Similarly, a side effect is something that can cause a component to return a different output for the same state and props. 
// React offers us tools for managing side effects so we can avoid bugs and inconsistencies in our app. 
// The effect hook useEffect() is one of those.


// NOTE: Hooks are functions that let you “hook into” React state and lifecycle features from function components. 
// Hooks don't work inside classes — they let you use React without classes
// 100% backwards-compatible. Hooks don’t contain any breaking changes.
// Available now. Hooks are now available with the release of v16.8.0.
// With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. 
// Hooks allow you to reuse stateful logic without changing your component hierarchy
// Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), 
// rather than forcing a split based on lifecycle methods. You may also opt into managing the component’s local state with a reducer to make it more predictable

// In addition to making code reuse and code organization more difficult, we’ve found that classes can be a large barrier to learning React. 
// You have to understand how this works in JavaScript, which is very different from how it works in most languages. 
// You have to remember to bind the event handlers. 
// Without unstable syntax proposals, the code is very verbose. 
// People can understand props, state, and top-down data flow perfectly well but still struggle with classes. 
// The distinction between function and class components in React and when to use each one leads to disagreements even between experienced React developers


// The Effect Hook
// The effect hook tells React that a component needs to run, or execute, some side effect. This hook takes in two parameters. 
// The first is a callback function where we can run the side effect. 

useEffect(() => {
  console.log("Hello from the effect hook!");
});

// Used inside the component, puts the effect function inside the component's function scope. 
// This gives it access to state, props, and local variables. So we could also do something like this:

useEffect(() => {
  console.log(props.someProp, stateValueOne);
});


// Here are some basic examples of other common side effects we might see in React Components:


// Making API calls
const [user, setUser] = useState();
const [error, setError] = useState();
useEffect(() => {
  fetchUserData(userId)
    .then(res => setUser(res.data.user))
    .catch(err => setError(err.response.message));
});

// Manipulating the DOM
const [count, setCount] = useState();
useEffect(() => {
  document.title = `Count is: ${count}`;
});


useEffect(() => {
  console.log("The component has mounted.");
}, []);


// *** Syncing Effects to changes in State and Props ***

// In the examples we saw above, the effect hooks used were not synced with any particular pieces of data. 
// Because of that, each of those hooks would run every single time a piece of state or a prop changed. 
// With a lot of side effects, this would be somewhat concerning from a performance standpoint.
// Or, in the worst-case scenarios, where a side effect causes the state to change, we would find ourselves in an infinite loop and eventually crash our browser.

// Luckily we can sync our side effects with state and props changes. 
// We do this by passing in a dependency array as the second argument to the effect hook. 
// Note that this argument is optional. 
// If we don't pass in an array after the callback function, the effect will fire after every change.

const [user, setUser] = useState();
const [error, setError] = useState();
useEffect(() => {
  fetchUserData(props.userId)
    .then(res => setUser(res.data.user))
    .catch(err => setError(err.response.message));
});

// When this effect fires, it calls either setUser or setError. 
// That means that one of those pieces of state will change, which would, in turn, cause the effect to fire again, 
// causing the state to change, firing the effect again, and placing us in an infinite loop!

// this effect also relies on another piece of data. That is props.userId. 
// As we think about the component that this hook would be in, we can imagine that we only want this effect to fire if that userId prop changes, right? 
// We definitely don't want it to fire if user or error change! So, that means that we want this effect to sync up with props.userId only - nothing else. 
// Let's go ahead and add a dependency array argument with that particular dependency in the array.

const [user, setUser] = useState();
const [error, setError] = useState();
useEffect(() => {
  fetchUserData(props.userId)
    .then(res => setUser(res.data.user))
    .catch(err => setError(err.response.message));
}, [props.userId]); // Dependency array added

// Now this effect will fire when and only when props.userId changes!

// But wait, wouldn't we want this effect to fire when the component first mounts?
// Even with a dependency array added to the effect hook, it will fire when the component mounts, and then only fire when the given dependencies change.


// How can we add an effect to our component that we only want to fire off once as the component mounts, and not any other times during the life of the component? 
// Essentially, we would want to tell the effect hook to not synchronize that particular effect with any state/props changes, right? 
// We can solve this by adding the dependency array to the effect hook, but leaving it blank. 

// Let's set up an effect hook that runs a data fetch side effect that we don't want to sync with any state/props changes.

const [data, setData] = useState();
const [error, setError] = useState();
useEffect(() => {
  getInitialData()
    .then(res => setData(res.data))
    .catch(err => setError(err.response));
}, []);


// Summary
// Using a dependency array as the second argument in the effect hook, we can tell it with which state or props the effect should be synced. 
// This is a handy guide to use as you begin the build the mental model for this principle:

// … the question is "with which state and props does this effect synchronize with"

useEffect(cb); // all state and props
useEffect(cb, []); // no state or props
useEffect(cb, [these, states, props]);


