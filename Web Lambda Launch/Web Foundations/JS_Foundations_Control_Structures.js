
// Control flow means that not all code on the screen is executed in order, or at all. 
// Conditional logic is like an if statement

// Remember, when using a block of conditionals, only ONE of the statements will be run, even if there are multiple statements that are true. The same cannot be said for multiple if statements; they will run if true regardless of statements before and after. Take this example:

const age = 21;
if (age > 20) {
  console.log('older than 20!');
} else if (age > 15) {
  console.log('older than 15!');
} else {
  console.log('younger than 15!');
}
// In the above example only older than 20! will be logged even though both the if statement and else if statement were true.

const age2 = 21;
if (age > 20) {
  console.log('older than 20!');
}
if (age > 15) {
  console.log('older than 15!');
}
if (age <= 15) {
  console.log('younger than 15!');
}

// In the above example the first and second if statements would be logged because both of them are true.
// As you can see, it will be up to you to decide if you want to have multiple actions based on your data or just one action.

var coinFlip = Math.round(Math.random());

if (coinFlip === 1) {
  console.log("Heads");
} else {
  console.log("Tails");
}

// for loops

// runs 5 times:
for (let i = 0; i < 5; i++) {
  console.log("hello, world!");
}

// First, we must declare a variable (often i which is short for "index"). 
// Second, we will have a conditional expression. The conditional expression will be evaluated and the code inside the curly braces will be executed if the conditional evaluates to true. 
// Third, we will increment our variable, telling the loop a pattern to follow.

for (let i = 0; i < 5; i++) {
  var coinFlip = Math.round(Math.random());
  if (coinFlip === 1){
    console.log("Heads")
  }
  else{
    console.log("Tails")
  }
}