// The first place to start with the this keyword is to understand where a function is called. 
// If you know the function's context, you may be able to deduce what the 'this' keyword is pointing to.

// JavaScript has global objects (or execution context) that exist wherever JavaScript lives. 
// In the browser, this is called window, and in node it's called global/console. Either way, JavaScript lives inside of a context

// In the global scope 'this' points to window, which is a giant object of the entire JS language. That is literraly JavaScript. 

// Open up your console and type in window and see what you get. 
// The giant object that prints is JavaScript. 
// Chrome has an engine built-in that can run that object and execute features of the JavaScript internally.


// Principle 1: Window/Global Object Binding

// When in the global scope, the value of "this" will be the window/console Object;
function sayName(name) {
  console.log(this);
  return name;
}
sayName("D'Artagnan");


// Principle 2: Implicit Binding
// Whenever a preceding dot calls a function, the object before the dot is this.

console.log('\n\n// Principle 2: Implicit Binding')

const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello('Ryan');


// This principle is one of the most commonly used applications of the this keyword. Here is another example for use to play with.

const sayNameFunc = obj => {
  obj.sayName = function() {
    console.log(`Hello my name is ${this.name}`);
    console.log(this);
  };
};
const me = { name: 'Ryan' };
const you = { name: 'Freddy' };
sayNameFunc(me);
sayNameFunc(you);

// Invoke Methods on our objects
me.sayName();
you.sayName();

// You see that we have a function that receives an object as an argument. 
// Depending on the object being passed in, we get a different context for this, so when we log out the this keyword, we get a different object each time it's run.

// ***sayNameFunc assigns a method to the object you're passing in. 
// So really it's the exact same as the prior implicit example. The 'this' in the method looks to the rest of the object for context.  

console.log('\n\n// Principle 3: New binding')

// Principle 3: New binding
// Whenever we use a constructor function, this refers to the specific instance of the object that is created and returned by the constructor function.

// A constructor function is a function that returns an object. It's an object creator. 
// We use them a lot in JavaScript, and they lend themselves to a paradigm called object-oriented programming. 
// The function CordialPerson will create an object for us. When we call the function, we have to use the new keyword.

function CordialPerson(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson('Jerry');

const newman = new CordialPerson('Newman');

jerry.speak();
// Hello Jerry
// CordialPerson { greeting: 'Hello ', greeter: 'Jerry', speak: [Function] }
newman.speak();
// Hello Newman
// CordialPerson { greeting: 'Hello ', greeter: 'Newman', speak: [Function] }

// Note that the print names the Constructor function, rather than just printing an object like normal.
// It does the same when you print a class which is of course a constructor function under the hood

console.log('\n\n// Principle 4: Explicit binding')

// Principle 4: Explicit binding
// Whenever we use JavaScript's call or apply method, this is explicitly defined.

// We can override how we set CordialPerson constructor objects by taking the object-oriented approach. 
// We do so by calling them explicitly with new functions, .call and .apply

jerry.speak.call(newman);
// So the this calls jerry's speak function, but with the newman context (newman is 'this')
// Hello Newman
// CordialPerson { greeting: 'Hello ', greeter: 'Newman', speak: [Function] }

// ***The call() allows for a function/method belonging to one object to be assigned and called for a different object.***

// call() provides a new value of this to the function/method. 
// With call(), you can write a method once and then inherit it in another object, without having to rewrite the method for the new object

// call(thisArg, arg1, ... , argN)

newman.speak.apply(jerry);
// Hello Jerry
// CordialPerson { greeting: 'Hello ', greeter: 'Jerry', speak: [Function] }

// the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.