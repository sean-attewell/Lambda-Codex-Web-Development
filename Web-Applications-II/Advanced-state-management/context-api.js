// https://reactjs.org/docs/context.html

// In a typical React application, data is passed top-down (parent to child) via props
// but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. 
// Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

// We use the Context API when we have global data that lots of components share (things like user or theme)
// or when we have to pass data through intermediate components. 
// The API can help keep your state relatively clean.

// Context is primarily used when some data needs to be accessible by many components at different nesting levels. 
// Apply it sparingly because it makes component reuse more difficult.
// If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
// see component-composition.js

class App extends React.Component {

render() {
  return <Toolbar theme="dark" />;
}
}

function Toolbar(props) {
// The Toolbar component must take an extra "theme" prop
// and pass it to the ThemedButton. This can become painful
// if every single button in the app needs to know the theme
// because it would have to be passed through all components.
return (
  <div>
    <ThemedButton theme={props.theme} />
  </div>
);
}

class ThemedButton extends React.Component {
render() {
  return <Button theme={this.props.theme} />;
}
}


// Using context, we can avoid passing props through intermediate elements:

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
const ThemeContext = React.createContext('light');

class App extends React.Component {
render() {
  // Use a Provider to pass the current theme to the tree below.
  // Any component can read it, no matter how deep it is.
  // In this example, we're passing "dark" as the current value.
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
return (
  <div>
    <ThemedButton />
  </div>
);
}

class ThemedButton extends React.Component {
// Assign a contextType to read the current theme context.
// React will find the closest theme Provider above and use its value.
// In this example, the current theme is "dark".
static contextType = ThemeContext;
render() {
  return <Button theme={this.context} />;
}
}


// https://hackernoon.com/everything-you-need-to-know-about-reacts-context-api-e5c8c32ef202

// version 16.3 gives us Context API which is an upgraded version of old concept of context in React 
// which allow components to share data outside the parent-child relationship.

// So if each component manage it own state, how could you share data between nested components? 
// Yes, it is true that we have props to pass the data but that only works in parent-child relationship case.

// Such kind of problem which could be a havoc for React performance is known as Prop drilling. 
// In simpler terms, it relates to the passing down of props from the upper level i.e Parent to lower level components such as Child, Grandchild etc 
// in the component tree, where components in between doesn’t care about these props.

// Although, you have libraries such as Redux to mitigate this kind of complexity 
// but it’s worthless to use Redux in this case as it will make your app’s logic more complex. 
// Nevertheless, this is where the concept of Context API in React comes into play.

// Using Context is the best fit for the use case where your codebase consists of lot of components that depends on a single piece of data, 
// but are nested deep within the component tree.

// React’s new Context API provides a way to pass and store data down a React component tree without writing it into every layer of the component hierarchy. 
// It does so by leveraging on two types of components:

// Provider — The Provider component is used in higher hierarchy of the tree. 
// It accepts a prop called as Value. 
// It acts as a root component in the hierarchical tree such that any child in the tree can access the values that are provided by the context provider.

// render() {return (
// <Provider value={this.state.contextValue}>
// {this.props.children}
// </Provider>
// );
// }

// Consumer — As the name implies, consumer consumes the data which is being passed, irregardless of how deeply nested it is located in the component tree. 
// That means, Consumer don’t have to be necessarily be the child of Provider. 
// Instead, it can access data from anywhere down the component tree.

// A consumer renders the data by using a render prop API.

// render() {return (
// <Consumer>
// {contextValue => <Child arbitraryProp={contextValue} />}
// </Consumer>
// )
// }


// Codex notes:
// Context API allows us to create what's known as a Context Object.

import { createContext } from 'react';

const ContextObject = createContext();

// Usually we'll name the object by the data it will hold - ie UserContext, or MoviesContext, etc...
// This object gives us two important components to work with a ContextObject.Provider and a ContextObject.Consumer

// The Provider method accepts a single prop called value, the value prop is used to provide our data across our app.

<ContextObject.Provider value={dataToPassDown}>
  <NestedComponent />
  <OtherNestedComponent />
</ContextObject.Provider>

// The context Consumer consumes and returns the value provided by the Provider.


// FOLLOW ALONG

// Diving into the code, you'll notice we're bringing in two hooks from the react library useState and useEffect.
// The useState hook holds and sets user state. The useEffect hook performs a pseudo API call that sets "my user" to state.
// You'll also notice a User component rendering Name goes here as a placeholder.

// Now that we have that out of the way, let's talk about the goal we want to achieve. 
// We want to be able to provide data to the child component (based on user data sitting in state) and consume it, using Context API.

// The first thing we need to do is make a new folder named contexts. 
// This folder is going to hold all the context objects we create.

// Inside that folder we're need to create a new file named UserContext.js. 
// This is where we're going to create our first context object!
// Inside that file, we're going to create our UserContext.

import { createContext } from 'react';
export const UserContext = createContext();

// Now you may be thinking wow! Only two lines of code? Yep! Only two lines of code and we have successfully created our UserContext.
// Now that we have created our UserContext let's import it into our index.js.

import { UserContext } from '../contexts/UserContext';

// After creating and importing our UserContext we can start providing our user data across our application.
// To do so, we need to wrap all of our child components inside of our UserContext Provider and pass it a prop of value, this prop contains our user state.

return (
    <UserContext.Provider value={user}>
        <div className="container">
            <User />
        </div>
    </UserContext.Provider>
);

// Doing so, we allow all child components of our UserContext Provider to consume the value(s) that come from the hook, in our case, the value is a user object.

// Consuming the data passed into the provider is the final step for using the Context API. 
// We will use a context hook for this, though keep in mind that you can use render props as well.

// import the useContext hook from the react library and our UserContext.

import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

// After importing our UserContext, we will consume the data from it.

const user = useContext(UserContext);

// Finally, we can render our user to the screen!

return (
    <div className="profile">
        <p>
            {user.lastName}, {user.firstName}
        </p>
    </div>
);

// Completed Codesandbox
// https://codesandbox.io/s/context-api-solution-2y0cu?file=/src/index.js

// index.js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import User from "./components/User";
import "./styles.css";

// Contexts
import { UserContext } from "./contexts/UserContext";

function App() {
	const [user, setUser] = useState({});

	useEffect(() => {
		setUser({ firstName: "John", lastName: "Dough" });
	}, []);

	console.log(UserContext);
	return (
		<div className="container">
			<UserContext.Provider value={user}>
				<User />
			</UserContext.Provider>
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// UserContext.js
import { createContext } from "react";
export const UserContext = createContext({});


// user.js
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function User() {
	const user = useContext(UserContext);

	return (
		<div className="profile">
			{user.lastName}, {user.firstName}
		</div>
	);
}

export default User;


