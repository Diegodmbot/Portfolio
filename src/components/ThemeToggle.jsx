import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="header-link" onClick={toggleTheme}>
      <img
        className="theme-switcher"
        src={theme === "light" ? "/sun-icon.svg" : "/moon-icon.svg"}
      ></img>
    </button>
  );
}
