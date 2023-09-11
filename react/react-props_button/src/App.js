import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("click click motherclicker!");
  }
  function handleNegClick() {
    alert("i dare you to click again");
  }

  return (
    <div>
      <Button
        id="bip"
        color="pink"
        disabled={false}
        text="click me"
        clicker={handleClick}
      />
      <Button
        color="purple"
        disabled={false}
        text="don't click"
        clicker={handleNegClick}
      />
    </div>
  );
}

function Button({ color, disabled, text, clicker, id }) {
  return (
    <button
      id={id}
      disabled={disabled}
      style={{ height: "100px", backgroundColor: color }}
      onClick={clicker}
    >
      {text}
    </button>
  );
}
// let clickCount = 0;

// document.addEventListener("click", (event) => {
//   const ourButton = event.target.closest("#bip"); // event delegation
//   if (event.target === ourButton) {
//     console.log("increment", clickCount);
//     clickCount += 1;
//   }
// });
