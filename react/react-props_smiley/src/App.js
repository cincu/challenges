import React from "react";
import "./styles.css";

// You can use the following hints as guideline:

// - Write the `Smiley` component inside of the [`App.js`](src/App.js).
//   - It accepts a prop called `isHappy` (make sure to destructure it).
//   - It returns a semantic HTML element which renders a happy smiley
//   if `isHappy` is `true` and a sad one if its value is `false`.
// - Inside of the return statement of your `App` component, replace
// the heading with your `Smiley` component and pass it the `isHappy`
// prop (– or don't, if you want to display the unhappy smiley).

export default function App() {
  return <Smiley isHappy={false} />;
}
function Smiley({ isHappy }) {
  return <p> {isHappy ? ":)" : ":("} </p>;
}
