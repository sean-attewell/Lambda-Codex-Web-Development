// Authentication is the process by which our Web API verifies a client's identity that is trying to access a resource. 
// This is different from authorization, which comes after authentication and determines what type of access a user should have.

// Adding authentication to a Web API requires that an API can:

// Register user accounts.
// Login to prove identity.
// Logout of the system to invalidate the user's access until they log in again.
// Add a way for users to reset their passwords.


// Password storage
// The rule of thumb is: NEVER, EVER, under no circumstances, store user passwords in plain text. 
// Then what are the two main options:
// encryption.
// hashing.

// Password Hashing vs. Encryption for password storage
// Encryption goes two ways. First, it utilizes plain text and private keys to generate encrypted passwords and then reverses the process to match an original password.
// Cryptographic hashes only go one way: parameters + input = hash. It is pure; given the same parameters and input, it generates the same hash.

// Suppose the database of users and keys is compromised. 
// In that case, it is possible to decrypt the passwords to their original values, which is bad because users often share passwords across different sites. 
// This is one reason why cryptographic hashing is the preferred method for storing user passwords.

// Password Strength
// Password length alone is not enough to slow password guessing, but long passwords are generally better than short, complicated ones. 
// It is a trade-off between convenience and security.

// Brute-Force Attack Mitigation
// A common way that attackers circumvent hashing algorithms is by pre-calculating hashes for all possible character combinations up to a particular length using common hashing techniques. 
// The results of said calculations are stored in a database table known as a rainbow table. 
// Whenever there is a breach, the attacker checks every breached password against their table.

// Which Cryptographic Hashing Algorithm should we use? MD5, SHA-1, SHA-2, SHA-3? 
// None of these, because they are flawed, these algorithms are optimized for speed, not security.

// We aim to slow down hackers' ability to get at a user's password. 
// To do so, we will add time to our security algorithm to produce what is known as a key derivation function.

// [Hash] + [Time] = [Key Derivation Function].

// In the next section, we'll learn how to use a popular Key Derivation library to store user passwords safely.


// Instead of writing our key derivation function, we'll use a well-known and popular module called bcryptjs 

// Bcryptjs features include:

// password hashing function
// implements salting both manually and automatically.
// accumulative hashing rounds

// Having an algorithm that hashes the information multiple times (rounds) means an attacker needs to have the hash, know the algorithm used, and how many rounds were used to generate the hash in the first place.


// FOLLOW ALONG

// Install bcryptjs using npm.

// Import it into your server.

const bcrypt = require('bcryptjs');

// To hash a password:

const credentials = req.body;

const hash = bcrypt.hashSync(credentials.password, 14);

credentials.password = hash;

// move on to save the user.


// To verify a password:

const credentials = req.body;

// find the user in the database by it's username then
if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
  return res.status(401).json({ error: 'Incorrect credentials' });
}

// the user is valid, continue on


// A more common sense way of verifying

// Use bcrypt.compareSync(), passing the password guess in plain text and the password hash from the database to validate credentials.

// If the password guess is valid, the method returns true. Otherwise, it returns false. 
// This is because the library hashes the password guess first and then compares the hashes.

server.post('/api/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      // check that passwords match
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        // we will return 401 if the password or username are invalid
        // we don't want to let attackers know when they have a good username
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});