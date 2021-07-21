// Perhaps you've created a subscription to a chat API to give a live chat functionality to your app. 
// Or, more simply, you've added an event listener to the DOM. 
// These are both functions that need to be "cleaned up" when the component is unmounting, so we don't cause an unnecessary memory leak. 
// Thankfully, the Effect Hook has a built-in way to handle cleanups.

// To clean up an effect, we return a function from the effect hook's callback function, like this:

useEffect(() => {
  // We write our desired effect as before.
  console.log("The Effect Hook has run.");
  // Returning a function will tell React that you want this
  // code to run when the component unmounts or re-renders
  return () => console.log("The Effect Hook has been cleaned up.");
});

// The returned function is called when the component is unmounting, giving us a place to clean up subscriptions and event listeners.


// Let's add an event listener to a function that listens for the mouse position. 
// When the mouse moves, the event listener will update some state with the new mouse position, and the component will render the mouse position state to the DOM. 
// https://codesandbox.io/s/long-hill-fg79j


const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    // the function returned here will remove, or "clean up", the event listener
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return (
    <div>
      {position.x}:{position.y}
    </div>
  );
};