// When JavaScript was first introduced, inserting it into a web application meant writing the code inside of a script tag inside of an HTML file. 
// The script ran sequentially, that is, from top to bottom. Back then, if you wanted to use the same code in another project, you had to copy and paste it. 
// There were also performance issues - namely, functions and variables were all global - if you weren't careful, you could quickly see the trouble with 
// declarations holding unexpected values. 
// Eventually, including a <src> attribute did allow for more reusability, but it was still dependant on order and still globally scoped.

// Then, a little over ten years ago, developers used module patterns like IIFE (Immediately Invoked Function Expression, pronounced 'iffy'). 
// This function runs as soon as it is defined. 
// Take the seemingly normal looking code below. 
// On closer inspection, you'll notice the enclosing parentheses wrapping the anonymous function, as well as another set of calling parentheses,
// which results in the immediate execution of the code. 
// While this keeps the global space tidy and grants privacy to any inner variables, it's somewhat fragile and none too eloquent.

(function() {
  //lexically enclosed function statement
})();

// Put simply, an Immediately Invoked Function Expression is a good way at protecting the scope of your function and the variables within it.
// You will often (but not always) see IIFEs used in frameworks/libraries such as jQuery. 
// They will often wrap all of the code for their framework/library inside of an IIFE in order to protect the scope of its variables 
// and also to make sure that everything is executed without the user having to do anything.

// Normal function
function addTogether() {
  var x = 20;
  var y = 20;
  var answer = x + y;
  console.log(answer);
  }
  
addTogether();

// From this point, we can call the addTogether function as many times as we like.
// But maybe this isn’t desirable, and we simply want to call a function in order to get an output, but that’s it — 
// we’ll never want to use it again and don’t want our program to ever be able to accidentally access it.
// Now the first thing to mention here is that, in the above example, our variables are safe — safe insofar that they are immutable 
// (which is just a fancy, technical term for saying that they cannot be changed in the future).
// So that’s great, our variables cannot be accessed, but how do we make it so that our function also cannot be accessed.

// That’s where IIFE’s come in.
// So the first thing we do is wrap our entire addTogether function in brackets, like so:

(function addTogether() {
  var x = 20;
  var y = 20;
  var answer = x + y;
  console.log(answer);
});

// This is actually the first part of creating what is known as a function expression. Now at the moment, it’s not quite your typical function expression, 
// in that function expressions will usually be anonymous. 
// What we have here is called a named function expression. 

// because we are creating one of those function expression things that I just said about ten times, we don’t actually need to give the function a name anymore, 
// because the plan is that once we’ve created an IIFE, we have no intention of calling the function again. So let’s get rid of the name:

(function() {
  var x = 20;
  var y = 20;
  var answer = x + y;
  console.log(answer);
});

// Okay, we’re nearly there.
// Finally we need a way to be able to call this function, but how do we do that now given that we don’t have a name to refer to? 
// Well, we simply add a pair of brackets at the end of the function (but just before the semi-colon), like so:

(function() {
  var x = 20;
  var y = 20;
  var answer = x + y;
  console.log(answer);
  })();

// And there you have it, your very own IIFE!
// TL;DR
// An Immediately Invoked Function Expression is a good way at protecting the scope of your function and the variables within it



// Server side JS
// The release of Node.js in 2009 meant that JavaScript could now execute outside of the browser. 
// With the adoption of a common JavaScript specified standard library known as CommonJS, we now have defined terms for sending data to and from our file systems. 
// These advances were a complete game-changer for JavaScript developers, but all still relied heavily on third-party bundlers and transpilers to address common issues. 
// Tools like webpack and rollup would compile packs of modules and assign any missing dependencies before sending them off to the browser. 
// Transpilers such as Babel handle translating source code for the browser and convert the latest features of ES6 (any not supported in the browser) into compatible ES5. 
// While handy, all of these programs require downloading, updating, and configuring.


// JS modules (ECMAScript modules)
// This brings us to today. The first standardized syntax for using modules in JavaScript.
// Where past methods relied on specific functions or third-party libraries, with the latest version of JS, we can now export functions, data, components from our files 
// by merely prefixing the export keyword. 
// Then, when we want to bring such features into our file, we use the import keyword, the name of the exported item, and specify where it's located.
// No dependencies or configurations, everything is ready to go right out of the box.

// export exports a single named function that can now be imported into another module using the import keyword

export const emphasize = str => {
  return str.toUpperCase();
};

// When export default is specified (either inline or at the end of the file) the declaration that follows is exported by default 
// and additional modules will need to be exported (and imported) by name.

const emphasize = str => {
  return str.toUpperCase();
};

export default emphasize;


// Another advantage of modules is that top-level variables do not pollute the global object. 
// In addition to connecting our project files, bringing in a library or an external component to our project is a matter of downloading it with our CLI 
// and then directly importing it to our file. 
// Fonts, loaders, middleware, pretty much anything you need. 

// Importing a file/module starts with declaring the import keyword followed by the name of the import, then the from keyword followed by the module specifier. 
// The module specifier usually is a file path or an npm module name

// A single named export
import { a } from './directory/fileName'

// Multiple named exports
import { item1, item2, item3 } from './directory/items.js'

// Exported as default
import Component from './folderName/Component.js'

// both exported as default ('whatever') and other exported items:
import whatever, { sum, multiple, profession } from './utils'


// File Location	         Path prefix
// Current Directory	     ./
// Parent Directory	       ../
// Parent of Parent Dir	   ../../
