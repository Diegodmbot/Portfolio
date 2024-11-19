import "./App.css";
import { Header } from "./components/Header.jsx";
import { Introduction } from "./components/Introduction.jsx";
import { Experience } from "./components/Experience.jsx";
import { Projects } from "./components/Projects.jsx";
import { Skills } from "./components/Skills.jsx";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Experience />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
