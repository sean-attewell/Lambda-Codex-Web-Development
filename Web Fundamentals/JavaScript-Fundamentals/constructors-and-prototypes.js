// All objects in JavaScript have a prototype property by default. 
// This property is used as an object to attach methods and other properties that can be delegated down to other child functions/objects.

// ***CONSTRUCTOR FUNCTIONS***
// The constructor function is a way we can build objects (capitalised by convention).

function Animal(object) { //takes in object, makes object
  this.name = object.name;
}

// A constructor function "constructs" objects. You can think of it as a template. 
// The function itself needs to take in an object literal of some sort so that it can map that object literal's properties to a new object that will be returned once instantiated.


function Person(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
  this.speak = function () {
    return `Hello, my name is ${this.name}`;
  };
}

// 'this' refers to the object the constructor function makes when called with the 'new' keyword

// We call Person with the new keyword, and we feed it an object literal that will map to those attributes specified in the Person block

const fred = new Person({
  age: 35,
  name: 'Fred',
  homeTown: 'Bedrock'
});

// When new is called, the constructor function can essentially create a context for a this object. 
// Then what gets returned from that constructor function is that particular this object with the new properties added to it

console.log(fred);
// Person { age: 35, name: 'Fred', homeTown: 'Bedrock', speak: [Function] }
console.log(fred.speak());
// Hello, my name is Fred

// speak was inherited from the Person object! 
// This showcases that we are using inheritance and introduces how we use prototypes in JavaScript.


// ***PROTOTYPE***

// The prototype is the mechanism by which all JavaScript objects inherit from one another. 
// You can think of the prototype as an object that objects use to hold onto values that can be passed down to other objects. 

// Let's refactor the constructor function Person and remove the speak function from the object. 
// After speak has been removed, we will introduce a new speak property on Person using Person.prototype.


function Person2(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
}

Person2.prototype.speak = function () {
  return `Hello, my name is ${this.name}`;
};

const fred2 = new Person2({
  age: 35,
  name: 'Fred',
  homeTown: 'Bedrock'
});

console.log(fred2)
// Person2 { age: 35, name: 'Fred', homeTown: 'Bedrock' }
console.log(fred2.speak())
// Hello, my name is Fred (note this works even though speak isn't on the fred2 object)
// It looks for speak first in the object's properties, then when it doesn't find it, looks in the object's prototype (then the prototype's prototype)

// Now that we have added the speak function to the prototype of Person2, it will no longer be on the object fred. 
// The Person2 prototype wholly owns speak. 
// Person2 is now able to pass down speak to each instance of Person without creating a new property on any new objects.

// Let's look at how inheritance works with prototypes. Here we create a Child constructor. 
// Note that it expects an object, which can contain all attributes needed by this constructor and the one it is inheriting from.
// Notice we are using the call() method to bind this to Person.

function Child(childAttributes) {
  Person2.call(this, childAttributes); // binding this to Person... Literally calling person2, which is a function, but with this context and attributes.
  this.isChild = childAttributes.isChild; // this will be a special attribute to Child
}

// The problem with Child is that it doesn't necessarily know about the Person prototype yet. 
// We have to manually tell Child about Person using Object.create().

Child.prototype = Object.create(Person2.prototype);

// We now have linked the Person prototype together with the Child prototype. 
// Eventually, we'll get this linking for free with the class keyword, but seeing Object.create() is good because it demonstrates how the class keyword works under the hood.

// Now that we have created a Child constructor, let's introduce Pebbles to the family:

const pebbles = new Child({
  age: 3,
  name: 'Pebbles',
  homeTown: 'Bedrock',
  isChild: true
});

// We are using the prototype's inheritance from the Child constructor to access our `Person' properties.

console.log(pebbles.speak())
// Hello, my name is Pebbles

// We just used inheritance from the Person prototype to use pebbles.speak. Take a moment to think about that!
// To further illustrate how detached pebbles and fred are, let's add a special method to the Child prototype, that fred won't have access to. 
// Make sure this method is under the Object.create(), or it won't work correctly.

Child.prototype.checkIfChild = function() {
  if(this.isChild) {
    console.log(`My name is ${this.name} and I am a child object`);
  }
};

pebbles.checkIfChild()
// My name is Pebbles and I am a child object


// The call() allows for a function/method belonging to one object to be assigned and called for a different object.

// call() provides a new value of 'this' to the function/method. 

// With call(), you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.


function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price); // give Product the Food's context (this) and call Product with the Food's attributes
  this.category = 'food';
}

// You'll inherit the object as constructed by the parent constructor, but now with extra attribute specific to Food.

console.log(new Food('cheese', 5).name);
// expected output: "cheese"
console.log(new Food('crackers', 2).category);
// expected output: "food"

// Note: While the syntax of this function is almost identical to that of apply(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.


