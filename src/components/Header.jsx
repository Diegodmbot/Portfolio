import { Curriculum } from "./Curriculum";
import "./Header.css";
import { ThemeToggle } from "./ThemeToggle";
import ReactPDF from "@react-pdf/renderer";

export function Header() {
  const downloadCV = async () => {
    const pdfBlob = await ReactPDF.pdf(<Curriculum />).toBlob();
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Diego_Díaz_Morón_CV.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <header>
      <nav className="header-nav">
        <a className="header-link" href="#skills">
          Skills
        </a>
        <a className="header-link" href="#experience">
          Experience
        </a>
        <a className="header-link" href="#projects">
          Projects
        </a>
        <button className="header-link" onClick={downloadCV}>
          Download CV
        </button>
        <ThemeToggle />
      </nav>
    </header>
  );
}
