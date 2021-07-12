// we're importing the useState hook from the React library so we can use it.
import React, {useState} from "react";

// Second, we've got this odd bit of syntax.
const [lightOn, setLightOn ] = useState(false);

// For now, it's okay to imagine that it's doing something real close to this:

let lightOn = false;
let setLightOn = (value) => {lightOn = value;};

// We now know what state is in an application. We also know how to keep track of a state variable from within a component, 
// we know how to initilize it with a value, and we know how we can change that value


// Conditional rendering is just a fancy name for a very common pattern in React. We don't want to see both lightbulbs at once. 
// We only want to render one or the other based on some condition. In this case, if the lightOn boolean is set to false we want to see the white lightbulb. 
// If it's set to true we want to see the yellow one. This is a straightforward use-case for the ternary operator in JavaScript.

// Need to use JS expressions when interpolating in JSX, so you can use a turnery rather than a conditional expression

import React, { useState } from "react";
import { render } from "react-dom";
import "./styles.css";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {
  const [lightOn, setLightOn] = useState(false);

  return (
    <div className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

