// A state machine is a mathematical model of computation.
// A machine can have a finite number of states, but it can only operate in one state at a given time.

// There are different types of state machines, but for building UIs (and understanding Redux), we'll concentrate on the type that has an initial state. 
// The next state is calculated based on input and the current state.

// For our purposes, a State Machine has:

// initial state (store)
// current state (store)
// inputs or actions (action creators) that trigger transitions (reducers) to the next state

// It helps to think in terms of states instead of transitions.

// Redux is NOT a finite state machine, but the thinking in states helps our understanding of how Redux works.



// https://krasimirtsonev.com/blog/article/managing-state-in-javascript-with-state-machines-stent

// There are different types of state machines but the one that fits in our case is finite state machine. As the name suggests it has a finite number of states.
// This type of machine accepts an input and based on that input plus the current state decides what will be the next state. 
// It may also produces some output. 
// When the machine changes its state we say that it transitions to a new state.

// What are all the possible states that this UI may be in?
// What exactly could happen in every of the states?
// If a certain thing happens what is the result?

// Imagine how we have an animation when changing the screens. 
// While the animation is happening the old UI is still there for some time and unfortunately the user is able to interact with it. 
// For example there is a chance that the user submits the log in form twice by just clicking on the submit button again really quick. 
// Without a state machine we will have to protect code execution with if statements by using flags or something similar. 
// However, if we take the table above we may see that the “loading” state does not accept a “Submit” input. 
// So if we transition the machine to “loading” state after the very first click of the button we are in a safe position. 
// Even though the “Submit” input/action is dispatched the state machine will ignore it and it will not fire a request to the back-end.

// The state machine pattern happened to fit in many places to me. 
// I identified three benefits that make me think about using state machine all over my applications:

// The state machine pattern eliminates bugs and weird situations because it wont let the UI transition to state which we don’t know about.

// The machine is not accepting input which is not explicitly defined as acceptable for the current state. 
// This eliminates the need of code that protects other code from execution.

// It forces the developer to think in a declarative way. This is because we have to define most of the logic upfront.

// Implementing a state machine in JavaScript
// Simple object literal with couple of nested properties:

const machine = {
  currentState: 'login form',
  states: {
    'login form': {
      submit: 'loading'
    },
    'loading': {
      success: 'profile',
      failure: 'error'
    },
    'profile': {
      viewProfile: 'profile',
      logout: 'login form'
    },
    'error': {
      tryAgain: 'loading'
    }
  }
}

// when we are at the login form state and we send submit as an input we should end up in a loading state. Now we need a function for accepting inputs.

const input = function (name) {
  const state = machine.currentState;

  if (machine.states[state][name]) {
    machine.currentState = machine.states[state][name];
  }
  console.log(`${ state } + ${ name } --> ${ machine.currentState }`);
}

// We get the current state and check if the provided input is acceptable machine.states[state][name]. 
// If yes then we change the current state or in other words transition the machine to a new state. 

// In both cases we provide a log of the operation showing the current state, what is the input and and what is the new state (if changed at all)

// Here is how to exercise our state machine:

input('tryAgain');
// login form + tryAgain --> login form

input('submit');
// login form + submit --> loading

input('submit');
// loading + submit --> loading

input('failure');
// loading + failure --> error

input('submit');
// error + submit --> error

input('tryAgain');
// error + tryAgain --> loading

input('success');
// loading + success --> profile

input('viewProfile');
// profile + viewProfile --> profile

input('logout');
// profile + logout --> login form

// Notice how we try to break it by sending tryAgain when the machine is in a login form state or sending submit twice. 
// In those cases the current state is not changed and basically the machine ignores the input.

