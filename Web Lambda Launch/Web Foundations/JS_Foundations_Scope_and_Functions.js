function logsHello() {
  console.log('hello');
}

logsHello();



// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.
// Parameters are initialized to the values of the arguments supplied.

function logsSchool(School, descriptor) {
  console.log(`${School} ${descriptor}`);
}

logsSchool('Lambda', 'is Awesome!'); // logs Lambda is Awesome!


// Scope is defined as which variables we currently have access to and where

// block level scope is used in if statements and for loops. 
// In block level scope, a variable declared using either let or const is only available within the statement or loop (like i in a for loop). 
// Similarly, there is function scope, where temperature exists inside the function, but not elsewhere in your code file.


// The only way for us to use data that is local to a function is with the keyword return. return, essentially, lets data escape a function. 
// Nothing other than what is returned can be accessed outside of the function. 
// return is always the last thing in a function because when the function hits a return statement, the function immediately stops everything else that it is doing.

// We can also assign the value of a return statement to another variable, and we will now have access to the data returned from the function.

function addTwoNumbers(num1, num2) {
  const sum = num1 + num2;
  return sum;
  console.log('This will never be reached');
}

const newSum = addTwoNumbers(1, 2);
console.log(addTwoNumbers(1, 2)); //returns 3
// console.log(sum); // returns undefined - sum exists only inside the function
console.log(newSum); // returns 3 - value is held in newSum

// Note: We will never be able to have access to the actual variable created in the function. We will only have access to the data that variable was assigned to.

// calculate the proportion of heads
// It will be important that we declare the variable outside the loop but inside the function.
// This way the variable can be referenced and changed inside of the for loop, but will reset to 0 every time the function is run.



function flip(repeat){
  var countHeads = 0 // declare countHeads OUTSIDE loop but INSIDE function
  for (let i = 0; i < repeat; i++){
    var coinFlip = Math.round(Math.random());
    if (coinFlip === 1){
      countHeads = countHeads + 1
      console.log("Heads");
    }
    else{
      console.log("Tails");
    }
  }
  return(countHeads/repeat)
  }
  
console.log(flip(10));