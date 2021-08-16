// React is, in essence, a combination of multiple components. 
// A component can be as simple as a single piece of user interface that represents a small portion of our application. 
// Conceptually, a component lifecycle happens in three phases

// Each time we extend the React Base Class, we gain access to what is called the React component Lifecycle
// These lifecycle methods are only available through class components because they extend the React.Component base class that has them
// We can gain control over when things happen during the component lifecycle
// Each component has several lifecycle methods than you can override to run code at particular time in the process

// React provides developers with many methods or “hooks” that are called during the life-cycle of an component, 
// which allows us to update the UI and application state.

// There are three phases:

// Mounting (birth)

// - Constructor function is called and state data is initialised
// - We can recieve props and place them on our component as state
// - Render is then invoked and our JSX elements are transformed into DOM elements
// - After render is called, componentDidMount will be invoked


// Updating (growth)

// - any changes to our state need to go through this.setState() 
//   setState() calls a render by default
// - Any new props recieved from a parent will trigger updates to the child 
//   so if the parent state is updated and that state is being passed down as props, react knows to re-render the child as well
// - shouldComponentUpdate is a method one could use here to stop a component from calling render if necessary
// - componentDidUpdate()


// Un-mounting (death)

// - componentWillUnmount()
//   you will destroy custom even listeners with this method
//   cleanup work on the DOM that doesn't need to be there when our component leaves
// - Component is removed from the screen


// commonly used lifecycle methods in bold:
// https://reactjs.org/docs/react-component.html

// The render() method is the only required method in a class component.

// Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.
// Avoid introducing any side-effects or subscriptions in the constructor. For those use cases, use componentDidMount() instead

// Avoid copying props into state! This is a common mistake:
class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = { color: props.color };
  }

  render() { }
}
// The problem is that it’s both unnecessary (you can use this.props.color directly instead)
// and creates bugs (updates to the color prop won’t be reflected in the state).


// componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
// Initialization that requires DOM nodes should go here. 
// If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

// This method is a good place to set up any subscriptions. 
// If you do that, don’t forget to unsubscribe in componentWillUnmount().

// You may call setState() immediately in componentDidMount(). 
// It will trigger an extra rendering, but it will happen before the browser updates the screen. 
// This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. 
// Use this pattern with caution because it often causes performance issues.
// In most cases, you should be able to assign the initial state in the constructor() instead. 
// It can, however, be necessary for cases like modals and tooltips 
// when you need to measure a DOM node before rendering something that depends on its size or position.


// componentDidUpdate(prevProps, prevState, snapshot)
// componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
// Use this as an opportunity to operate on the DOM when the component has been updated. 
// This is also a good place to do network requests as long as you compare the current props to previous props 
// (e.g. a network request may not be necessary if the props have not changed).

class App2 extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }
  render() { }
}

// You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition like in the example above, 
// or you’ll cause an infinite loop. 
// It would also cause an extra re-rendering which, while not visible to the user, can affect the component performance.


// If your component implements the getSnapshotBeforeUpdate() lifecycle (which is rare),
// the value it returns will be passed as a third “snapshot” parameter to componentDidUpdate().
// Otherwise this parameter will be undefined.

// Note: componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.


// componentWillUnmount()
// componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. 
// Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, 
// or cleaning up any subscriptions that were created in componentDidMount().

// You should not call setState() in componentWillUnmount() because the component will never be re-rendered. 
// Once a component instance is unmounted, it will never be mounted again.


// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d

// constructors are the basic of OOP — this is a special function that will get called whenever a new object is created. 
// It’s very important to call a special function super in cases where our class extends any other class that also has a defined constructor. 
// Calling this special function will call the constructor of our parent class and allow it to initialize itself. 
// This is why we have access to this.props only after we’ve initially called super.

