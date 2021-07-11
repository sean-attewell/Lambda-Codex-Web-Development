// Components
// A component is made of several parts: HTML, CSS, or JavaScript brought together for reuse in a website or application.

// The HTML gives us a great starting point for a button component, but we need to style it for reuse.

// Writing CSS for components is more about rationale than syntax. Components should be modular or stand-alone. 
// With that in mind, you should try to think of your component CSS in a way that could be moved around at any moment and not reliant on any other styles being in place.
// One way that can help you control your styles is to use a specificity chain that only matches up with your component

// If you're using a preprocessor, a common practice is to have your preprocessed file named after the component. 
// You could then import your component name into the main file. 
// Here is an example of the import you could use:

// @import custom-btn.less

// and then what the file could look like:

// .custom-btn {
//   // custom styles here
// }

// You may be thinking, "wait, that's it?" Yep! 
// Using components is as simple as building styles so that they don't rely on any other element on the page and don't bleed over into another component.


// Components - JavaScript:
// JavaScript is used to consume the data and output the content into the DOM. 
// JavaScript's involvement in components is the glue that ties everything together. 
// We can use Javascript to consume the HTML and return a component version of it.


// *** You can create the compotent (e.g. button element) in JS
// Give it text content and the relevant CSS classes in JS
// Give it event listeners for functionality in JS
// It is not in the HTML whatsoever. Just gets created for the DOM.

// Put all that in a buttonCreator function so you don't have to keep repeating the code to set it up if you make a second button
// Just parent.appendChild(button1) to put it on the DOM

// Things you want to be dynamic, like the button text, you'll add a function parameter for
// could have a parameter for whatever you want

function buttonCreator(buttonText){
  const button = document.createElement('button');

  button.textContent = buttonText;

  button.classList.add('button');

  button.addEventListener('click', (e) => {
      console.log('clicked!');
  });

  return button;
}

let firstButton = buttonCreator('Button 1');

let secondButton = buttonCreator('Button 2');

parent.appendChild(firstButton);
parent.appendChild(secondButton);

// And just like that, we can create as many new button components we want without repeating ourselves!


// We want a way to create components based on the data present. This data can come in many different forms. 
// In this simple case, we are using an array of strings:

const data = [
    "Button One",
    "Button Two",
    "Button Three",
    "Button Four"
]

// in reality this may be data unknown to us because it is generated live

// One of the simplest array methods is .forEach - it runs the array through a loop, passing each item to our callback function. 
// It doesn't return a new array or mutate the data at all (unless we tell it to). 
// .forEach is a simple way to iterate over the array, create components, and add them instantly to the DOM.

data.forEach((arrayItem) => {
  let newButton = buttonCreator(arrayItem);
  parent.appendChild(newButton);
});

// That was super simple! Just like that, we created a new component for each item in the array and added it to the DOM. 
// No matter how many items are in the array, it will still work. 

// One downside to this method is that we add the items to the DOM instantly, what if we wanted to create the components and add them at a different time?


// We know that .map returns a new array with the items transformed (by our callback). We can then do whatever we please with this array.

let newComponents = data.map((arrayItem) => {
  let newButton = buttonCreator(arrayItem);
  // Remember, we always need to return something when we use .map
  return newButton;
});

// Now that we have an array of DOM elements (components), we can do whatever we'd like with them. 
// We can wait to add the components to the DOM, or we can manipulate them further, the sky is the limit! 
// Let's add them to the DOM now, using .forEach

newComponents.forEach(component => {
  parent.appendChild(component);
});
