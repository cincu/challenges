import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import { Header } from "./Header";
import { EntryForm } from "./EntryForm";
import { EntrySection } from "./EntrySection";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header>Journal</Header>
      <main>
        <EntryForm />
        <EntrySection />
      </main>
    </div>
  );
}

export default App;

//3.footer
