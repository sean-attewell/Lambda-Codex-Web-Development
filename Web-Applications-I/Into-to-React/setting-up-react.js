// Option 1 - clone a bare-bones react repository from github
// follow README instructions

// Option 2 - learn to set up a react application from scratch
// Create certain files and folders
// initialise an NPM project 
// bring in dependancies
// create scripts in the package.json
// configure the linter
// configure testing
// configure Babel (a transpiler) that translates modern JS or less standard JS (like JSX) into less modern.
// configure Webpack - a program that takes the dozens of JS modules that comprise our project, concatenates them into one or a few balls of JS
// It also takes care of funneling any neccesary files through the babel loader

// Option 3 - Create React App
// No longer install it globally...
// I can use it by using the command, followed by the desired name for the project:
// create-react-app app1
// cd app1
// yarn start
// the src folder contains the components and files we'll normally be editing
// the package.json shows us the scripts available to us:
// npm 'start' spins up a development server so we can open the application in chrome.
// It also fires webpack with a watcher so whenever any code changes, the webpack bundle will be recreated
// You'll see changes immediately reflected in chrome (usually at localhost3000)
// 'build' creates a production bundle, usually minified and uglified to save space and to obscure the source
// npm 'test' will run our tests
// 'eject will bring fourth all the complexity of this project
// by running npm run eject, we'll be able to configure everything. However you can only do it once and can't go back.
