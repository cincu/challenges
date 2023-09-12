import React from "react";
import "./styles.css";



function Article() {
  return (<article className="article">
  <h2 className="article__title">ReactIsFun</h2>
  <label htmlFor="for">
    <input type="text" id="for"/>
    </label>
 <a href= "blablabla.com" className= "article__link">click me</a>
</article>);
}

export default function App() {
  return <Article />;
}

// Write an `Article` component and use it to replace the given `<div>`.

// Your component should contain the following parts:

// - an `<article>` as a wrapper HTML element with the class `article`
// - an `<h2>` with the class `article__title` and a text of your choice
// - a `<label>` and `<input>` tag connected with `id` and `htmlFor` (!)
//  attributes
// - an `<a>` tag with the class `article__link` as well as text content 
// and `href` attribute of your choice (What about a Wikipedia article?)