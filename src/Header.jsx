import "./Header.css";
import { ThemeToggle } from "./components/ThemeToggle";

export function Header() {
  return (
    <header>
      <nav className="HeaderNav">
        <a className="HeaderLink">About me</a>
        <a className="HeaderLink">Projects</a>
        <a className="HeaderLink">Download CV</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
