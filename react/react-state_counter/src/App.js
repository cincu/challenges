import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCounter] = useState(0);
  function CounterNeg() {
    setCounter(count - 1);
  }
  function CounterPos() {
    setCounter(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={CounterNeg}>
          -
        </button>
        <button type="button" onClick={CounterPos}>
          +
        </button>
      </div>
    </div>
  );
}
