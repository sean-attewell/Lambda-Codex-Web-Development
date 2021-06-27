// JavaScript is a programming language that was first created in 1994 as a way to add functionality and interactivity to a website. 
// JavaScript was originally designed to be used purely on the front end as a way for web developers to add functionality to their web pages
// Recently, the introduction of the "V8 engine" by Google has improved the speed and functionality of JS.
// That led to the development and release of exciting new front end JavaScript frameworks and eventually Node.js, a way to run JavaScript on a server (back end).

// The creators of JavaScript wanted to borrow concepts from other programming languages, such as Scheme, Java, and C. Those of you with backgrounds in other languages may see things that look very familiar, mainly the use of classes and Object-Oriented Programming (OOP) architecture. 
// Keep in mind that JavaScript is not a "true" OOP language

// JavaScript is considered a 'loosely' typed language, in which types do exist, but they are not enforced. You do not have to declare a type when creating a variable or an array, for instance.

// JavaScript is run from a file with the extension of .js (e.g., fileName.js) and loaded into your browser via the script tag in your HTML


// let is a new ES6 variable keyword. This will assign a variable much like var, but with a little bit different behavior. Most notably, it differs by creating "block level scope".

// Variables declared with var are function scoped while variables declared with let are block scoped

let firstName = 'Alice';
firstName = 'Bob';
console.log(firstName) // Bob


function foo() {
  var x = 1;

  function bar() {
    console.log(x); // 1
  }

  bar();

  console.log(x); // 1
}

foo(); // prints 1 twice
// console.log(x); // ReferenceError: x is not defined

if (true) {
  let y = 1;
  
  if (true) {
    console.log(y); // 1
  }

  console.log(y); // 1
}

// console.log(y); // ReferenceError: x is not defined

// var can be re-assigned and changed.
// let can be re-assigned but not changed.
// const cannot be re-assigned nor changed.

// This doesn't work
// let sale = true;
// let sale = false;

// This works
let sale = true;
sale = false;

// With var you can do it
var sale2 = true
var sale2 = false


// let does work like var in terms of declaring variables without defining them.

let a;
var b;

// a variable inside a block that is defined by assignment alone becomes a global, automatically.

for (i of [1,2,3,4]) {
    console.log(i); // 1 2 3 4
}
console.log(i); // 4

// so make it a rule to always use a keyword to declare variables

// Undefined and Null


// You will get undefined when you are looking for a variable that does not have a value yet. 
// undefined simply means what you are asking for does not exist.

let zee
console.log(zee) // undefined

// null is an object that we, the developers, set when we want to tell other developers that the item they are looking for exists, but there is no value associated with it.
let zoo = null
console.log(zoo) // null


// modulo operator (%)

// This math operator will divide two numbers (integers or floats) and return only the remainder
console.log(21 % 5) // returns 1
// I have 21 items I want to divide into 5 piles
// I can put 4 in each pile and have 1 left over

// It works as a 'wrap around' function
console.log(5 % 21) // returns 5
console.log(20 % 21) // returns 20
console.log(21 % 21) // returns 0
console.log(22 % 21) // returns 1
console.log(23 % 21) // returns 2

// Viewed this way, you can see the prior remainder example as 21 having wraped around entirely 4 times, starting its 5th wrap around
console.log(21 % 5) // returns 1

console.log(0 % 5) // 0
console.log(1 % 5) // 1
console.log(2 % 5) // 2
console.log(3 % 5) // 3 
console.log(4 % 5) // 4
console.log(5 % 5) // 0
console.log(6 % 5) // 1
console.log(7 % 5) // 2

// 3 % 5 is 3 beacuse it hasn't wrapped around yet. 
// 3 % 5 is also 3 beacuse 3/5 is zero with a remainder 3.
// I have 3 things I want to put into 5 piles
// There aren't enough to share evenly between 5 piles
// So I can put zero into each pile and have 3 left over

// rounding

Math.round(6.5) // returns 7
Math.round(6.45) // returns 6
Math.floor(6.999) // returns 6
Math.ceil(6.0001) // returns 7

// exponents
Math.pow(3,2) // returns 9


// Truthiness

// When using an if statement or other statements that expect a Boolean value (such as the !, NOT), if the expression given is not a Boolean value, 
// JavaScript will do something called type coercion and transform whatever it is given into a Boolean value. This is known as "truthy" and "falsey"

// items that are interpreted as true
true
1
' '
//[] // an array
//{} // an object
// function() {}

// items that are interpreted as false
false
0
undefined
null
''


// ===

// The triple equal will compare everything about the two items, including type, and return if they are exactly equal or not.
// (Something to note: there is also a "double equals" ( == ) sign which will compare two items, but it allows type coercion 
// so a string and an integer can be considered equal (1 == '1' // true). Due to this, it is considered bad practice to use the double equal sign. 

1 === 1;          // true
1 === '1';        // false

// With that in mind, we can introduce the "not equals" ( !== ) sign. 
// This will return true if the items are NOT equal to each other, in any way. This, like the triple equal sign, takes type into account.

1 !== 1;          // false
1 !== '1';        // true


// Logical Operators

// (100 > 10 && 10 === 10) 
// will return true because both statements are true

// (10 === 9 || 10 > 9) 
// will return true because one statement is true

// The last logical operator is the "NOT" operator. It is written as a single exclamation mark (!).
// (!(1 === 1)) 
// false

