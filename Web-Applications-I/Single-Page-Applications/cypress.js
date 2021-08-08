// Writing good, quality code isn't possible without tests. It's simply too difficult to catch every error on your own. 
// In your careers, you'll be expected to write and understand different types of testing in order to speed up your work flow, prevent bugs, and integrate systems. 
// There are four types of tests JavaScript developers write and the tests work together to help diagnose problems.

// It's worth noting that these designations are really just words developers use to communicate their ideas —
// there aren't major syntactical differences between different types of tests like there are with frameworks or languages. 
// Instead, the classifications have more to do with scope, cost, and speed. In short, all testing, in all forms, simply automates manual processes. 
// We'll examine each of these types below, and focus on End to End (E2E) testing in our lesson today.

// Static
// Static tests catch typos and errors as you write your code. If you have any type of debugging software in your IDE, it is running static tests.

// Unit
// Unit testing verifies that individual, isolated parts of your code (like functions) work as expected. 
// For example, unit testing can verify that a return is of a certain type or that a particular string or image is rendered on a page.

// Integration
// Integration testing works to test several units at one time - verifying that they work together as expected. 
// For example, if you have a function that relies on the output of another function, you might write an integration test to confirm that they're working together as expected. 
// For example, you might simulate a user action to enter login credentials and submit a form, then verify that the submission links a user to a new page. 
// Here, you're not testing the full app, but not testing just one function, either.

// End to End
// As you might imagine, end to end testing looks at the entire user experience, from… end to end. 
// End to end testing basically asks "can a user accomplish an action?". 
// End to end tests focus on UI and mimic how a user might interact with an app, simulating real events like button clicks, scrolls, form submits, and the like. 
// You can picture end to end tests like imaginary friends, who use your app and point out all the non-intuitive parts, 
// or bugs that a user would encounter while using your website.

// In this module we'll focus on end to end testing using a tool called cypress. 
// Eventually, only ~10% of the tests you run will be end to end tests. 
// Given their visual nature, and focus on UI, E2E tests are a great place to start if you're new to testing.

// Arrange, Act, Assert
// All testing, of all kinds uses the framework "arrange, act, assert" where a test is written to do the following:

// Arrange - Set up a webpage, form input, etc.
// Act - Simulate a user action, like a button click or form input.
// Assert - Verify that the simulated user action resulted in the expected output.

// As Kent Dobbs says, "All I'm interested in is whether I'm confident that when I ship my changes, my code satisfies the business requirements." 
// This confidence, ultimately, is the end goal.


// Cypress is an awesome testing tool for unit, integration, and E2E tests. 
// Coincidentally it is also great for learning, thanks to its visual, guided user interface (GUI). 
// Like React, Cypress is written in a way that is easy to understand, using English language functions like visit(url) and fire(event) that make syntactic coding easier.

// In traditional end to end testing, developers have to use and chose from a variety of frameworks, assertion libraries, wrappers, and more. 
// Cypress was designed as an "all-in-one" testing framework where tests can be written in a single language (JavaScript) and run graphically in a browser.


// Before we start to use Cypress in a project we can install and open Cypress in terminal to view some example tests.
// We can install Cypress with the following command in terminal:

// npm install --save-dev cypress
// did this one Animals in Intro-to-React

// Once it's been installed we can open Cypress with this command:

// npx cypress open


// Opening Cypress for the first time you'll see a list of example tests. 
// We recommend you run though these examples on your own by clicking Run all specs.

// When you do this you will visually see user simulations animated on a webpage in your browser as the tests are run. 
// On the left hand side you can view test names and pass/fail icons while on the right you can view simulated user actions (remember our arrange/act/assert framework!).

// While it is maybe somewhat interesting to watch these tests run, our goal here is to write and run our own tests. 
// In order to do that, we'll practice by creating some really simple tests within an existing project folder.


