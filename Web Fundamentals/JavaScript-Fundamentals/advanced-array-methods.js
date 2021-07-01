// Functions in JavaScript are first-class citizens

// Simply put, this means that functions in JavaScript are a Type like any other Type (Boolean, String, Number), and they can be passed around as arguments to other functions.

function sayHello(name) {
  console.log(`Hello, ${name}`);
}

// callback function (or higher order function):
function callSayHelloWithLars(callback) {
  const innerName = 'Lars';
  callback(innerName);
}

callSayHelloWithLars(sayHello); // Hello, Lars

// Note you don't need to invoke sayHello when you pass it to the callback function
// the callback function invokes it 


const items = ['feather', 'coupon', 'cup', 'drill'];
items.forEach(item =>  console.log(item));


const newArray = items.map((item, idx) => 'item: ' + item + ' index: ' + idx);

console.log(newArray)



// Functional programming is a very fun programming paradigm because it lends itself to this idea of immutability. 
// Which is basically creating objects (variables, functions, etc) that can't be changed by other code later on in a codebase. 

// let's talk about what functions we have at our disposal to make variables and functions immutable. 
// The .map .filter and .reduce functions are commonly used to achieve immutability and take a set of data and transform it in some way.

// JSON is 'JavaScript Object Notation'

// Let's consider the following data set, an array of object literals. 
// You will often see this data type stored in imported .JSON files, including in guided practice today. Here though, our data is written inline, which is also fine.

const data = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

// .map is a higher-level function that takes 2 arguments, a callback and a context. 
// The callback is a function to be called "for" each item in the array, the context is the object value(s) to be used. 
// You'll often people say they are going to "map" some data. That means they are going to apply a set of rules to a data set. 
// For example "mapping" the array [1,2,3] times two would result in [2,4,6].

// The map function can also take in a callback that passes back a couple of things to us. The three things you'd get back from a callback passed to Map would be:

// The current item of the array state
// The current index of the current item index
// The entire array data
// In the example below, the value given in the callback is state since task 1 asks us to look at state data.

const mappedCityStates = data.map((state) => {
  return {'city': state.city, 'state': state.state};
});
console.log(mappedCityStates)
// [ { city: 'seattle', state: 'WA' },
//   { city: 'new york', state: 'NY' },
//   { city: 'boston', state: 'MA' },
//   { city: 'kansas city', state: 'MO' } ]

// .filter()
// What if we only want to see states who's population is greater than 650,000?
// we can use .filter to iterate over all items in the array and return only what we want. This is useful anytime we need a subset of a larger group of data.

// Filter takes exactly the same arguments as .map, namely: value, index, and array.


const filterLargeStates = data.filter((state) => {
  return state.population >= 650000;
});
console.log(filterLargeStates)
// [ { city: 'seattle',
//     state: 'WA',
//     population: 652405,
//     land_area: 83.9 },
//   { city: 'new york',
//     state: 'NY',
//     population: 8405837,
//     land_area: 302.6 } ]


// .reduce()
// Essentially, reduce works to algorithmically simplify an array down to a single value.

const reduceStatePopulations = data.reduce((total, state) => {
  return total + state.population;
}, 0);

// Importantly, we pass 0 as a second argument to our reduce function. 
// This argument will become the starting value of our total and, if not provided, would default to the first item in the array. 
// In this case, that would be disastrous because the first item of our array is an object, and we're trying to reduce our total to a single numerical value. 
// Instead, we can provide a starting value for total and thus set what our data type will reduce to. 
// Remember that total also gets memorized or remembered by our function each pass.

// The four items that get passed back from our callback function when using .reduce are:

// The current value of the total aggregated value (We set the initial value at the end of the function. In this case, we set it to 0).
// The current item in the array.
// The index again.
// The full array.

// These functions are fantastic and allow us to write clean, reusable code in a functional programming style

const landAreaAverage = data.reduce((total, state) => {
  let sum = total + state.land_area;
  console.log(sum, total, state);
  return sum;
}, 0);

// 83.9 0 { city: 'seattle',
//   state: 'WA',
//   population: 652405,
//   land_area: 83.9 }
// 386.5 83.9 { city: 'new york',
//   state: 'NY',
//   population: 8405837,
//   land_area: 302.6 }
// 434.8 386.5 { city: 'boston',
//   state: 'MA',
//   population: 645966,
//   land_area: 48.3 }
// 749.8 434.8 { city: 'kansas city',
//   state: 'MO',
//   population: 467007,
//   land_area: 315 }

console.log(landAreaAverage) // 749.8



// This does the same as above...
const landAreaAverage2 = data.reduce((total, state) => {
  return total += state.land_area;
}, 0);
console.log(landAreaAverage2) // 749.8

// Doesn't seem to matter if you use + or +=

const average = landAreaAverage / data.length;
console.log(average) // 187.45