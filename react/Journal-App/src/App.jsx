import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import { Header } from "./Header";
import { EntryForm } from "./EntryForm";
import { EntrySection } from "./EntrySection";
import { Footer } from "./Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header>Journal</Header>
      <main className="app__main">
        <EntryForm />
        <EntrySection />
      </main>
      <Footer>my Journal App-2023</Footer>
    </div>
  );
}

export default App;
