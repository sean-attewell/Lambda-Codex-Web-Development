// Scope is defined as which variables we currently have access to and where.

// There are a couple different levels of scope: block level scope is used in if statements and for loops. 
// In block level scope, a variable declared using either let or const is only available within the statement or loop (like i in a for loop). 
// Similarly, there is function scope, where temperature exists inside the function, but not elsewhere in your code file.


// Function scope allows us to create variables inside of functions, that are essentially private to that function
// Functions can reach out and grab variables outside of their scope, but we can not reach into a function to get a variable.


// Hoisting
// Typically when we use variables we declare and initialize them in the same line. That looks something like this:

// declare & initialize variable
var myVariable = "this is a variable";

// When you run JavaScript, the compiler will declare all variables before initializing them and before running the rest of the script. 
// First the compiler will declare all functions, then the variables.
// This is one of the quirky things about JavaScript as a language.

// declare variable
var myVariable2;
// initialize variable
myVariable2 = "this is a variable";


// It first declares the variable with a value of undefined, then runs the script, including the initialization of the variables with the values we give them.
// So this would return undefined:

// console.log(myVariable);
// var myVariable = 'this is a variable';

// The compiler would take the code above and interpret is as this:

// var myVariable;
// console.log(myVariable);
// myVariable = "this is a variable";

// Variables declared with let and const are not hoisted and thus can not be used anywhere without throwing a ReferenceError. 
// Basically, you can't use let variables or const variables before you've given them a value.



// This works fine:
sayHello();

function sayHello(){
  console.log("hello");
}

// After declaring all of the variables and functions, your compiler will also initialize functions. 
// This means that functions can be used before they are declared or initialized (because the compiler did both on the first pass). 
// **Quick note that this only applies to declared functions, not function expressions.**

// Hoisting is the ability to call functions and variables before they are declared, like we see above
// Generally best to declare functions first anyway
// But if you wanted to invoke all the functions at the top of a file so that another developer looking at your file could see at the top what that file does, you may break the rule.

// Variables declared with let and const are not hoisted and thus can not be used anywhere without throwing a ReferenceError. Basically, you can't use let variables or const variables before you've given them a value. That difference is illustrated here:

// console.log('1a', myName1); // undefined
// if (1) {
//   console.log('1b' myName1); // undefined
//   var myName1 = 'Sunil';
// }
// console.log('2a', myName2); // error: myName2 is not defined
// if (1) {
//     console.log('2b', myName2); // undefined
//     let myName2 = 'Sunil';
// }
// console.log('3a', myName3); // error: myName3 is not defined
// if (1) {
//     console.log('3b', myName3); // undefined
//     const myName3 = 'Sunil';
// }

// Hoisting is a really tricky part of JavaScript development, and shouldn't come up too often. That said, if you ever find yourself getting weird reference errors and can't figure out why, consider hoisting as the culprit.

