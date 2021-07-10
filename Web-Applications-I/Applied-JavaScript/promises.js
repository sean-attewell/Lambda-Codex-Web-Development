// Asynchronous code
// In JavaScript we have the concept of 'asynchronous' code. This simply means code that does not run instantly in line. 
// Perhaps the code needs to wait a moment, wait for something to happen, or in the case we will explore today, wait until data comes back from a server. 
// Using asynchronous code can be challenging at first because we need to be able to recognize which code will be asynchronous and which will run instantly

setTimeout( () => {
  console.log('Hello!');
}, 500); 

// setTimeout will wait 0.5 seconds before running its callback function

console.log('Over here!'); // this runs first

// Promises
// Promises are one design pattern of approaching asynchronus code in JavaScript (another is async/await)
// We use them as an alternative to nesting multiple callbacks (avoiding callback hell)

// I guess .then .then .then is better than a callback inside a callback inside a callback
// a.k.a. a function that if called, calls another function, that if called, calls another function

// Implementing promises is not something you'll need to do very often, especially in front end development. 
// However, understanding how they work under the hood will help you deal with them, for example when requesting data from web servers.

// Learning how to handle promises is pretty straight forward.
// In fact, on a Promise object there are really only two methods that we need to use to handle promises then and catch.
// ***A Promise is helper object (made by a generator function you call with new) containing 2 methods!!
// We use the promise object to inform the JS engine that the async function has finished

// For what we're trying to accomplish in terms of transferring data between our apps and some server somewhere, we will actually be using what is called a Promise Library. 
// I want to ensure that you understand that the built in Promise object you're about to see, is NOT a promise library, 
// rather it is a feature built into the JavaScript language as of ES6. 

// Straight from MDN:
// A Promise is a proxy for a value not necessarily known when the promise is created. 
// It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
// This lets asynchronous methods return values like synchronous methods: 
// instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// Simply put, a Promise is just that, a promise from the object that it will let us know when it has completed (or errored) what we have asked it to do. 

// A promise can exist in one of three states:

// Pending: a state where the promise is neither rejected nor fulfilled. (this is the state it is in when we first call it)
// Fulfilled: a state where all's well and a resolved value can be used by our code.
// Rejected: a state where something went wrong and there is an error that needs to be dealt with.

// If the promise succeeds, it will return the value as a parameter into a callback passed into .then(). 
// If the promise fails, the callback passed into the .catch() runs, taking an error as its argument.


// Reminder, we are building our own promise here, although you will not need to do this often

let time = 0;
const timeMachine = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((time += 1000));
    }, 1000);
  });
};

// Notice here that we've now wrapped our setTimeout function in a new Promise and we're resolving the addition of the time += 1000 and passing that resolved result
// This allows us to do what we call promise chaining when we invoke our timeMachine function. 
// Remember that every promise ships with then and catch methods and we can use those methods to either receive a resolved promise or a rejected promise. 

timeMachine()
    .then(newTime => {
      console.log(newTime); // --> OUTPUTS: 1000
    });

// the thenified timeMachine invocation is now receiving a callback itself, (this is how all promise chains should look) with some item being received as a parameter.
// We can chain multiple thens together. 
// Inside of each then block when/if we return something new, we can be directed into a new then block which is really neat.
// Or maybe we're resolving more than one process, and we want to see the next result in the next then block. 
// Lets manipulate the data in the .then block we have now, and see what happens when we use another then.

timeMachine()
  .then(newTime => {
    const myTime = newTime / 1000;
    return `${myTime} seconds have passed`;
  })
  .then(newString => {
    console.log(newString); // --> OUTPUTS ​​​​​"1 seconds have passed​​​​​"
  });

// In our first then block we are manipulating the time that is originally being resolved by the Promise and then sequentially returning it with some text concatenated onto the time. 
// Because we are returning a value from our first then statement, we can now chain on another then. And thus we have achieved some promise chaining.


// We're going to refactor our code, ONLY where we're calling timeMachine. 
// The function we're going to write is called parseTime and it will receive a ms milliseconds parameter that we can use to reject a promise in the future.

const parseTime = ms => {
  return new Promise((resolve, reject) => {
    const timeString = time / 1000;
    resolve(`${timeString} seconds have passed`);
  });
};

// Ok! Now we've offloaded some work from our then block into a function that resolves a promise. 
// We can now use it like above, but this time, when we call our timeMachine function we'll pass this parseTime function as an argument to our first then block.

timeMachine()
  .then(parseTime)
  .then(timePassed => {
    console.log(timePassed); // --> OUTPUTS: "1 seconds have passed​​​​​"
  });

// We've effectively achieved the same thing, but now we're chaining promises and their resolves together. This is Promise chaining
// *** So rather than .then() returning something into the next .then() like before, it now passes a new promise, which in this case has resolve()ed into the next .then()
// *** So you can have both a .resolve() and .catch() path within the second .then() based on the prior one if you like

// Now the last thing we need to cover is a rejected promise because up until now all the things have just… worked.

// Lets tweak our parseTime function so that we can reject a promise instead of resolving a promise that is, if a certain condition matches

let time2 = 0;

// Normal function that returns a Promise object
const timeMachine2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((time2 += 999));
    }, 1000);
  });
};

// Normal function that returns a promise
// Used as the callback in the first .then() after the timeMachine2() function
// Assumes the prior timeMachine2 function returns a 'ms' value to it (which it does through its resolve)
const parseTime2 = ms => {
  return new Promise((resolve, reject) => {
    const timeString = time2 / 1000;
    if (ms > 999) {
      resolve(`${timeString} seconds have passed`);
    } else {
      reject(new Error(`ms is less than 1 second promise rejected!`));
    }
  });
};

timeMachine2()
  .then(parseTime2)
  .then(timePassed => {
    console.log(timePassed); // --> OUTPUT: DOES NOT RUN
  })
  .catch(err => {
    console.log(err); // --> OUTPUT: ​​​​​[Error: ms is less than 1 second promise rejected!]​​​​​
  });


  // How we handle promises is what is important for us in the future. Not how we implement them. We will be using Axios for that.