// A const variable is a variable that cannot be changed later in the code. It's short for "constant". In our example above "Bob" could not be changed to "Alice" and would throw an error.

// const firstName = "Alice";
// firstName = "Bob"; // <- this would cause an error

// let is a new ES6 variable keyword. This will assign a variable much like var, but with a little bit different behavior. Most notably, it differs by creating "block level scope".


// You will get undefined when you are looking for a variable that does not have a value yet. undefined simply means what you are asking for does not exist.
// console.log(unkownVar); // undefined

// null is an object that we, the developers, set when we want to tell other developers that the item they are looking for exists, but there is no value associated with it. While undefined is set by the JavaScript language, null is set by the developer. If you ever receive null, it means that another developer has set that value to null.

let phoneNumber = '123-456-7890';
phoneNumber = null;

console.log(phoneNumber); // null


// Truthiness

// When using an if statement or other statements that expect a Boolean value, if the expression given is not a Boolean value JavaScript will do something called type coercion, which means it will transform whatever it is given into a Boolean value. The coercion of values to booleans is known as "truthy" and "falsey" - yes, seriously. Every data type has some truthiness to it.

    // items that are interpreted as true
    // true
    // 1
    // ' '
    // [] // an array
    // {} // an object
    // function() {}

    // items that are interpreted as false
    // false
    // 0
    // undefined
    // null
    // ''

// The triple equals will compare everything about the two items, including type, and return if they are exactly equal or not. 
// Something to note, there is also a "double equals" ( == ) operator which will compare two items, but it allows type coercion 
// so a string and an integer can be considered equal (1 == '1' // true). Due to this, it is considered bad practice to use the double equals operator.

1 === 1; // true
1 === '1'; // false
'cat' === 'cat'; // true
'cat' === 'Cat'; // false

// the "not equals" ( !== ) operator. This will return true if the items are NOT equal to each other, in any way. 
// ***This, like the triple equals operator***, takes type into account.

1 !== 1; // false
1 !== '1'; // true
'cat' !== 'cat'; // false
'cat' !== 'Cat'; // true


// Logical Operators

// 100 > 10 && 10 === 10; // true
// 100 > 10 && 10 === 9; // false
// 100 > 10 || 10 === 10; // true
// 100 > 10 || 10 < 9; // true
// 10 === 9 || 10 > 9; // true
// 10 === 9 || 1 > 9; // false
// !(1 === 1); // false

// A couple things to note about logical operators.

// The expressions are evaluated in order, and the computer will skip redundant expressions. In an && statement, if the first expression is false, 
// the second expression will not be evaluated because BOTH expressions need to be true. Similarly for the || operator, 
// the expressions will be evaluated only as needed. If the first expression is true, the second will not be evaluated 
// because there only needs to be one true statement to fulfill the requirements of the operator.

// Use parentheses to define the order of operations. Code inside of the parentheses will be evaluated FIRST.
//  We can wrap ANY expression in parentheses and the code inside the parentheses will be evaluated before evaluating the rest of the expression.

