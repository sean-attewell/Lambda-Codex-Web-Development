// nodejs gives us 'process'. This is where the nodeJS app is running.
// process has a property called 'env' and you can use it to read the port dynmaically from the environment

const port = process.env.PORT;

// Can assign manually assign in your code but that's not the point
// All hosting platforms have a way for your to assign environment variables outside of the application code
// You read those environment variables through the environment object

// .env files are an industry standard with key value pairs
// PORT=5000
// Upper case is convention
// Make sure it's added to .gitignore
// Lets other developers use their own choice of port
// But also means you can include secrets like api keys

// there is an npm package for reading the .env file and adding it to our process.env object
// npm i dotenv
// it's a production dependancy because it needs to work also in production
require('dotenv').config()
// import early at the top of index.js where you are running 


// ---

// When you develop and run code on your machine, you run code in its development environment.

// Most companies will have a testing environment similar to production; 
// it has the same versions of software and runs on similar, albeit weaker, hardware. 
// They do this to mitigate the risks when moving the to production servers that clients use.

// Ideally, all environments run on the same stack, platforms, and versions. 
// Still, it is common to have developers on the Windows platform with the latest version of Node.js and the production server running on Linux with the last stable version of Node.js. 
// For those cases, it is essential to have a testing/staging environment that also runs the Linux and Node.js versions found on the production server. 
// A staging environment can detect any regressions that may occur during deployment before code reaches the user.


// FOLLOW ALONG

// Configure a "server" Script
// The server is not configured to run when typing "npm run server". 
// It is also not using nodemon to restart on changes. Let's configure both.

// Add nodemon as a development-time dependency: npm install -D nodemon.
// Open package.json and modify the "test" script to read:
// "server": "nodemon index.js"
// Test from a terminal.

// When we deploy the API, Heroku will look for a "start" script that uses node to run the server. 
// We need to add that script to package.json.
// Add a "start" script that uses node instead of nodemon to run index.js.

// The "scripts" section of package.json should look like so:

// "scripts": {
//     "start": "node index.js",
//     "server": "nodemon index.js"
//   },

// After this change, Heroku knows how to start our server but needs to control which port the API will use. 
// The port is hard-coded as 4,000, and we need to make it dynamic.

// Make the Port Dynamic
// Introduce process.env.
// Introduce the dotenv npm module. 
// Install dotenv as a production dependency.
// Change index.js:

// it's recommended to load configuration for .env as early as possible
require('dotenv').config(); // add this line as the first thing to run

const server = require('./api/server.js');

// we'll read the port from the server environment if it is there
// Heroku will have the PORT environment variable set
const port = process.env.PORT || 5000;

// we can now use that port, if set up by heroku or read from .env or 5000 as a default if not set
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});


// add a .env file to the root folder (next to package.json) with the following content
// PORT=4000
// It is recommended to add .env to .gitignore to prevent it from being uploaded to GitHub.
// The reason is that most systems add configuration secrets to that file that are different between environments. 
// Some examples are database connection credentials or API keys for external services.

// stop the server and restart it again, or the server will not detect the change to .env.


// Heroku
// can set it up so when you push to github (mastr branch) the hosted app is updated
// Setting in Heroku (under Config Vars) lets you input enviornment variables such as secrets
// Then our application can access that through process.env


// Setup Continuous Deployment from GitHub
//
// Login to Heroku and create an app.
// In the "Deploy" tab, select GitHub in the "Deployment Method" section.
// Heroku will ask GitHub for authorization to access. You need to approve access.
// Search for the repository (their fork of the starter code) in the "Connect to GitHub" section and click Connect.
// In the "Automatic deploys" section, pick the "main" branch and click "Enable Automatic Deploys".
// Note that Heroku automatically deploys to master. We strongly encourage you to use a main branch instead. You can override this automatic deployment using git push -f heroku main:master
// In the "Manual deploy" section, click on "Deploy Branch" to kick-start the first deployment.
// Scroll to the top and move to the "Overview" tab to see the deployment in action.
// On the top right, click "Open App".
// The deployment succeeded, but opening the App fails because the fork on GitHub still has the old code without the dynamic port and new start script.

// Our application displays Application Error and information on how to open the logs. We can fix it by pushing our changes to the main branch on GitHub.

// Commit and push the changes to the forked repository on GitHub
// Check the "Overview" tab on Heroku and wait for the message showing that Heroku deployed the application.
// Refresh the browser where the application is running, and there should be an empty array. Success!
// Use Postman to connect to the API and post a few shoutouts to people that deserve it.


// ADD AN ENVIRONMENT VARIABLE ON HEROKU
// Change the GET to / endpoint to include a message of the day as part of the response.

server.get('/', async (req, res) => {
  try {
    const shoutouts = await db('shoutouts');
    const messageOfTheDay = process.env.MOTD || 'Hello World!'; // add this line
    res.status(200).json({ motd: messageOfTheDay, shoutouts }); // change this line
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
  }
});

// add the MOTD to the .env file.
// PORT=4000
// MOTD=Hello from my computer

// restart the server running on localhost.
// request the API running on localhost to verify that the motd property is there.
// commit and push to GitHub.
// once the new changes are deployed, refresh the application on Heroku. 
// Note that we get the default Hello World! message because the environment variable does not exist on Heroku.
// Now we are going to add that configuration variable on Heroku.

// On Heroku, go to the "Settings" tab.
// Click on "Reveal Config Vars" in the "Config Vars" section.
// Add a MOTD config var with the value "Hello from the World Wide Web."
// Refresh the application.
// Note the environment variable on Heroku overrides the value in code and the value in our local .env file. 
// Thus, we can use environment variables to store API keys, database connection information, and other secrets more securely.

