import "./styles.css";

export default function App() {
  return <Greeting name="cns" />;
}

function Greeting({ name }) {
  return <p>Hello {name}</p>;
}
