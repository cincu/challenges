import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header>Journal</Header>
      <main>
        <EntryForm />
        <EntrySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

//1.header
//2.main
//2.1 entry form
//2.1.1 input
//2.1.2 textarea
//2.1.3 submit button
//2.2 entries section
//2.2.1 tab bar
//2.2.1.1tab
//badge with number of entries
//2.2.1.2tab
//badge with number of entries
//2.2.2 entry list
//entry with {title}{date}{text}{icon-button}
//3.footer
