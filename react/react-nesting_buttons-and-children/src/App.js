import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>abla</Button>
      <Button>abi</Button>
      <Button>dayi</Button>
      <Button>teyze</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
