// Below (test on code sandbox) generates a button component which defaults to white
// but changes colour on every click.

// We'll need to pass our state variable from app down via props to our button component. 
// Also, we need to pass along a function that takes in an array and calls our setter function. 
// While hooks make it easy to bring this functionality directly into any component, we'll build this app and pass it for demonstrative purposes -
// In case you want to build additional components, you'll be all set to go ahead and update their color as well.

import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#FFFFFF");

  const changeColor = (array) => {
    setColor(array[Math.floor(Math.random() * array.length)]);
  };

  return (
    <div className="App">
      <Button color={color} changeColor={changeColor} />
    </div>
  );
}

const Button = (props) => {
  const colors = [
    "#FFBAAA",
    "#27576B",
    "#D47F6A",
    "#AA7539",
    "#003D19",
    "#6E91A1",
    "#552D00"
  ];

  return (
    <button
      style={{ background: props.color, height: "50px", width: "200px" }}
      onClick={() => props.changeColor(colors)}
    >
      Click Me!
    </button>
  );
};

// The state and the tools that change it live at the same level, usually uphill in some parent component

