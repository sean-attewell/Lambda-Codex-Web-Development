// A styling library for React
// CSS written in JavaScript
// React introduced JSX as a better tool for writing HTML in JS, and now we have great libraries to write CSS in JS.
// If everything is a component, why not styles too?
// Declarative and functional
// Just a functional component that you declare as whatever element you want, 
// rendered to the screen with some particular styles
// Rich community support of UI libraries out there to use

// It's just a JS object

// wouldn't be able to do this without ES6

// styled.div is a function, but you're calling it with a literal string literal instead of parenthesis!!
// In JS, we can pass in string arguments using string literals.

// To get started with styled-components we run npm install styled-components. And that's it! 
// We can import it into our js files, and start building components.

// First, import the styled default object from styled-components . This gives you access to every property on that object. 
// Each property is a React component that will print out whatever property you reference as a DOM element.

import styled from 'styled-components'
// div
const StyledDiv = styled.div``;

// paragraph
const StyledP = styled.p``;

// section
const StyledSection = styled.section``;

// headers h1 - h6
const StyledHeading = styled.h1``;

// a
const StyledA = styled.a``;

// etc.....

// You'll notice that I'm using that fancy template literal syntax. 
// That's because each one of the properties found on the styled objects are actually methods. 
// In JS, we can pass in string arguments using string literals.

// From their docs: "This unusual backtick syntax is a new JavaScript feature called a tagged template literal. 
// You know how you can call functions with parenthesis? (myFunc()) Well, now you can also call functions with backticks!"

// So we are just invoking a function! And when we invoke this function, we are passing a string with our styles to it. 
// Under the hood, styled-components is going to render a div with a funny looking class name, and apply the styles that we passed to it.

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;

function SomeComponent() {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button>
    </div>
  );
}

export default SomeComponent;

// Note that inside the ${} we are running a function that takes in props, and returns the correct background color based on props.type. This has endless possibilities!
// So we just created a single, reusable <Button /> component that will change colors based on what we pass to the type prop!

// But wait… there's more!!! 
// Let's create a "base" Button component, then create a TomatoButton component that extends some extra styles to it (this example is straight out of the docs)!

import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function SomeComponent() {
  return (
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);}

// export default SomeComponent;

// (You may have noticed that we are invoking a function, passing in a component, and it is returning a new component with added functionality… styled is an HOC!!!!)

// Now we're talkin! With this, and so much more that we can learn from the styled-components docs, we can move styling into our JS, create a lot of dynamic reusable components, 
// and we could even create our own style library, simply and quickly, full of components that can be plugged in anywhere!