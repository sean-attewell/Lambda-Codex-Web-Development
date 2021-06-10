// In many cases, though, we want to be able to point to a collection of data of either the same or different types

const flavors = ['chocolate chip', 'sugar', 'peanut butter', 'lemon crisp'];

// Just as string .length counts the characters, array .length will return the number of items in an array:

console.log(flavors.length); // 4

console.log(flavors[1]); // sugar
console.log(flavors[flavors.length - 1]); // 'lemon crisp'. You can't just use -1 like python. It's length -1 because zero based indexing



function eightBall() {
  const answer = Math.floor(Math.random() * 8);
  const fortunes = [
    "yes, definitely",
    "you can rely on it.",
    "Without a doubt.",
    "most likely.",
    "hmm... I'm not sure!",
    "yikes. Nope.",
    "try again.",
    "very doubtful.",
  ];
  fortune = fortunes[answer];
  console.log(fortune);
}
eightBall();

// More methods:

flavors.push('carmel Pecan');
const lastFlavor = flavors.pop();
console.log(lastFlavor) // carmel Pecan

// .unshift and .shift are exactly like .push and .pop, except they operate on the first item in the array. 
// .unshift(item) will put a new item in the first position of the array, and .shift() will remove the first item in the array.

// For those with prior programming experience: 
// because JavaScript is not a strongly typed language, arrays do not need to be typed either. Arrays in JavaScript can contain multiple different data types in the same array

// Loops, of all types, are more or less designed to work with arrays

const flavors2 = ['chocolate chip', 'sugar', 'peanut butter', 'lemon crisp'];

for (let i = 0; i < 4; i++) {
  console.log(flavors2[i]);
}

// for…in
// For…in loops are another type of loop designed especially for working with arrays. As the name implies, these loops do something for each item in an array, eliminating the need for the conditional that we use in standard loops. Take a look at the loop below, what do you expect the output to be?

for (i in flavors) {
  console.log(flavors[i]);
}
// If you guessed that the output would be each item in our flavors array ('chocolate chip', 'sugar', 'peanut butter', 'lemon crisp'), great work! The variable i is the index number. We'll continue to practice with these in the challenge.

// for…of
// For…of loops are the final for loop type in JavaScript. This for loop type loops over each item in an arry, but in this loop the variable contains the item in the array, not its index number.

for (flavor of flavors) {
  console.log(flavor);
}

// Note that in python a 'for...in' loop is like a JS 'for...of' loop.

