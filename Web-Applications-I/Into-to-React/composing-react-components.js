// Nested functional components
// Everything in react is an object. 
// The React object is just a symbol created by the react virtual DOM.
// React takes that object, gives it to the virtual DOM and says "here is the regular DOM and my version of the DOM, what's different?"
// All components return some sort of object at the end of the day.
// Being that we can use functions to return these objects, we can nest them together to make giant component trees.
// The props chain will flow top to bottom.
// The pattern is called Prop Drilling.
// Its functions and objects all the way down

//