// Note:
// The expressions are evaluated in order, and the computer will skip any redundant expressions. In an && statement, if the first expression is false, the second expression will not be evaluated because BOTH expressions need to be true. Same for the || statement. If the first expression is true, the second will not be evaluated because there only needs to be one true statement to fulfill the requirements of the operator


// Conditionals and Control flow

if (1 + 1 === 3) {
  console.log('This will be skipped!'); // since 1 + 1 is NOT 3, this will be skipped
} else if (1 + 1 === 2) {
  console.log('This code will be run.'); // since 1 + 1 is equal to 2, this will be run
} else if (1 - 1 === 0) {
  // 1 - 1 IS 0, however, the previous if statement was already true, so this will be skipped
  console.log('This code will NOT be run.');
}

// The else statement will always come at the end of an if-else if chain, and will act as a default. If none of the expressions returned true, the else code block will be run no matter what. If any of the previous if or else if expressions are true, the else statement code block will not be run.

if (1 + 1 === 3) {
  console.log('This will be skipped!'); // since 1 + 1 is NOT 3, this will be skipped
} else if (1 + 1 === 3) {
  console.log('This code will NOT be run'); // since 1 + 1 is NOT 3, this will be skipped
} else {
  console.log('This code will be run'); // since the above were skipped, this will run
}


// Remember, when using a block of conditionals, only ONE of the statements will be run, even if there are multiple statements that are true. The same can not be said for multiple if statements; they will run if true regardless of statements before and after.


for (let i = 0      ; i < 10                 ; i++          ) {
  //  | declare a var | conditional expression | increment var|
    console.log(i);
  }

// First, we must declare a variable (usually i) as a starting point. 
// Then, we will have a conditional expression. 
// The loop will continue happening until this statement is false


// While loop

let count = 1;
while (count < 10) {
    count +=2;
    console.log(count);
}

for (let i = 0; i < 5; i++) {
  var coinFlip = Math.round(Math.random());
  if (coinFlip === 1){
    console.log("Heads")
  }
  else{
    console.log("Tails")
  }
}

// Function Declaration Hoisting
// JavaScript utilizes a two-pass compiler when executing lines of code that we write. This means that anytime we run JavaScript in the browser, the browser will take two passes over our code. The first pass builds up references to all of our code, declaring variables and functions and the like. The second pass applies values to the references that were found, thus actually running the code.

// Function declarations are defined in the first pass. The compiler is made aware of the function declaration and adds it to the top of the execution order for your code. This concept of putting a function higher in the execution order for later use is known as hoisting.

// What does this mean for you? It means that function declarations can be invoked before they are defined! Let's take a look at an example:

// This code is valid above the definition!
console.log(add(2,4)) // 6

function add(a,b){
  return a + b;
}

// Be aware that hoisting applies to function declarations and not function expressions or arrow functions.


// Function Expressions
// Function expressions have unique differences when compared against function declarations:

// A variable is used to store the function for later use
// Anonymous functions are used
// Function expressions are not hoisted. They can only be invoked after a definition has been placed in the execution stack.
// Example of a function expression:

const add_2 = function(a,b){
  return a + b;
}
console.log(add_2(2,4)) // 6

// Notice the function doesn't actually have a name. This is what we refer to as an anonymous function. 
// Because we are using a const named add we don't need to name our function anything. 
// We can simply execute the function when add is referenced by invocation.

// Arrow Function Expressions
// Arrow functions are fancy looking *function expressions* with a major feature removed, the function keyword

const add_3 = (a,b) => {
  return a + b;
  }

console.log(add_3(2,4)) // 6


// streamlined arrow syntax
const add_4 = (a,b) => a + b;

console.log(add_4(2,4)) // 6

// We do not need our {} because they are redundant in the rules of arrow functions. 
// Return statements are not needed in arrow functions

// Often, developers will go too far with syntactical sugar, and the code becomes very hard to read. 
// Arrow function expressions are great to use with array methods, for example, but may not be a great choice in a lot of other places.


// When Not To Use Arrow Functions
// There is a time and place for arrow functions. Here is a list of times you should *not* be using them:

// Event handlers (Unless they are inside a class constructor!)
// Object methods
// Prototype methods
// Anytime you need to use arguments Object


// Parameters are how functions accept changing data

// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.
// Parameters are initialized to the values of the arguments supplied.

// Arguments can be ANY data type (string, number, Boolean, object, array, even other functions!). 
// Unlike other languages, JavaScript does not require us to set the data type when we write the function


// The only way for us to use data that is local to a function is with the keyword return. return, essentially, lets data escape a function. 
// Nothing other than what is returned can be accessed outside of the function. 
// return is always the last thing in a function because when the function hits a return statement, the function immediately stops everything else that it is doing.
// We can also assign the value of a return statement to another variable, and we will now have access to the data returned from the function.


function addTwoNumbers(num1, num2) {
  const sum = num1 + num2;
  return sum;
  console.log('This will never be reached');
}

const newSum = addTwoNumbers( 1, 2 );
console.log(addTwoNumbers(1,2)); //returns 3
// console.log(sum); // ReferenceError: sum is not defined
console.log(newSum); // returns 3 - value is held in newSum

// Note: We will never be able to have access to the actual variable created in the function. We will only have access to the data that variable was assigned to.

function flip(repeat){
  for (let i = 0; i < repeat; i++){
    var coinFlip = Math.round(Math.random());
    if (coinFlip === 1){
      console.log("Heads");
    }
    else{
      console.log("Tails");
    }
  
  }
  }
  
flip(4); // <- will flip coin 4 times