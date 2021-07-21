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
// No longer install it globally... But if it was,
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


// https://reactjs.org/docs/create-a-new-react-app.html#create-react-app

// Updated node to v14.17.3
// Updated NPM to 6.14.13

// uninstalled global CRA:

// You can list your global packages by running npm list -g --depth=0. 
// If you have create-react-app installed globally, uninstall it with npm uninstall -g create-react-app 
// to prevent npm from running the outdated version of create-react-app installed on your computer.
// ** I had to also yarn global remove create-react-app

// We will now use the npx utility, which was introduced in npm v. 5.2.0. Here, animals is the name of the React project you want to build:

// npx create-react-app animals --use-npm

// NPX: The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. 
// It is an npm package runner that can execute any package that you want from the npm registry without even installing that package

// npx will download the package create-react-app, run it once, then delete it from your disk. 
// If you already have the package installed via npm install -g create-react-app, you can simply run create-react-app in your terminal.

// It is recommended to use npx, because it doesn't clog up your filesystem, and because it will always us a package's latest version.


// As soon as you run the command successfully, CRA gets to work installing all necessary files, folders, and dependencies using npm. 
// It will even initialize a git repository and perform an initial commit. 
// Once the process completes (it might take a while!) you should see a Happy hacking! success message in your terminal.


// move into the project folder
// cd animals

// start up the project

// npm start
// The start command here will launch the bundler (Webpack) and a transcompiler (Babel's Webpack loader), 
// and spin up a dev server so you can visit your project at the default http://localhost:3000. 
// This server will also listen for you to make changes to your project and refresh the browser page every time you save your files in your editor. 
// This process is called "hot reloading."

// npm test will launch tests with the testing library jest.

// npm run build will launch the bundler and transcompiler to produce a minified bundle appropriate for deployment.

// npm run eject will unhide all the configuration and dependencies that CRA-generated react apps use under the hood. 
// No way back from this, so don't do it unless you are sure you need to! 
// Ejecting is usually NOT necessary for toy apps or small prototypes, but often inevitable when building real-world apps.


// We can use npm to install any other JavaScript packages as dependencies besides react and react-dom 
// (which you'll find already among the project's dependencies inside package.json).

// Example of installing and uninstalling the moment library as a project dependency:

// npm install moment
// npm uninstall moment

// Dev dependencies are packages you as a developer need for performing specific operations like spinning up the app in your laptop, 
// creating a bundle, or running tests. Non-dev or "regular" dependencies are the packages imported and consumed directly by your application code.


// You should have a main index.js file in the src, which is mounting our App component to the root div found in the index.html file which lives in public. 
// Notice how we're importing in App.js from inside of index.js.

