// Javascript's real power lies in its ability to make webpages interactive. 
// In addition to manipulating elements, Javascript also allows us to add features and make modifications to our site by directly reacting to user interactions. 
// Think about a button click, drag and drop, zoom, or any number of user interactions. We create functionality for those interactions using JavaScript
// Now that we know how to manipulate and modify DOM nodes, we can learn about events.

// Every user interaction with a site is an event: a click, moving the mouse, scrolling the page, pressing a key on the keyboard, these are all events on the page, 
// and the browser can detect all of them. 
// When an event happens on a page, it is known as a trigger.

// Now that we know what an event is and we know the browser is always tracking them, we need to be able to listen for specific events on specific elements. 
// Did a user click that button? Did a users mouse hover over an element? Was there text entered into the input field? 
// When one of those events happens on that element, we can do something about it. The tracking process and subsequent action taken is called an event listener. 
// We put an event listener on an element and give it a callback. 
// When that event is triggered on the element, the callback is run.


// .addEventListener
// Once we have an element selected, we can use the '.addEventListener' method on that element. 
// .addEventListener takes two arguments, first the event to listen for and, second, the callback to fire when that event is triggered.
element.addEventListener('click', callback);

// We can add event listeners for as many events as there are for each element, meaning we can listen for a mouseclick, keypress, hover, and more all on the same element. 
// Although to do so we need to call .addEventListener and pass in a callback for each one.

// The callback (also known as an event handler) will take a single argument; this is known as the Event Object. 
// This is a Javascript Object and contains all we need to know about the event and the element it happened on.

element.addEventListener('click', (event) => {/*Handle event*/ event});

// One of the most important properties of the event object is .target, this property will give us all of the info about the DOM node where the event happened. 
// the target is the innermost thing we clicked (i.e. the button is within a div within the body etc)
// the event object also has a path property, which is an array of how the event travelled through the DOM to get to the target!
// button, div, body, html, document, window
// the target has many of the same properties as a regular DOM node, .children, .parent, .style, innerText, etc. 
// We can use these properties to manipulate the element itself, or it's relatives.
// for example to change the background color we would write the following: 
element.addEventListener('click', (event) => { event.target.style.backgroundColor = 'blue'; });

// Depending on the type of event listened for, we can have access to other information about the event as well, such as the key pressed (in the form of a code) and other things.


const theButton = document.querySelector('#theButton')

// The old way:

theButton.onclick = function (event) {
  console.log(`a ${event.type} happened!`)
}

// The event listener way means you can add multiple event listeners to the same element

theButton.addEventListener('click', event => {
  console.log(`a ${event.type} happened!`)
})

theButton.addEventListener('click', event => {
  console.log(`another thing happening on the same ${event.type}!`)
  event.target.style.backgroundColor = 'red';
  document.body.style.backgroundColor = 'blue' // Doesn't have to effect the same element
})


// Event propogation

// like a pyramid, if you stand(trigger an event) on a child element, you are also triggering that same event on every parent element all the way up to the body. 
// This process is called event propagation. 
// If you have an event of the same type on a parent element and a child element, and you trigger that event on the child element, it will also trigger on the parent.

// The event fires first on the most deeply nested element (the target element), e.g. the button.
// This is why the path property of the event object puts the button in position index 0
// Shows the order: button, div, body, html, document, window

function listener(event) {
  console.log(`event passing through ${event.currentTarget.nodeName || 'window'}
  target --> ${event.target.nodeName}`)
}

theButton.addEventListener('click', listener)
theDiv.addEventListener('click', listener)
document.body.addEventListener('click', listener)
document.addEventListener('click', listener)
window.addEventListener('click', listener)

// you could shuffle these around and the console would log them in the same order

// the 'or' is because window doesn't have a nodeName property 

// The target always stays the same (BUTTON if you're clicking on the button).
// the target is always the most deeply nested thing
// if you click on the div then the div will be the target, as it propogates out through the others

// If you have mutliple event listeners on the button, they will all fire before the div event listener fires and so on.
// The order they are added to the same element is important.


// So you click the button

// Capture phase
// The event object enters the DOM at the root of the tree, and by default travels straight to the target

// Target phase
// When the target is reached, this is called the target phase (listener on the target goes boom)

// Bubbling phase
// The event object will start bubbling up, firing listeners as it goes.
// In our example no event listener was added to html, so no nothing fired there and it keeps bubbling up to document and window


// If you want to instead stop the propogation at the body phase in the bubble up
document.body.addEventListener('click', e => e.stopPropagation())
// Earlier event listeners in the bubble will fire, the other event listener on the body will fire, but no more after that

// This will stop the other body event listener from firing: 
document.body.addEventListener('click', e => e.stopImmediatePropagation())
// So just button and div will fire now.


// we can configure our listeners to go boom on the capture phase!
document.body.addEventListener('click', listener, {capture: true})
// Now fires first in the capture phase, but not on the bubbling back up.



// .preventDefault
// Some elements have a native default reaction to certain events. For example, form elements will refresh the page on submit. 
// .preventDefault is a method on the event object, and it will stop an HTML element from reacting in its default way. 
// .preventDefault will be used less than .stopPropagation, but it is important to know about as well.


