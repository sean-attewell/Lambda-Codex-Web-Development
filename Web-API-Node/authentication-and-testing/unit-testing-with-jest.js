// FOLLOW ALONG
// Install jest with npm. We first need to install Jest as a developent dependency. 
// As soon as we do, Jest dependencies will show up in our package.json file.

// npm init -y (create package.json)

// npm install -D jest

// Configure jest
// npx jest --init

// Would you like to use Jest when running "test" script in "package.json"? > Yes
// Choose the test environment that wil be used fo testing > node
// Do you want Jest to add coverage reports? > No
// Automatically clear mock calls and instances between every test? > No
// The test script in package.json will change to run Jest
// Add the --watchAll flag
// so it looks like: "test": "jest --watchAll"
// Also jest.config.js got created

// Add test script. 
// In package.json we'll need to indicate that we're using jest for testing. 
// This can be done by simply adding "test": "jest --watch", to your "scripts" object.

// Run Tests. 
// We can start Jest by typing npm test in a terminal window at the root of the project. 
// However, since there are no tests written, it will return an error "No tests found" because we haven't actually written any tests yet, so let's move on.

// Create test files. 
// By convention, Jest will find your tests in two ways: 
// 1) by placing .js files inside a folder called __tests__ or 
// 2) by ending the name of a file in .test.js or .spec.js. 
// Technically, you could give the __tests__ folder a different name, but then you'd need to manually change where Jest looks for test files.

// You want test files to live in proximity to the files you're testing



// In the last objective, we configured Jest in a project. Now we want to write and run unit tests.

// Unit Tests
// You'll recall from unit 3 that unit tests are where we isolate smaller units of software (often functions or methods). 
// There are usually many unit tests in a codebase, and because these tests are meant to be run often, they need to run fast.
// As a result, unit tests are fast, they're simple to write and execute, and they're the preferred tool for test driven development (TDD) and behavior driven development (BDD). 
// In addition, developers regularly use them to test correctness in units of code (usually functions).

// What makes a good test?
// A good unit test is independent, focused, and, as you might assume, tests only one unit of code. 
// This type of test focuses on one behavior or functionality (even if you have to make multiple assertions), therefore testing what needs to be tested and no more.

// Another important consideration with testing is that you should try to avoid unnecessary preconditions. 
// For example, if your test relies on outside dependencies or other tests running first, you should factor to isolate the test (much like a pure function).

// Jest Globals
// The it global is a method you pass a function to; that function is executed as a block of tests by the test runner.
// The describe is optional for grouping several related it statements; this is also known as a test suite.


// HELLO WORLD EXAMPLE (SEE jest-setup folder)

// Note I chose babel option in setup rather than v8
// Also had to use require syntax rather than import 
// Read first answer:
// https://stackoverflow.com/questions/9901082/what-is-this-javascript-require

// Let's consider a constant function. We'll use the ever-so-simple hello function for testing purposes.

export const hello = () => "hello world!";

// Next we'd move into our tests folder and set up a test asserting that we expect the return value of this function to be hello world.

import { hello } from "./App";
//arrange
describe("hello", () => {
  //act
  it("should return hello world!", () => {
    //assert
    expect(hello()).toBe("hello world!");
  });
});

// Thanks to our watcher, the test should run automatically in the terminal, and you'd see that the test passed. 
// otherwise type "npm test" in the terminal
// Hopefully, this looks familiar to you from our work with React testing library.

// Before we dive into writing our tests with Jest, let's look at a few more details.

// Important Globals in Jest
// A few objects exist in the global scope like describe and it. You are already familiar with their use cases. 
// When writing custom tests you may find that some tests need to be run more than once, like a test to render without crashing, for example. 
// Jest has built in globals for this use case:

// Global	      Description
// beforeAll	  runs once before the first test
// beforeEach	  runs before the tests, good for setup code
// afterEach	  runs after the tests, good for clean up
// afterAll	    runs once after the last test

// If there's ever a scenario in which you want to skip or isolate a test, use the following globals:

// Global	Description
// it.skip()	skips the test
// it.only()	isolates a test
// The remaining globals can be found in the Jest documentation



// FOLLOW ALONG
// We're going to write our very own unit test for a JavaScript function called averageTestScore. 
// This function takes an array of scores (numbers) and returns the average score.

// mathHelpers.js.
const averageTestScore = testScores => {
  let totalSumScores = 0;
  let numberOfScore = 0;

  for (let i = 0; i < testScores.length; i++) {
    totalSumScores += testScores[i];
    numberOfScore++;
  }

  return totalSumScores / numberOfScore;
};

module.exports = averageTestScore;


// In a mathHelpers.test.js file, we'll start creating the tests we want to run on our function. 
// Remember, the it statements describe what the tests will do. 
// While we're brainstorming we can use it.todo() to capture ideas for future tests and fill up the test details one test at a time later. 
// This will indicate to indicate to our test runner that we don't want to run that test yet, but to keep note of it instead.

describe("mathHelpers", () => {
  describe("averageTestScore", () => {
    it.todo("should calculate the average for an array of numbers");

    it.todo("should throw an error if the argument is not an array");
  });
});


// We'll start by changing the it.todo()s into it() globals. First, we'll set up dummy data and, as usual, state the expected outcome in the form of a callback. For example, when we have a score array of [2,4,6,6,2], we expect the average toBe(4).

const { averageTestScore } = require("./mathHelpers.js");

describe("mathHelpers", () => {

  describe("averageTestScore", () => {

    it("should calculate the average for an array of numbers", () => {
      const scores = [2, 4, 6, 6, 2];

      const average = averageTestScore(scores);

      expect(average).toBe(4);
    })

    // THESE ARE FORMATTED INCORRECTLY IN THE EXAMPLE
    // it("should throw an error if the argument is not an array", () => {
      // expect(() => { averageTestScore(5) }).toThrow();
      // expect(() => { averageTestScore("five and two") }).toThrow();
      // expect(() => { averageTestScore({ number: 5 }) }).toThrow();
      // expect(() => { averageTestScore(undefined).toThrow();
      // expect(() => { averageTestScore(null).toThrow();
      // expect(() => { averageTestScore(NaN).toThrow();
    // })

  });

});
