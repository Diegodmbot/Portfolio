import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <img
      onClick={toggleTheme}
      className="ThemeSwitcher"
      src={theme === "light" ? "/sun-icon.svg" : "/moon-icon.svg"}
    ></img>
  );
}
