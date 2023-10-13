import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const displayHandler = (value) => {
    if (value === "=") {
      try {
        setResult(eval(display));
      } catch (error) {
        setResult("ERROR");
      }
    } else if (value === "c") {
      setDisplay("");
      setResult("");
    } else {
      setDisplay(display + value);
    }
  };

  const deleteHandler = () => {
    setDisplay(display.slice(0, -1)); // Removes the last character from the display
  };

  return (
    <>
      <div className="logo">
        <img src="/calc.png" alt="My Logo" />
        <h1>My calculator </h1>
      </div>
      <div className="calculator">
        <input type="text" value={display} readOnly />
        <input type="text" value={result} readOnly />
        <div className="buttons">
          <button onClick={() => displayHandler("7")}>7</button>
          <button onClick={() => displayHandler("8")}>8</button>
          <button onClick={() => displayHandler("9")}>9</button>
          <button onClick={() => displayHandler("+")}>+</button>
          <button onClick={() => displayHandler("4")}>4</button>
          <button onClick={() => displayHandler("5")}>5</button>
          <button onClick={() => displayHandler("6")}>6</button>
          <button onClick={() => displayHandler("-")}>-</button>
          <button onClick={() => displayHandler("1")}>1</button>
          <button onClick={() => displayHandler("2")}>2</button>
          <button onClick={() => displayHandler("3")}>3</button>
          <button onClick={() => displayHandler("*")}>*</button>
          <button onClick={() => displayHandler("0")}>0</button>
          <button onClick={() => displayHandler(".")}>.</button>
          <button onClick={() => displayHandler("=")}>=</button>
          <button onClick={() => displayHandler("/")}>/</button>
          <button onClick={() => displayHandler("c")}>C</button>
          <button onClick={deleteHandler}>Del</button>
        </div>
      </div>
    </>
  );
};

export default App;
