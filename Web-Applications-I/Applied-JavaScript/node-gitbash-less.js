// Less (Leaner Style Sheets; sometimes stylized as LESS) is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets (CSS) 
// and run on the client side or server side. 
// Designed by Alexis Sellier, Less is influenced by Sass and has influenced the newer "SCSS" syntax of Sass, which adapted its CSS-like block formatting syntax. 
// Less is an open source. Its first version was written in Ruby; however, in the later versions, use of Ruby has been deprecated and replaced by JavaScript. 
// The indented syntax of Less is a nested metalanguage, as valid CSS is valid Less code with the same semantics. 

// Less provides the following mechanisms: variables, nesting, mixins, operators and functions; 
// the main difference between Less and other CSS precompilers is that Less allows real-time compilation via less.js by the browser

// Good examples here: https://en.wikipedia.org/wiki/Less_(stylesheet_language)


// In preprocessing, there are three main concepts we need to understand:

// The language or syntax that we use to write our code (LESS)
// The compiler that converts the language (Node)
// The CSS output from the compiler (Normal CSS)

// For us to use our language (LESS), we need to have a compiler that understands that specific language input.
// A compiler is a program that converts language into code. In our case, LESS is the language, and CSS is the outputted code. 
// We utilize compilers to provide more features than standard CSS can offer.


// Step By Step Install Instructions for PC

// Step 1: Install Node.js

// Step 2: Install Git Bash (Git SCM)
// Choose the option in the installer for 'Use Git and optional Unix tools from the command prompt'
// Also choose option for 'Checkout as-is, commit Unix-style line endings'
// Check all three: Enable file system caching, Enable Git Credential Mnager, Enable symbolic links 

// After the installer finishes, open git bash and run node -v to make sure node is installed correctly
// If you don't see some node version numbers display in your git bash window, restart git bash and try again

// Step 3: Install Less

// NOTE: You will see our commands have -g in them. Please write the commands exactly as you see them. Globally installing packages is ideal for our situation.

// Open git bash and run npm install -g less
// If it's not working, restart your git bash and try again
// Step 4: Install less-watch-compiler

// Open git bash and run npm install -g less-watch-compiler

// cd into your project on your local machine
// Once you are in the root of your project run less-watch-compiler less css index.less
// Your project should be up and running, change some styles around in your .less file, and save the file to make sure you see a change in your CSS.
