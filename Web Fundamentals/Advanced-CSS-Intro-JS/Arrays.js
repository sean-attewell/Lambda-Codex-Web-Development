// In many cases, we want to be able to point to a collection of data of either the same or different types

const flavors = ['chocolate chip', 'sugar', 'peanut butter', 'lemon crisp'];

console.log(flavors.length);  // 4
console.log(flavors[1]);  // 'sugar'

// The return of the length property - 1 will always return the last item in the array. 
// We know the first item is always going to be 0, and every item after is shifted over one number. 
// So in our example, the last item has an index of 3 even though flavors has a length of 4.

console.log(flavors[flavors.length - 1]);  // 'lemon crisp'
// Note that in python you can just do list[-1]

flavors[0] = 'caramel pecan';
console.log(flavors);  // ['caramel pecan', 'sugar', 'peanut butter', 'lemon crisp']

// .push adds an item to the end of the array, incrementing its length by 1. (.push returns the new length)
console.log(flavors.push('carmel Pecan')); // 5

// .pop removes the last item in the array, decrementing the length by 1. (.pop returns the "popped" item)
console.log(flavors.pop()); // 'carmel Pecan'

// .unshift and .shift are exactly like .push and .pop, except they operate on the first item in the array. 
// .unshift(item) will put a new item in the first position of the array 
// .shift() will remove the first item in the array.

console.log(flavors.unshift('carmel Pecan')); // 5
console.log(flavors.shift()); // 'carmel Pecan'

// For those with prior programming experience: because JavaScript is not a strongly typed language, arrays do not need to be typed either. 
// Arrays in JavaScript can contain multiple different data types in the same array.

