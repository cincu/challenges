import Card from "./components/Card";

const fruits = [
  { id: 1, name: "cherry", color: "darkred" },
  { id: 2, name: "blueberry", color: "blue" },
  { id: 3, name: "strawberry", color: "red" },
  { id: 4, name: "mango", color: "orange" },
  { id: 5, name: "coconut", color: "brown" },
];

export default function App() {
  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card color={color} key={id} name={name} />
      ))}
    </div>
  );
}
