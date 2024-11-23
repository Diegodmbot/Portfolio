import "./Header.css";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header>
      <nav className="HeaderNav">
        <a className="HeaderLink" href="#experience">
          Experience
        </a>
        <a className="HeaderLink" href="#projects">
          Projects
        </a>
        <a
          className="HeaderLink"
          href="/Diego_Díaz_Morón_CV.pdf"
          download={"Diego_Díaz_Morón_CV.pdf"}
        >
          Download CV
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
