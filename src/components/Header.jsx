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
      <nav className="HeaderNav">
        <a className="HeaderLink" href="#experience">
          Experience
        </a>
        <a className="HeaderLink" href="#projects">
          Projects
        </a>
        <a className="HeaderLink" onClick={downloadCV}>
          Download CV
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
