import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleTag(newTag) {
    setTags([...tags, newTag]);
  }
  function removeTag(tagToRemove) {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  }
  return (
    <main className="app">
      <Form onAddTag={handleTag} />
      <List tags={tags} onDeleteTag={removeTag} />
    </main>
  );
}
