import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Avatar } from "./components/Avatar";
import { Logo } from "./components/Logo";

export default function App() {
  return (<>
      <Header>
      <Logo src={logo} alt="logo"/>
      <Navigation>
      <Link href="#home">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#impressum">Impressum</Link>
      <Navigation/>
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
      <Avatar />
      </button>
      <Header/>
      <main>content goes here…</main>
      </>)
}
