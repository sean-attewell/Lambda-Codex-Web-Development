
// Testing is an essential skill for a web developer to have. 
// It's hard to anticipate every way that a user might interact with your site, not to mention it is incredibly time-consuming to test all of those options manually. 
// That's where automated testing comes in. 
// Any major company will use automated testing on its websites as a safety net to prevent regressions 
// and get a better overall understanding of how an application works. As such, testing is a great thing to have on your resume!


// A software regression is a type of software bug where a feature that has worked before stops working. 
// This may happen after a certain event, such as a system upgrade, system patching or a change to daylight saving time. 
// A software performance regression is a situation where the software still functions correctly, but performs more slowly or uses more memory or resources than before

// Regression testing is re-running functional and non-functional tests to ensure that previously developed and tested software still performs after a change.

// If we don't have tests, it's safe to assume the following:

// application code has to be tested manually
// there is no way to know if a change broke another piece of code
// you cannot be sure if the code is correct
// manually testing takes a lot of unnecessary time
// adding new features becomes slow

// Advantages of Testing
// Surfaces bugs faster
// Reduces the risk of regressions
// Allows us to trust the code
// Makes us think about edge cases
// Acts as a safety net when making changes or refactoring
// Acts as documentation for the code
// Encourages us to write more testable (better!) code.

// Drawbacks of Testing
// more code to write and maintain
// more tooling
// additional dependencies
// may provide a false sense of security
// trivial test failures may break the build
// regressions (when a new feature breaks existing code)



// What tools do we use for testing?
// In this course, you've already used React testing library to write tests for React components, but there are other tools available.
// Examples of those tools are Jest, Mocha/Chai, Jasmine, Qunit, Enzyme, Supertest, Istambul, Karma, and Cypress.

// How do you even begin to set up custom testing for a project with so many testing tools available? 
// First, it helps to know why you want to test so that you can pick the tool most suited to your needs.

// Jest
// We'll use the testing library Jest to start setting up our tests. 
// Jest runs under the hood in React testing library, so a lot of what we do moving forward should look somewhat familiar. 
// With create-react-app and React testing library, there was no need to install and set up Jest, 
// but as you grow as a web developer, you will likely run into a need to install and use Jest on its own.

// Jest is a test runner and command-line interface npm package. 
// It was originally made by Facebook and is included out-of-the-box with create-react-app. 
// Jest is a very general-purpose testing tool, and it works best with React applications, though it works with other frameworks. 
// In addition to the types of tests we've seen, Jest can run asynchronous tests, snapshot testing, and produce coverage reports.

// Watch Mode
// Instead of running tests manually, Jest has a built-in watch mode feature that will run tests automatically as files change. 
// Thus, Jest detects these changes automatically and only runs the tests about the changes. 
// This is one of the reasons developers love Jest so much and hopefully one that you'll find equally compelling.

