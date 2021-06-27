// Where arrays hold multiple items related to each other, Objects will hold a lot of information about one thing.

const newObj = {};

// Objects can hold many key:value pairs. They must be separated by a comma (no semi-colons inside of an object!). 
// Keys are unique in an object. There can be only one key of that name. Although, multiple keys can have the same value. 
// Values can be any JavaScript type, string, number, Boolean, array, function or even another object.

const user = {
  username: 'dan.frehner',
  password: 'abc123',
  lovesJavascript: true,
  favoriteNumber: 42,
};

// With dot notation, we call the object name, a dot, and the key name, similar to the .length property on an array 
// (hint: the length property is a key:value pair!):

console.log(user.lovesJavascript); // true
console.log(user.username);        // dan.frehner

// Bracket notation is just like calling an item on an array, although with brackets we MUST use a string or number
// or variable pointing to a string or number
// In the wild, you will see brackets almost always being used with variables.

const passString = 'password'; //save key string to global variable
user['lovesJavascript']; // true
user['username'];        // dan.frehner
console.log(user[passString]);        // abc123


// Assigning Values
// We can assign values when we create the object, or later on with dot or bracket notation. 
// Other than syntax, assigning values works just like assigning variables.

const newUser = {
  isNew: true,
}

const loveJSString = 'lovesJavascript';

newUser.username = 'new.username';
newUser['password'] = '12345';
newUser[loveJSString] = true;

console.log(newUser)
// { isNew: true,
//   username: 'new.username',
//   password: '12345',
//   lovesJavascript: true }

// If we want to remove a property, we can do it using the delete keyword:

delete newUser[loveJSString];
console.log(newUser) // { isNew: true, username: 'new.username', password: '12345' }


// Just about everything in JS is an object.
// Arrays are objects with numerical keys
// Strings are objects under the hood with built in methods
// functions are objects too
// The entire JS runtime is an object, it's a window in a browser, or global in node js

// The only exceptions are primitive data types like false, true, undefined etc


// Properties and Methods

// Think of a method as a function that is the value in an object's key:value pair. 
// For example, when calling Math.pow(2, 2) we are actually referencing a function that is assigned to the key pow on that Math object. 
// Similarly, pow(2,2) would throw a ReferenceError unless there was a function in scope named pow.

// Primitive data types (and other data types) have built-in method functionality as well. 
// These extend the functionality of the primitive data types and allow us to gather information about them, or manipulate them in some way. 
// .pop, for example, is a method that acts on the array data type. 
// Both properties and methods will be accessed using the dot notation where we give the name of the variable, a dot, then the name of the property or method.

// objectName.methodName();

// Properties
// Properties allow us to access data from a data type. 
// There are many different properties on every data type that will give you a bit of information about that specific object.

const school = 'Lambda';
school.length; //6


// Methods
// Methods allow us to manipulate a data type. Methods are different from properties in that they need to have parentheses on the end. 
// Its important to note that methods are just functions and in order to invoke a function you use parentheses

const num = 42
console.log(num.toString()); //"42"


// Global objects and methods

// JavaScript has a number of built-in objects for us to use. These global objects extend the functionality of the language for us for free. 
// We have already seen, and have been using, the console object and its method log. 
// Another one of these objects is Math. Math has a number of methods on it just like console has log. 
// To add to this, some of our data types also have built-in methods.

// There's no purpose in trying to memorize all of the properties and methods associated with primitive or built in data types. 
// Instead, focus on understanding how they work and getting comfortable with their unique use cases.

// Methods

// In addition to built in methods, we can create methods inside objects
// We can set a key to a name, and the value to a function

const newObject = {
  sayHiMethod: function() {
      console.log('Hi Everyone!');
  },
}

newObject.sayHiMethod(); // Hi Everyone!


// for…in Loops

// Objects do not contain numerical indexes so the standard loop will not work for objects. 
// JavaScript has a second type of for loop built in called the "for…in" loop.

// After the for keyword, in parentheses, we will declare a variable (let variableName), use the keyword in, and then state the name of the object. 
// This will loop over each key in the object and finish when all of the keys have been iterated over. 
// We can use this key, and bracket notation, in our for loop to access the value associated with that key.

const user_object = {
  username: 'dan.frehner',
  password: 'abc123',
  lovesJavascript: true,
  favoriteNumber: 42,
};

for (let key in user_object){
  console.log(key);
  console.log(user_object[key]);
}

// username
// 'dan.frehner'
// password
// 'abc123'
// lovesJavascript
// true
// favoriteNumber
// 42



// The 'this' Keyword

// Objects have a self-referential keyword that may be applied in each object called this. 
// When called inside of an object it is referring to that very object. 
// this can be used to access other keys in the same object, and is especially useful in methods:

const user_2 = {
  username: 'dan.frehner',
  password: 'abc123',
  lovesJavascript: true,
  favoriteNumber: 42,
  userSaysHi: function(){
      console.log( this.username + ' says hi!');
  },
};

user_2.userSaysHi(); // 'dan.frehner says hi!'

// just about everything in JavaScript is an Object. 
// Arrays are just objects with numerical keys, 
// Strings are objects under the hood with built in methods, 
// functions are actually objects with their own special properties,
// the entire JavaScript runtime is an object (window in a browser, or global in Node.js). 
// The only exceptions to this rule are primitive data types (false, true, undefined, and the like).

