// The Document Object Model (DOM) 
// It's an object representation of the HTML elements of a webpage
// It's the bridge between the content and the browser (an Application Programming Interface - API)

// It's not JS even though we do write JS to manipulate it
// JS was originally written to allow us to change elements based on user interaction with a website
// It's not HTML or CSS
// It's not static

// It's language neutral API (other languages can manipulate it)
// It's a tree like structure representing your content, structure and style
// It's dynamic

// When a web page is loaded into a browser, the browser first looks for the HTML file. 
// The browser uses the HTML file as a blueprint, or instructions on how to build the page (this coupled with the CSS file later). 
// The browser parses these instructions and builds a model for how the page should look and act using Javascript. 
// This model is a Javascript Object containing every element in order on the page. This Object is referred to as the DOM, or Document Object Model.

// The DOM is built as a data structure known as a 'Tree', because parent elements have nested children elements (or leaves). 
// As with physical trees, we can follow branches of the tree to get to the exact leaf (or leaves) that we want to access. 
// Each branch of our DOM tree can be it's own tree.

// When the DOM is built and the webpage is loaded, developers get access to it in the form of the global Javascript object document. 
// document contains the entire hierarchy of the page, each element (or DOM node)
// It also contains dozens of built in methods and properties. We can use these methods and properties to manipulate what we see on the screen.

// You can edit the DOM (either with code or just playing in chrome dev tools) and it will update the display live
// Notice that if you refresh the page, the changes you made are gone! That is because the elements you were editing existed in the DOM and were not permanent!


// DOM Selectors

// To manipulate elements on the DOM, we need to select them. 
// There are many ways of doing this; for example, we can select the body and the head just by asking for them (document.body, document.head). 
// Thankfully, document has several built-in methods for accessing the exact element(s) we want.

// getElement Methods
// These are the original methods for selecting elements from the DOM. 
// They each take a single string as the only argument, containing either the id or class you are looking for.

document.getElementById('idName');
// This method will take a single string as an argument containing the id of an element, search through the DOM, and return the matching element.

document.getElementsByTagName('p');
// This method will take a single string as an argument containing the element name of the elements you want to select. 
// It will return an array-like object called an HTMLCollection containing all the elements that contain the element name supplied. 

document.getElementsByClassName('className');
// This method will take a single string as an argument containing the class of the elements you want to select. 
// It will return an array-like object called an HTMLCollection containing all of the elements that hold the given class.


// querySelector Methods
// These are the newest element selection methods added to the DOM. 
// These methods allow us to select element(s) based on CSS style selectors (remember . is class and # is id). 
// Each method takes a string containing the selectors and returns the element(s). 

document.querySelector('.custom-style');
// This method will search for and return the first element that matches the value passed into the method.

document.querySelectorAll('queryString');
// This method will search for and return ALL elements matching the query string.
// This method returns these elements in an array-like object called a NodeList.


// The Difference between HTMLCollection, NodeList, and Array
// When we use getElementsByClassName() or querySelectorAll() we get back either an HTMLCollection or a NodeList respectively. 
// We refer these to as 'array-like objects.' 
// We have seen an array-like object before (the arguments object in a function). 
// They both have numerical zero-based indices and the length property, but that is all they share with an Array. 
// NodeList does take it one step further, and has access to .forEach. 
// There are no .reduce or .map or any other array method.

// Pro tip: The Array class contains a method we can use to create an array from an array-like object, called .from(). 
// To use this, we would give .from the array-like object as its only argument.
const arrayLikeObject = document.querySelectorAll('.nav-item');
console.log(arrayLikeObject[2]);
// "<a href='#' class='nav-item'>Blog</a>"

Array.from(arrayLikeObject)




// After we have captured our element (eg. const element = document.querySelector('#idName'); 
// we can use that instance of the element we selected to access and assign values to properties natively contained on it. 
// Remember that when we're changing things on the DOM we're not changing the HTML. 
// It's changing the JS representation of the HTML.

// .textContent
// Gets and sets the text of an element. Essentially whatever text is between the open and closing tags of an HTML element.
// Can use the assignment operator ( = ) to reset the text of an element
// Setting this property on a node removes all of its children and replaces them with the new single text node.
// <div>Something Here</div>
element.textContent = 'Something New';

// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
// It is not uncommon to see innerHTML used to insert text into a web page. 
// There is potential for this to become an attack vector on a site, creating a potential security risk.
// For that reason, it is recommended that you do not use innerHTML when inserting plain text; instead, use Node.textContent. 
// This doesn't parse the passed content as HTML, but instead inserts it as raw text.



// .setAttribute()
// This method (or property) is used as a way to set or reassign an attribute on the element.
// '.setAttribute()' is a method that takes two arguments, the attribute to set, and the value to set to that attribute.
element.setAttribute('src', 'http://www.imagsource.com/image.jpg')
// Can also use the pattern: element.'attrName' = 'value'.
element.src = 'http://www.imagsource.com/image.jpg'


// .style
// Every element contains a style object. This property accesses that style object. The style object contains every available style as a key and a value as the value.
// It is important to note, that these are NOT the CSS styles, these are inline HTML styles.
// These styles are associated with the HTML inline style set on the element
// eg: <div style="color: red;">DIV STUFF</div>
// You can access and change a property on the style object by using the assignment operator =.
element.style.color = 'blue';

// you could grab the element in the same line if you want:
const mainHeader = document.querySelector('.main-header').style.color = 'red';

// Changing a property on the style object will effectively give this element an inline style.
// Inline styles have the highest specificity, overriding any other selector except !important.
// VERY IMPORTANT to note that this does NOT access or change anything in the CSS file.
// can't use hyphens in style properties because JS thinks of it as a minus sign and will try and do math operations
// Whenever a CSS property contains a dash, we must use camel casing in JavaScript.

// .some-class {
//   background-color: gray;
// }

// The JavaScript version would look like this:

const someClass = document.querySelector('.some-class');

someClass.style.backgroundColor = "gray";

// Pro Tip: Don't forget the string when you assign a value to a CSS property.
// note that the variable name can't have a dash (minus sign) either.



// .className, .id
// .className accesses or assigns a string containing all of the classes on the element.
element.className = "green"
// .id accesses or assigns a string containing the id of the element.



// .classList
// classList will return an array-like object of all the classes on the element. 
// There are many useful methods available on classList.
// classList is a DOMTokenList.
myDOMTokenList = element.classList
// A DOMTokenList is an array-like object with a numerical zero-based index, a length property, also the .contains() and .forEach() methods.
// It also has a property 'value' which is a string of all classes which we would normally get from class name 
// Most notably the methods .add() .remove() and .toggle() exist. All three take a single string representing the class.
// .add('className') and .remove('className') do as their names indicate.
element.classList.add('large')
element.classList.remove('large')
// .toggle('className') will add the class if it does not exist and remove it if if does.
element.classList.toggle('green')


// .children and .parentNode
// These properties are used for accessing relatives of the element.
// .children returns an HTMLCollection of all the children of that element.
element.children
// .parentNode returns the parent element of that element.
element.parentNode


// // Creating a new element
// An important feature of the DOM is the ability to create brand new elements dynamically. 
// Using the document.createElement() method, we will be able to create a brand new element, style it, and add it anywhere on the DOM we would like.

// .createElement
// .createElement creates a brand new element based on a given string.
// New element exists in memory, but not on the DOM yet.
// Can use any DOM property or method to style and manipulate the element.
document.createElement('h1') 

// .appendChild() and .prepend()
// These methods add child elements to parent elements.
// .appendChild(child) will take an element and add it to it's children. 
// It will add it to the 'end' physically so if the children are displayed in order it will be the last.
parentElement.appendChild(childElement)
// .prepend(child) adds a child to the beginning, displaying it first.
parentElement.prepend(childElement)


const headerEl = document.querySelector('header')

const subHeadline = document.createElement('h1')
subHeadline.textContent = "Another Headline!"
subHeadline.style.fontSize = "3.4rem"
subHeadline.style.color = "slategrey"
// <h1 style="font-size: 3.4rem; color: slategrey;">Another Headline!</h1>

headerEl.appendChild(subHeadline)
// This child is not on our HTML, but it is appended on our DOM!

