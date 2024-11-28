import "./App.css";
import { Header } from "./components/Header.jsx";
import { Introduction } from "./components/Introduction.jsx";
import { Experience } from "./components/Experience.jsx";
import { Projects } from "./components/Projects.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Introduction />
      <Experience />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
