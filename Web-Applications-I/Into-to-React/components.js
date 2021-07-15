// codesandbox.io will give you a react template to play with

// React is a user interface component library that is used in various forms to create complex, rich user interfaces. 
// It's not a framework! Only a library that does one thing really well... render UI.
// It's scalable and reusable. Everything is a component.
// React is unopinionated when it comes to how you manage your data (redux etc)
// Facebook had a need to build something that could power their user experiences in such a way that was decoupled and unconcerned when and where the data was received.

// React is one of the most popular UI libraries today, and in terms of Single Page Applications many (including the React team) tend to think of the library as the "V" in MVC.
// That is, the View layer of the Model, View, Controller paradigm. 
// React is a pattern, a mindset, that will help developers that use it, build small, reusable pieces of UI that can be easily put together to make a large scale application.

// Components are the building blocks of React applications. We use components to display some data (often called "state") to the screen for our users
// Components will need to share state, so we will learn how to do this with a helper object called props.


// React is going to take that knowledge you have learned, and abstract away a lot of the document.getElementByClassname syntax. 
// As you'll see later on, your entire application will live within one targeted DOM element. React will handle the rest for you.

// Because we have such rich user interfaces today that interact with ever-changing data, users interacting with DOM elements, and lots of animations and events firing, 
// the DOM is certainly doing a lot of work
// Simply put, we need a way to offload a lot of the state (data) that our apps need to use, from the DOM.

// Lets face it, working with the DOM API is hard. The React team recognizes this, so they built a simple engine called the virtual DOM 
// that interacts with the actual DOM for us. 
// We tell the virtual DOM which elements and state (data) to render to the actual DOM, and it will do so. 
// Beyond that, it will "react" when the state (data) in our app changes, and will update the DOM accordingly. All on its own!

// In a process called "reconciliation", React will detect that the state of the app has changed. 
// Then it will update the virtual DOM, taking note of which nodes have changed due to the state changes. 
// Finally, once it knows which nodes have changed, it will update only those specific nodes on the actual DOM. 
// This takes a lot of pressure off of our browsers and it's why React is as powerful as it is.

// Anatomy of a React Component
import React from 'react';

const Intro = () => {
  return (
    <div>
      <h1>Hi Lambda!</h1>
    </div>
  );
};

// This is an example of a React "component." A "component" is a pretty loose term to describe a discrete chunk of your site. 
// A header could be a component, for example. Or a footer. Or a hero section, etc. This one's pretty simple, all we're doing is rendering a div with an h1 inside of it

// How are we mixing JS and HTML?
// The fake HTML is called JSX and underneath its disguise, it's just a JavaScript object. 
// This is a simplification, but what our example above effectively translates into is something like this:

import React from 'react';

const Intro = () => {
  return (
      {
          type: 'div',
          props: {
              children: {
                  type: 'h1',
                  props: {
                      children: "Hi Lambda!"
                  }
              }
          }
      }
  );
};

// So when we return what looks like HTML in a React component, what we're secretly returning is a JavaScript object that describes the kind of HTML we want to make. 
// React is going to figure out how to make it for us later

// It's important to understand early on that a React component is just a regular JavaScript function. We could return an object (sort of) like the one written above, 
// and it would work, but we want to use JSX for a couple of reasons. 
// First, it's easier to read than that big nested object. 
// And second, it's going to allow us to put our application's logic where it belongs: directly next to the thing the logic applies to.

// Once we're in our JSX, React gives us the power to escape back into regular JavaScript and refer to that variable by using the curly brackets <h1>{greeting}</h1>.
// These curly brakets will evaluate any valid JavaScript expression, including math operations:  <h1>{2 + 2}</h1>


// Now you know the underlying mechanism of React. We don't want to have to hardcode the content of our HTML; instead, we want to compute it.
// By now some of you are probably thinking, "Computing our markup, isn't that what we learned DOM manipulation for?" and it's a good question.

// Why do it this way?

// Separation of concerns
// In computer programming, "the separation of concerns" refers to a design philosophy that each piece of your code should do one and only one thing. 
// Functions with a lot of moving parts are hard to debug. One large function might be tricky to test. 
// If we can split that function apart into smaller pieces that are easy to test individually, our application will be more robust and easier to understand.

// At first glance, it might appear that putting our markup right next to our JavaScript is a violation of this principle, but the React team thinks otherwise. 
// They argue that we can't truly separate a <button> tag from the function the button invokes. 
// Separating the two, one in an HTML file and another in a JavaScript file, isn't a separation of concerns, it's cutting one concern in half 

// Consider the difference between this, the way you're used to doing it:

//HTML FILE
<button class="button"></button>

//JS FILE
let button = document.querySelector('.button');
button.addEventListener("click", (data)=>{} )

// And the React way:
// <button onClick={ () => submitForm(data) } /> 


// Imperative Programming vs Declarative Programming

let myArray = [1,2,3,4,5];
// And we want to iterate over it and double each number. Here are two ways we could go about it.

for (i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i] * 2;
}

// This first approach is an example of imperative code, and this is the kind of approach we're most familiar with. 
// It's very explicit
// At a lower level, all code is ultimately imperative. 
// The problem with imperative code is it's pretty difficult and in more complex examples, it can be hard to understand what the code does at a glance.

const double =  number => number * 2;
myArray.map(double);
// The second approach is an example of declarative code. 
// Instead of telling the computer, step by step, how we want it to do something, we just tell it what we want it to do.
// "Map over my array and double everything inside of it."

// With practice, declarative code is easier to parse. This is important because, believe it or not, as a programmer, most of your time isn't spent writing code. 
// It's spent reading other people's code and trying to understand what it does. 
// If you can grasp this distinction, and appreciate its value, congratulations. You now understand the basis of functional programming,
// the programming paradigm that React is modeled after.

import React from "react";

const image =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";
const titleObj = {
  title: "Light Bulb!"
};

function App() {
  return (
    <div className="App">
      <h2>{titleObj.title}</h2> 
      <img src={image} alt="lightbulb" /> 
    </div>
  );
}