// Testing structure
// Syntactically, testing in Cypress looks something like this: 
// Every test will start with a describe higher order function, and will accept a test as a callback function. 
// Within the callback function there will be some it statement, as well as actions and assertions. 
// We'll get into those more in the next objective. Here, we'll use simple expect assertions and visit actions which work exactly as you'd expect!

// cy.visit() will simulate a user visiting a page.

// expect() will verify if some expectation is met. (More on both below.)

describe('Name Test', function () {

    it('Explain what it does', function() {

        // actions and assertions go here
    })
})


// Interacting with elements
// Just like we can inspect elements in a browser, we can use the selector playground to show the code needed to interact with certain elements.
// When we go to write more useful tests, we'll use this often to grab components on a page.

// We'll walk through the specifics of these steps during the tutorial portion of this objective, 
// but the basic flow of Cypress testing follows the same Arrange, Assert, Act framework that you learned above


// We do
// For the next few objectives we'll be working inside of your most recent fun bus project directory.

// Set up Project
// Install cypress locally with npm install --save-dev cypress. 
// You'll notice 5k+ changes to your working directory in git but this is just Cypress installing all of its dependencies.
// Since there is no package.json file in our fun bus example, we'll need to create one. 

// Then, we'll add the following code to our new file:

// { "scripts":
//     { "cypress:open": "cypress open"
//     };
// }
// Run npm run e2e in terminal which will create a cypress.json file and a cypress folder within your website directory. 
// Inside the cypress folder you'll find four more folders, including the example files we looked at earlier.

// To write our own tests we'll need to create a new test file. 
// You can call it anything you want but best practices suggest that the file name should match the function of the test. 
// In this case, the file name would be sample_test.js.

// From the cypress GUI, click on the file sample_test.js to run in browser.
// At this point you should see the No tests found error message as well as the default blank page. 
// We would need to tell Cypress to load a page in order to see our actual html displayed.

// Now, let's return to that sample_test.js file and write a very basic test. 
// For set up purposes we can write a test called My First Test and check to see if true equals true; this will always pass.

//arrange
describe('My First Test', function () {
//act
    it('Does not do much', function() {
//assert
        expect(true).to.equal(true);
    })
})

// My Second Test
// Until this point we've been running tests on the default blank page. 
// If we want to run tests on our own index.html file, we need to add the action visit into the // act portion of our test.

// In order to do this we'll need to add a base URL to cypress.json file. 
// You should use the format "http://localhost:8080/" such that the addition looks something like the below. 
// Note that you can visit a URL without setting the baseURL, but then you would need the full file path in cy.visit(). 
// That said, using localhost:8080 is considered a best practice because it prevents an annoying automatic default refresh that happens under the hood.

// {
//   "baseUrl":"http://localhost:8080/"
// }

// Now that a baseUrl exists, you can run a second test to load your index.html page with cy.visit().

describe('My Second Test', function () {
    //Arrange
    it('Visits a new site', function() {
    // Act
    cy.visit("index.html");
    })
})

// These might seem boring, but you've just practiced with important syntax and testing principles.


// Interacting with Elements
// The tests covered in the previous objectives are basically the simplest possible tests we can run. 
// More practically, we'll want to test how a user interacts with the webpage such that we don't have to manually click around a page looking for bugs. 
// To do that, we'll use a variety of cypress actions and assertions.

// Actions
// We will primarily use Cypress to test wither or not user actions give the returns we expect them to. 
// Actions in Cypress (or any testing library) are designed to simulate user actions like a click event, a double click event, a scroll, or a checked box 
// which are all things we've been working with in this unit.

// Visibility
// Another important test we'll run is visibility, which are tests to check whether or not an element is hidden. 
// Visibility tests can be chained with the actions above to see how elements appear and disappear depending on user actions.

// In addition to actionability and visibility, Cypress allows us to test scrolling, covering, Readonly, animations, and more. 
// You can view a full list of actions and read more about them in the Cypress documentation.
// https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Actionability


