import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [sequence, setSequence] = useState("");

  const validSequence = "🐡🐠🐋";
  const handleClick = (fish) => {
    setSequence(sequence + fish);
  };
  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setSequence("");
        }}
      >
        Reset
      </button>
      <h2>{sequence.length ? sequence : "?"}</h2>
      {/* expressing condition */}
      {sequence === validSequence && <p>Valid code!</p>}
    </div>
  );
}
