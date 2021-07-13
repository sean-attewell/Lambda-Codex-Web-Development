// 'props' are how we inject data into react components, and how they inject that data into child components 
// through props... as in properties in the JSX you return.

// If we don't have visibility of the data (it's not in scope), we take data through props.
// props is an object, data we wish to inject will be properties of the props object.

// A component gets declared in the function declaration,
// but the component gets executed in ReactDOM.Render(<App friends={siths}/>, rootElement);

// Using this attribute like syntax with JSX we inject any data we like into the component 
// the data always flows down to children, never back up.

// The important thing to remember is that we never make changes to props data - props are read-only. 
// This helps ensure that our data flow remains clean and organized. This way, we know exactly where changes are made to our application. 
// And if something goes wrong, we can find the issue and fix it. 
// Imagine an application with data changes occurring in every file. 
// How easy would it be to understand how it worked, and how long would it take to locate a problem with the code?


// Managing state and props within components
// A stateful component is one that holds state data, either as an object placed inside the constructor function, 
// or a function component that includes the .useState function made available in the React v16.8 release (the one with hooks).

// When data comes into our application, it is loaded and stored on state, either in a centralized component specifically for state management, 
// or a component rendering other components. 
// When data is consumed in multiple components, it is probably best to centralize that data in state in a top-level component. 
// Other data that is specific to a certain component can live locally, just inside that component. 
// Components rendered in a stateful component can receive state data via a props attribute. 
// Here, it can be sent down on the props object to the child component, and there we can access it just like we would with most any other object. 

// However, if we decide we want to make any change to our data we do not change the prop data itself. 
// Instead, we send back what changes we should make to our state holding component; 
// often, stored changes are sent back up to the parent container as enclosed information in a called function. 
// You'll learn plenty more about sending data in the coming days and weeks. For now, let's take a closer look at class components and function components, 
// and how they differ for holding state.


// Take the following example of data we'll be passing, a simple user object holding two key/value pairs.
const user = { name: "Hubert", age: 27 };

// Next, we save our user object to a state variable using the state hook you learned in the previous lesson. 
// Then, we declare a named prop object inside the JSX in our return statement and set it equal to the state variable. 
// The naming convention may appear confusing at first glance, but try to understand which 'user' name is the props object, and which is referencing the state variable.
// It makes sense for them to have the same name because the data is identical. 
// That said, their intended use is not. Once data is set as props data, it is no longer state data and should never be mutated. 
// If you wish to change the value of the props data, it must be done using the provided setUser function.

const App = () => {
  const [user, setUser] = useState({ name: "Hubert", age: 27 });

  return <UserInfo user={user} />;
};


// Below, the function component UserInfo receives the state variable as props from its parent component. 
// The props are passed in as an object argument
// and then sent down as a named "props" object to the child component (of UserInfo) seen later as DisplayName.

// When the props data is passed as a JSX attribute on DisplayName, it is set to a variable and passed inside curly braces as object data. 
// The named variable is now set as an object (containing our user data) on our props object and is now reachable from inside the component.

const UserInfo = (props) => {
    return (
        <div>
            <DisplayName user={props.user} />
        </div>
    )
}

// DisplayName receives the props object as an argument and returns a React element 
// where we pass the selected data to display by first referencing props -> then our named props object -> then the attribute name of the data we want to display.

const DisplayName = props => {
    return (
        <div>
            <h2>Hello, my name is {props.user.name}.</h2>
        </div>
    )
}

// So why do we pass information around in this way? A few reasons are listed below.

// Control. As we learned with modules, when we break our components down into smaller functions, we gain greater control over what we display and how it works. 
// By keeping state in one of a few select components and passing as props, we minimize the risk of making unintended changes to our state data.

// Readability. Separate files are easy to keep in order, and make it easier for other developers to read through our code, know where our state is held, 
// and where it's being sent. 

// Maintenance. If we want to make changes, we can find components quickly, and working in files that only manage one or two different aspects of our application 
// is a much easier task than scrolling through hundreds of lines of code! 
// Also, this way, we can isolate any problems that come up and debug faster.

// Reusability. This is huge! Now we have reusable components, and they can render any data that we pass through, so long as it matches to type on our object. 
// And with a few modifications, we render additional data if we added to our object. 
// Or we could even pass in an array of hundreds of objects and render the information contained on each one. 
// This would only require a few additional lines of code.