// Best Practices
// The following cheat sheet of best targeting elements is taken directly from the Cypress documentation. It is rare to get this kind of best practice guidance directly from the developers of a language; it gives us insight into the best way to write our tests.

// Selector	Recommended	Notes
// cy.get('button').click()	❌Never	Worst - too generic, no context.
// cy.get('.btn.btn-large').click()	❌Never	Bad. Coupled to styling. Highly subject to change.
// cy.get('#main').click()	⚠️Sparingly	Better. But still coupled to styling or JS event listeners.
// cy.get('[name=submission]').click()	⚠️Sparingly	Coupled to the name attribute which has HTML semantics.
// cy.contains('Submit').click()	✅Depends	Much better. But still coupled to text content that may change.
// cy.get('[data-cy=submit]').click()	✅Always	Best. Isolated from all changes.


// Assertions
// After we set up the simulated user actions we will want to test that some expectation has been met: text has rendered on the page, a new page has loaded, etc.
//  We'll do this using assertions.

// The most common assertion is.should(): we'll assert that some element should contain some content or do a specific thing. 
// Since Cypress code syntax is English-like, let's look at an example which tests that a link navigates to a new page.

describe('Link Navigation', function() {
  it('Asserts that the words instagram.com link to instagram.com', function() {
    cy.visit('index.html')

    cy.contains('Instagram.com').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', 'instagram.com/')
  })});

// We saw .contains() in the example above. This will check if the selected element contains some specified content (like text or an image). 
// Contains is a little tricky because it can also be used in either the assertion or action phase of your test. 
// Contain can be used in place of id selectors to select elements based on text. 
// For example, you could use cy.contains('submit').click() to simulate a user clicking a submit button, 
// or cy.contains('Instagram.com') to grab any element containing the text Instagram.com, as we did above. 
// We'll use contains as an assertion below.


// FOLLOW ALONG
// Let's write a real test to actually test DOM elements.

// Arrange - First, we need to set up our test with a name and function declaration. 
// As covered in the previous objectives, this is where we describe what the test will do.

describe('Header Text', function() {
    it('Checks if header text exists', function () { })
})

// Act - Next we need to act. Our action here will simply be loading up the page with cy.visit().

describe('Header Text', function() {
    it('Checks if header text exists', function () {
    cy.visit("index.html");
  })
})

// Assert - Finally, we'll grab the header element of interest and assert that it contains the text "Fun Bus" with cy.get('.logo-heading').contains('Fun Bus');.

describe('Header Text', function() {
    it('Checks if header text exists', function () {
    cy.visit("index.html");
    cy.get('.logo-heading').contains('Fun Bus');
    })
})



// Cypress' GUI is great, but sometimes its nice to be able to run tests right in the console, without having to navigate away from your code editor. 
// When making small changes this can be especially useful.

// Thankfully, cypress tests can be run straight from the terminal with npx cypress run + filename.

// Cypress run
// cypress run is the command to run all cypress tests. By default, this command will run all tests, including the example tests. 
// There are a plethora of options that we can add in order to tailor the command to our needs. 
// A full list of these options can be found in the documentation, but the most important for us is --spec.

// --spec
// --spec or -s will specify which tests to run. So, npx cypress run --spec "cypress/integration/sample_test.js" will run only the tests in the sample_test.js file.
// You can specify multiple files by separating filenames with a , all inside of the quotation marks.


// Other Commands
// The cypress run command is by far the most commonly utilized 
// but cypress open, cypress verify, cypress version and cypress cache are all accepted as valid.


// open	- Opens the Cypress Test Runner in interactive mode.
// verify- 	Verify that Cypress is installed correctly and is executable.
// version	- returns package version and binary version for debugging (rarely used)
// cache	- view or clear cache

// All we need to do in order to run tests on our fun bus page is use the command npx cypress run --spec "cypress/integration/sample_test.js"

