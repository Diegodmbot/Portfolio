import { Header } from "./components/Header.jsx";
import { Introduction } from "./components/Introduction.jsx";
import { Experience } from "./components/Experience.jsx";
import { Projects } from "./components/Projects.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Contacts } from "./components/Contacts.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Introduction />
        <Experience />
        <Projects />
        <Contacts />
      </ThemeProvider>
    </>
  );
}

export default App;
