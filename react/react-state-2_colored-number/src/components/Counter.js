import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [counterColor, setCounterColor] = useState(0);
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counterColor} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => setCounterColor(counterColor + 1)}
        >
          +
        </button>
        <button
          onClick={() => setCounterColor(counterColor - 1)}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
