import "./Header.css";
import { useTheme } from "./hooks/useTheme";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <nav className="HeaderNav">
        <a className="HeaderLink" onClick={toggleTheme}>
          {theme === "light" ? "☀️" : "🌙"}
        </a>
        <a className="HeaderLink">About me</a>
        <a className="HeaderLink">Projects</a>
        <a className="HeaderLink">Download CV</a>
      </nav>
    </header>
  );
}
