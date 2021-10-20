// JSON Web Tokens (JWT) are a way to transmit information between parties in the form of a JSON object. 
// The JSON information is most commonly used for authentication and information exchange. 
// In the former example, with authentication, every JWT contains information. 
// In the latter, JWTs contain the classic JSON data you've seen before.

// Ultimately, a JWT is a string that has three parts separated by a period (.). Those are:

// The header
// The payload
// The signature

// Header
// The header contains the algorithm with the token type. Typically the header for a JWT looks like this.

// {
//   "alg": "HS256",
//   "typ": "JWT"
// }

// the alg key specifies which algorithm was used to create the token, in this case, the algorithm is HMACSHA-256, and the typ property classifies this token as being of the type JWT.

// Payload
// The payload includes claims (fancy name for things like permissions for the user) information or any other data we'd like to store in the token, which is most likely a user id. 
// There are specific claims defined in the JWT standard, and you can also add custom properties to this object.

// An example:

// {
//   "sub": "1234567890", // standard - subject, normally the user id
//   "name": "John Doe", // custom property
//   "iat": 1516239022 // standard - The Date the token was issued, expressed in seconds since epoch.
// }

// Signature
// To create a signature, we must create a string by base64 encoding the header and payload together and then signing it with a secret.

// Combining all three parts, you will get a JWT that looks like this:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c


// Visit this site (https://jwt.io/) and click on the debugger navigation link at the top to see an excellent representation of a JWT.

// On the left-hand side, there is a sample JWT, and on the right, we can see the different parts highlighted in a different color to match the parts of the JWT string that represent those.



// OVERVIEW
// In this section, we'll use JSON Web Tokens to handle authentication.

// To produce and verify the token, we'll use the jsonwebtoken npm module
// Let's produce and send a token on a successful login.

// add jsonwebtoken to the project and require it into auth-router.js.
// npm i jsonwebtoken
// change the /login endpoint inside the auth-router.js to produce and send the token.


// ./auth/auth-router.js
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // installed this library

const Users = require('../users/users-model.js');
const secrets = require('../config/secrets.js');

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user); // new line

        // the server needs to return the token to the client
        // this doesn't happen automatically like it happens with cookies
        res.status(200).json({
          message: `Welcome ${user.username}!, have a token...`,
          token, // attach the token as part of the response
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id, // sub in payload is what the token is about
    username: user.username,
    // ...otherData
  };

  const options = {
    expiresIn: '1d', // show other available options in the library's documentation
  };

  // extract the secret away so it can be required and used where needed
  return jwt.sign(payload, secrets.jwtSecret, options); // this method is synchronous
}


// add the ./config/secrets.js file to hold the jwtSecret

// the secrets will be safely stored in an environment variable, these are placeholders for development.
module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'add a third table for many to many',
};


// Login with the student/hired user and show the token.
// We have a server that can produce and send JWTs on a successful login.

