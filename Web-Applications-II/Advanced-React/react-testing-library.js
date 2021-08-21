// create-react-app project
// or 
// npx create-react-app animals --use-npm

// npm i -D jest-dom react-testing-library
// (will go to dev dependancies on package.json)


//App.test.js
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect'
import App from './App';

it('renders an element with the text Hello World', () => {
  const wrapper = rtl.render(
    <App />
  );
  const element = wrapper.queryByText(/hello world/i); 
  // if such an element exists (an HTML element containing this particular text)
  // it will be saved into the element variable, otherwise it will be null

  expect(element).toBeInTheDocument() // this one comes from the jest-dom
  expect(element).toBeTruthy() // regular jest matcher
  expect(element).toBeVisible() // this one comes from the jest-dom
})

// You can console.log(wrapper.debug()) and run our tests to see what the App looks like
// Will look like real DOM (class rather than className)
// All of this is simulated in memory by the testing library




// In the last unit we discussed the general what and why of testing, and learned how to implement end-to-end tests. 
// Here we're going to dive into implementing integration tests. 
// The what and why of testing remains the same between all different types of automated tests.

// In this module, we will use the react-testing-library to run tests. 
// Unlike previous testing libraries, react-testing-library is designed with the user in mind, 
// testing components via DOM nodes, similar to how a user would interact with the front end of a website.

// react-testing-library recently underwent a major overhaul - 
// we used to use a different libraries, Enzyme and Jest, for tests that cared more about the internal management of props and state. 
// Now though, we can use react-testing-library to test props, state, output (in DOM elements), and more.

// The "hello world" of the react-testing-library is a test to check if a component loads without crashing. 
// Here, we declare a test, name it, and check if the App renders.

test("renders App without errors", () => {
  render(<App />);
});

// Earlier, we discussed about the "Arrange, Act, Assert" structure for testing. 
// There's a technical first step, import - we'll look at all of them below. For more details, check out the testing-library documentation.
// https://testing-library.com/docs/react-testing-library/intro/

// The following matches the structure we've studied and is slightly simplified version of what you''ll find in the documentation. 
// What we'll walk through in the tutorial is even more simple but this example is good for illustration.

// Here we are testing the greeting component to see if our expected greeting ("hello lambdalorians") appears in the browser 
// as we expect it will per the code below. 
// Important note here, our tests work with text because that's what the user sees and what the user experiences - 
// the test does not test on classes, for example, because that's an implementation detail, not a rendered element.

import React from 'react';

const Greeting = () => {
  return <h1 className="my-greeting">Hello Lambdalorians!</h1>;
};

export default Greeting


// Import
// As with any library, we need to import react-testing-library before we can use it, 
// this all should look more or less familiar from imports we've done before.
// You'll notice that "Arrange, Act, and Assert" are yet to be filled out.

// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add greeting
import Greeting from "./Greeting";

test("renders greeting on Greeting component", async () => {
  // Arrange
  render(<Greeting />);

  // Act
  const greeting = screen.getByText(/hello lambdalorians!/i); // the i designates our text as case insensitive

  // Assert
  expect(greeting).toBeInTheDocument();

});

// Arrange
// The render method renders a React element into a virtual DOM. 
// Recalling our definition of "arrange", this is basically the part where we set ourselves up for success

// Act
// The screen.getByText() method can be used to "query" the DOM for a specific node by its text that we expect to see in the browser. 
// We will use it here to test that our greeting ("hello lambdalorians") is being rendered by the <Greeting /> component.

// Assert
// Finally, we need to "assert" that the greeting has indeed been rendered. 
// Here we use a couple of new functions - expect is a Jest function that is made globally available with create react app. 
// The other, toBeInTheDocument(), comes from Jest DOM, a companion library to react-testing-library that provides custom matchers for Jest. 
// A full list of functions can be found on GitHub. 
// https://github.com/testing-library/jest-dom
// Throughout our examples we assume that you import Jest DOM in create-react-app, and suggest that you always do this, rather than importing it every time.

// Running Tests
// All tests run in the terminal with npm test - as you run tests you should see passes and failures in the console. 
// Running this test would result in a "pass" since our earlier code does indeed render "Hello Lambdalorians".


// FOLLOW ALONG
// Create a React project with create-react-app in command line.
// **Remember that older versions of Create React App required you to install @testing-library/jest-dom and @testing-library/react separately. 
// **Not anymore. 
// **And we do NOT need to install Jest either, as CRA projects come with Jest installed and working out of the box.

// Open App.test.js (inside the src folder). You should see the below:

    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import App from './App';

    test('renders learn react link', () => {
      render(<App />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
});

// Note a few things about the imports:

// React has to be in scope because we will be using JSX.
// react-testing-library exposes a render function and a screen object that we are importing with import { render, screen } syntax. 
// render allows us to render React components so we can test them
// screen gives us access to the query functions needed to query the "screen" for different elements to test.


// Render a React element containing a "Hello World" message
// Usually you would be rendering the component that you want to test imported from another file

// Inspect the output by logging with screen.debug(). See image. 
// See how the element is rendered into a in-memory, document-like structure

it('renders without crashing', () => {
  render(
    <span className="greet">hello world</span>
  );

  // can use a dom-testing-library query to capture an element
  // the querying functionality is accessed through the screen object:
  const element = screen.queryByText(/hello/i);

  // assertions will come in here
  expect(element).toBeTruthy(); // jest matcher
  expect(element).toBeInTheDocument(); // jest-dom matcher
  expect(element).toBeVisible(); // jest-dom matcher
});

// Note that you would probably not need all three of these assertions to give you confidence that your code is working

// note that there appears to be a render function in it and test, but sometimes we are using rtl.render() to make a simulated DOM.   

const wrapper = rtl.render(
    <App />
    );