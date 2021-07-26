// React Router is declarative style routing for React applications. 
// React Router is a versatile tool because it can be used for React and React Native as well. 
// Since it was built for use within a React ecosystem, it uses a Reactive & Declarative context

// Route
// Routes are a way of getting to a destination. A route can specify which components to render on the page, and in what order, as we've seen before.

// To set up React Router, you need to declare what components will be mounted when certain URL paths are met. 
// This step happens after we've wrapped our Root component in the Router or BrowserRouter component. 
// The best part of React Router is that you can do this at pretty much any point during your development process, 
// whereas previously you had to declare your routes early on in the development cycle.
// What this allows us to do is figure out more important things without allowing routing to get in the way. React Router is a super useful tool for this reason!

// Once you have React Router installed by using npm install react-router-dom, you can import the Route Component and use it within your application.
// In the past, we used to include the entire react-router package, but today we get to specify which target we're building for (Web or Native). 
// Because we're building for web, we're going to target the react-router-dom package and include it into one of our applications.

import { Route } from 'react-router-dom';

// The Route component declares what components will be mounted based on what URL's the user requests. 
// The best part about this process is that we get a chance to do this in a very "React" way. 
// Lets picture a component Users that will display a list of users in your system when the URL www.coolestapp.com/users is requested. 
// The Route component takes in a few props; the first is the URL path where the Route component will trigger. Next is the component prop.
// This is the component that you want React to mount when the URL matches the requested path. So in our case, when /users is requested, the Users component will be mounted.

<Route path="/users" component={Users} />
// This route will mount the users component whenever the /users URL is requested within our application

// The exact prop
// When it comes down to it, we are using an API that already exists for us as web developers. And that is the History API that is built into our web browser.
// https://developer.mozilla.org/en-US/docs/Web/API/History 
// If the URL / and /about are both requested, and we have an algorithm to match the characters in the sequence /, /about
// Because of the way this is set up, if we request the route /about, then both the Home Component and the About Component will be rendered. 
// React Router anticipates this, and the exact prop to the Route component solves the problem.
// By placing exact on a <Route /> component, you are saying that the specific path will only trigger if it matches exactly the path requested. 
// This defaults to false, so by simply including the exact prop on your Route component, it will set it to true and only mount our Home component 
// when the specific path / is requested and not when /about is requested

// <Route exact path="/" component={Home}/>
// <Route path="/contact" component={Contact}/>
// <Route path="/about" component={About}/>

// The link component can be included just like any other component in your application. 
// This will produce an anchor tag that will link to a pre-defined component of your choice. 
// Remember, if we set up our routes properly, we'll be able to use the anchor component to navigate our browsers to the path where a component can be mounted

import { Link } from 'react-router-dom'

<Link to="/about">About</Link>

// The first thing that Link takes as a prop (and most important) is the to props. 
// Notice in the above code block that to is a string that looks like a URL. 
// This is just like the href="/about" attribute on the anchor tag




// Process:

// npm install react-router-dom

// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AvengersList from "./Components/AvengersList";
import Home from "./Components/Home";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/avengers" component={AvengersList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

// Switch
// We won't use it here, but in many online tutorials you will see the use of switch. 
// If a route matches multiple routes enclosed in a switch statement, the browser will only render the first component it comes across. 
// This can come in handy when considering nested routes and the like.
