import React from "react";
import "./styles.css";

export default function App() {
  return <Sum a={2} b={7} />;
}

function Sum({ a, b }) {
  return (
    <h1>
      {a} + {b} = {a + b}{" "}
    </h1>
  );
}
