// note that there appears to be a render function in it and test, but sometimes we are using rtl.render() to make a simulated DOM.   

const simulatedDOM = rtl.render(<App />);

const h1 = simulatedDOM.getByText(/foo/i)

// ctrl + space shows list of options to perform on simulatedDOM
// find get and query are the main prefixes
// get will cause it to fail immediately if test isn't there
// Good for seeing if something is mounted
// Remember an element might be in the DOM and not be visible to the user
// Jest_Dom has a ".toBeVisible()" matcher for that reason!

// queryByText will avoid the test crashing immediately so you can assert that it's not there instead

import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect'
import App from './App';

describe('App', () => {
  it('does not have an element with the text "Foo"', () => {
    const simulatedDOM = rtl.render(<App />);
    const h1 = simulatedDOM.queryByText(/foo/i)
    expect(h1).not.toBeInTheDocument();
  })
})


// For review, the react-testing-library are designed to mimic how a human would interact with a website, 
// just like the react-testing-library, these tests focus on UI specifically. 
// This again, is just another way to consider the user in design.

// We test pieces of interface by capturing what we expect to see (or not see) in the DOM using queries. 
// What should (or should not) be there is rendered to a virtual DOM by the library's renderer. 
// This is the DOM node of interest (a certain button, a label containing a specific text, an input with some specific value). 
// We can run matchers against that piece of DOM to assert, for example, that the selection exists in the document, or that it's visible.


// Let's consider the example of an increment counter that increases by one every time the Increment button is clicked. Set up like so:

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;

// Our test would look something like the following. 
// This should look similar to the example we walked through in the last objective, with just a few more steps added on. 
// Importantly, we simulate a user click with userEvent.click(button) and include multiple assertions at the end.

import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Counter from "./Counter";

test("increments count when increment button is clicked", async () => {
  // Arrange
  render(<Counter />);
  // Act
  const count = screen.getByText(/0/i);
  // get the button node
  const button = screen.getByText(/increment/i);
  // simulate a user click
  userEvent.click(button);
  // Assert
  expect(count).toHaveTextContent("1"); //passes with 1 because we expect it to be 1 after a button click
  expect(count).not.toHaveTextContent("0");
});



// FOLLOW ALONG
// Change App.js to output different jsx:

const App = () => {
      return (
        <section aria-labelledby="KittensHeader">
          <h2 id="KittensHeader">All About Kittens</h2>
          <p className='content'>Lorem ipsum dolor sit amet</p>
        </section>
      )}

// Import the App component into our test file App.test.js and render it.
// You may pass any props you want! Renders the app component.

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

it('renders "all about kittens" text', () => {
  render(<App foo="you may inject props!" />);
});

// Capture a piece of the output! We expect some text containing "All About Kittens" to be rendered so we'll use queryByText. 
// This is an example of the act phase.

it('renders "all about kittens" text', () => {
  render(<App />);
  const hasKittensText = screen.queryByText(/all about kittens/i);
});

// Assert that the hasKittensText is actually in the document. If it's not, the value of hasKittensText will be null.

it('renders "all about kittens" text', () => {
  render(<App />);
  // IMPORTANT
  // queryByText() returns either the node, or null:
  const hasKittensText = screen.queryByText(/all about kittens/i);
  expect(hasKittensText).toBeInTheDocument();
});

// Try out getByText() as an alternative to queryByText().

it('renders "all about kittens" text', () => {
  render(<App />);
  // IMPORTANT
  // getByText() returns either the node, or **FAILS THE TEST** outright:
  expect(screen.getByText(/all about kittens/i));
});

// Break the test! 
// Remember that getByText, as well as the rest of the queries that have get prefix in their names
// will cause a test fail instead of returning a null value. 
// Queries that have the query prefix return null if the element is not found.

  it('renders "all about kittens" text', () => {
    render(<App />);
    // no matcher needed, although it may be added to improve readability
    expect(screen.getByText(/THIS WILL MAKE THE TEST CRASH AND BURN/i));
  });


// The aria-labelledby attribute establishes relationships between objects and their label(s), 
// and its value should be one or more element IDs, which refer to elements that have the text needed for labeling.


// Capture using different criteria. 
// We have many other queries available to us. 
// In our component, we have an aria-labeledby attribute on the section to inform screen readers that the element <h2 id="KittensHeader">All About Kittens</h2> 
// is actually a label for the section element. 
// Let's capture the h2 by label text! 
// The point is to test like a user would. We expect a particular label to be there for our users!

it('renders "all about kittens" text', () => {
  render(<App />);
  expect(screen.getByLabelText(/All About Kittens/i));
});
