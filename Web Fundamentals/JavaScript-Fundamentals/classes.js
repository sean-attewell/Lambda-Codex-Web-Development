// With ES6 we gained the ability to use what is known as the class keyword
// Classes in JS are syntactic sugar - it's all constructor functions and prototype objects under the hood.

// Classes in JS are another type of Function

// There are class declarations that we'll be learning about, but there are also class expressions.

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
} 

// The constructor function is now inside the class. It is the foundation of every class.
// When present, you'll be building your object's properties (these get returned when you call new) inside the constructor's body on the this keyword

// 'this' refers to the object the constructor function makes when called with the 'new' keyword
// Remember: classes will return us objects.

const newRect = new Rectangle(400, 800);
console.log(newRect);
// Rectangle { height: 400, width: 800 }
// Note that is specifices the class name, which a normal object wouldn't.


// Inheritance with Classes
// Inheritance is where classes shine

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

// Notice that speak() is a method with some special syntax in this class. 
// This method will not be a method on the object, but it will live on the object's prototype instead, which is nifty when you're worried about memory and such.

// The extends word + super function will abstract away the .call(), as well as binding our objects prototypes to one another
// extends and super function are always used together.

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(this.name + ' barks.');
  }
}

// Parent.call(this, childattributes) is not something we have to do anymore.
// Super will pass the attributes back up to the parent class (another way of saying, calls the parent function in child 'this' context, with attributes given)
// Child.prototype = Object.create(Person2.prototype); is not something we have to do anymore either

// The speak method made on the class isn't going to be a property on the object made with the class, it will exist within the prototype
// If you're looking at a child class, it won't be on it's prototype, but will be on the parent's prototype. 
// (of course it is also on the child class prototype for the above example because we've overwritten it)

const doggy = new Dog('Grizzly');

doggy.speak();
//Grizzly barks.


// The object our class returns will have attributes assigned to it from the constructor() function.

// All methods attached to the class body will be stored on the Objects prototype in a special way. 
// There is a bit more magic here than just Object.create(Foo.prototype); and Class.call(this, attrs); 
// But now that we know this, we can accept that the class keyword does this gloriously for us.

// The 'extends' keyword is used to extend a parent object. A clue to finding out if a class is a sub-class is to look for extends.

// Finally, if you're going to use extend, super() needs to be called from within the constructor function


// Converting from constructor functions to classes:

function Person(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
}

Person.prototype.speak = function () {
  return `Hello, my name is ${this.name}`;
};

class PersonClass {
  constructor(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
  }
  speak() {
    return `Hello, my name is ${this.name}`;
  }
}

// and for the child:

function Child(childAttrs) {
  Person.call(this, childAttrs); // this is the special sauce
  this.isChild = childAttrs.isChild; // this will be a special attribute to Child
}

Child.prototype.checkIfChild = function() {
  if(this.isChild) {
    console.log(`${this.speak} and I am a child object`);
  }
};

class ChildClass extends PersonClass {
  constructor(childAttrs) {
    super(childAttrs);
    this.isChild = childAttrs.isChild;
  }
  checkIfChild() {
    if(this.isChild) {
    console.log(`${this.speak} and I am a child object`);
    }
  }
}

const pebbles = new ChildClass({
  age: 3,
  name: 'Pebbles',
  homeTown: 'Bedrock',
});

console.log(pebbles)
// ChildClass {
//   age: 3,
//   name: 'Pebbles',
//   homeTown: 'Bedrock',
//   isChild: undefined }
