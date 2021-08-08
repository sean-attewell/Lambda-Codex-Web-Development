// The next hook we'll look at is useRouteMatch. 
// This hook lets you add nested routes to your application such that you can change a single parameter in the URL without having to change the whole thing. 
// This way you could easily have a website.com/about/employee1/employee-details URL and website.com/about/employee2/employee-details URL, 
// with only one specified route in your code.

// In the example above, if we wanted to change our route such that "about" was "our story" or any different string, it wouldn't break our webpage.

// In previous versions of React Router, developers used a workaround to manually sort and match routes. 
// For illustration purposes though, this example of such highly redundant code is still pretty relevant.



// function App() {

//   return (
//     <li>
//       <Link to = {`/about/employee1/employee-details`></Link>
//       <Link to = {`/about/employee2/employee-details`></Link>
//       <Link to = {`/about/employee3/employee-details`></Link>
//       <Link to = {`/about/employee4/employee-details`></Link>
//     </li>

//     <Switch>
//         <Route path = {`/about/employee1/employee-details`></Link>
//         <Route path = {`/about/employee2/employee-details`></Link>
//         <Route path = {`/about/employee3/employee-details`></Link>
//         <Route path = {`/about/employee4/employee-details`></Link>
//         <employee-details/>
//         </Route>
//         </Switch>
//   )
// }

// With react router 5.1, we can simply reference ${url} in place of redundant links. 
// The resulting code is cleaner and less prone to error.

// import { useRouteMatch } from 'react-router-dom'

// function App() {
//   const {path, url} = useRouteMatch();

//   return (
//     <div>
//     <li>
//       <Link to = {`${url}/employee-details`></Link>
//     </li>

//     <Switch>
//         <Route path = {`${path}/employee-details`}>
//         <employee-details/>
//         </Route>
//         </Switch>
//     </div>
//   )
// }


// useRouteMatch returns several values when you console.log(match)
// const match = useRouteMatch()
// console.log("match", match)
// path: "/avengers/:hero"
// url: "/avengers/1"
// isExact: true
// params: Object
// We can destructure out our path and url because these are the values we will be using to create a more flexible/dynamic route


// Let's add the useRouteMatch hook to our Avenger's app to dynamically route to multiple avengers.
// As usual, we need to import the hook in our App.js file like so:

// import { useRouteMatch } from "react-router-dom";

// Then, we can declare a variable and give it the value of the route path to follow. That might look something like this:

// const { path, url } = useRouteMatch();


// The only thing we need to add to our lists is the {url} to our <NavLink> elements such that anyurl.com/anything/hero/movies will be a valid URL. 
// By adding this we are telling React to first render information about the hero, then, when the movies parameter is added (manually or via button click),
// to load the list of movies that the hero is in. 
// We don't need to write a new route for each hero, we can simply use {url} to specify that the same route can be used for any hero.

  // path: "/avengers/:hero"
  // url: "/avengers/1"

//   const heros = hero.find(item => item.id === Number(params.hero));
//   return (
//     <div className="characters-list-wrapper">
//       <div className="character-card">
//         <h2>{heros.name}</h2>
//         <p>{heros.nickname}</p>
//         <p>{heros.description}</p>
//         <img src={heros.img} alt="random avengers img" />
//         <nav className="nav-buttons">
//         // replace
//           <NavLink to={`${url}/movies`}>Movie List</NavLink>
//         </nav>
//         <Route path={`${path}/movies`}>
//           <Movies movielist={heros} />
//         </Route>
//       </div>
//     </div>
//   );


// export default Avenger;


// Avengers example (remember they are confusing with the use of hero and heros)
// https://codesandbox.io/s/react-router-avengers-example-5lu6t