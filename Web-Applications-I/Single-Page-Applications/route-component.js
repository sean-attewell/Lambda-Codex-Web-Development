// The Route component makes sure the rendered component specified gets the history and location props
// You can see this if you put 'debugger' in the functional component and hover over props for that component
// location is all about where we are
// match contains information about how this particular route matched the current location
// you can use it to pull dynamic parameters from the URL
// history is similar to the HTML5 history API.
// provides us with a bunch of methods to use to change location:

import App from './react-router-setup';

function Blog(props) {
  const {push} = props.history;
  return <>
  <button onclick={() => push("/")}>back home</button> 
  </>
}

// history also contains a copy of the location object, but we should never use it.

// So the route component doesn't just allow us to render a component conditionally based on whether URL matches the path
// It also injects components with these extra props.

// Route also has a render prop so you can inline a react component (rather than pass a component with the component prop)
<Route path="/blog" render={() => <h1>The Blog!</h1>}/>

// Likewise the inline component will be injected with location, match and history

// The children prop makes it so the component you pass in renders regardless of whether the path matches


// React's newest update, 5.1, released late in 2019 supports hooks. This is really helpful for routing

// useParam
// The useParam hook relies on props to pass new and changing data into the app.
// Parameters are placeholders in a URL that represent some changing data. 
// When we've set up routes in the past we've written some route like <Route path="/employee that corresponds to some component
// but what if we want to load different data depending on the URL?

// The useParam hook allows us to create dynamic routes that will render content based on the URL. 
// So, instead of requiring that all routes are written out ahead of time, the URL determines what renders on the page. 
// For example, a url "website.com/johnSmith" would render data about John Smith, while "website.com/janeDoe" would render data about Jane Doe
// neither have to be specified in your code (as you would with multiple route components before) 
// The browser "matches" the URL to the data, thus the name. 
// If no data is found, it throws an error
// In some ways this provides access to search parameters in the URL. 
// Before React Router 5.1 this was only possible using match.params.

// In order to use a parameter in routing we need to assign the route with a colon in App.js or wherever else the routes are defined. 
// So, <Route path="/employee becomes <Route path="/:employee. With that simple change we can use the useParam hook to create dynamic routes.

// A real life example of this is Twitter. It would be crazy to imagine that every time a user makes a new profile, a new line of code has to be written. 
// Instead, Twitter routes look something like this:

// <Route path='/:handle' component={Profile} />
// The path is specified with a : and the component will load accordingly.



// Avengers example:
// we need to pass data to avengersList and set up our routes such that they will accept any hero parameter.
// you should be able to visit a site such that ourapp.com/avengers/3 will render information about Captain America. 
// Similarly, ourapp.com/avengers/4 should match and render information about Spiderman, and so on. 

// the heroes prop is the dataset of heroes
// const params = useParams() is to get the hero id specified in the URL

function App(props) {
return
<div className="App">
        <Switch>
          {/* we can use Route to render child components instead of having to use the component prop. This way we can easily pass down props to our components.  */}
          <Route path="/avengers/:hero">
            {/* Passing our data to avenger's list */}
            <Avenger key={heroes.id} heroes={heroes} />
          </Route>
          <Route path="/avengers/">
            <AvengersList heroes={heroes} />
            {/* Passing our data to avenger's list */}
          </Route>

          {/* You can also render a component with the component prop if you do not need to pass any additional props to your component */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
}

// We can edit our Avenger function to match the hero data to the route specified in the URL. 
// JavaScript will look at the hero id and match it to the id in data.js.

import React from "react";
import { useParams } from "react-router-dom";

function Avenger({ heroes }) {
  // console.log("Props", props);
  const params = useParams();
  // we can use this hook to grab information about the way React Router matched this route

  // we want to match the hero to the route
  const hero = heroes.find(item => item.id === Number(params.hero));

  return (
    <div className="character-card">
      <h2>{hero.name}</h2>
      <p>{hero.nickname}</p>
      <p>{hero.description}</p>
      <img src={hero.thumbnail} alt="random avengers img" />
    </div>
  );
}
export default Avenger;


// great summary of react router hooks
// https://reactrouter.com/web/api/Hooks
