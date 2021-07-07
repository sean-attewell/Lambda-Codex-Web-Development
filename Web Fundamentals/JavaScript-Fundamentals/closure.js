// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// ***In other words, a closure gives you access to an outer function’s scope from an inner function.*** 
// It makes it possible for a function to have "private" variables.
// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
// In JavaScript, closures are created every time a function is created, at function creation time.

// Let's look at the Window/Console in a browser/node environment. Type window to your chrome console. 
// JavaScript is executed in this context, also known as the global scope.
// There are two types of scope in javascript, Global Vs. Local and that this is important to understand in terms of a computer program written in JavaScript.

// When a function is declared and created, a new scope is also created. Any variables declared within that function's scope will be enclosed in a lexical/private scope that belongs to that function. 
// Also, it is important to remember that functions look outward for context. 
// If some variable isn't defined in a function's scope, the function will look outside the scope chain and search for a variable being referenced in the outer scope. 
// This is what closure is all about.

// In it's most simplest of forms this is a closure:
const foo = 'bar';
function returnFoo () {
  return foo;
}
returnFoo();
// -> reaches outside its scope to find foo because it doesn't exist inside of return Foo's scope when foo is referenced.

const lastName = 'Bob';
function greet() {
  const firstName = 'Jim';
  alert(`The name's ${lastName}, ${firstName} ${lastName}`);
}

// Let's take this a step further. In the given examples, we've seen that we have created two environments for our code. 
// The first would be the global environment where lastName and greet exist. 
// The second would be the local environment where the alert function is called. 


// The counter function

// It's a function that declares and initialises a variable count, and returns a function
// The returned function adds 1 to the variable count in the outer function and returns it
// You can save the returned function in a new variable name
// You can then invoke the newly saved function, to add one to count and return it
// It will always look to the original outer function for count, and so it will keep track of it.

// Every time you run it, it just looks one level deep back to the context of the outer function, to find what count is. 
// That's all.

const counter = () => {
  let count = 0
  return function() {
    return ++count
  }
};

const newCounter = counter()
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())


// NOTE: returning count++ would start at 0, because it would only add 1 after returning.

// Same thing written a different way:
// https://www.w3schools.com/js/js_function_closures.asp

const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

console.log(add());
console.log(add());
console.log(add());

// The variable add is assigned to the return value of a self-invoking function.
// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

