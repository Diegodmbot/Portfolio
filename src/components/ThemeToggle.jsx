import { useEffect, useState } from "react";

export function ThemeToggle() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <img
      onClick={toggleTheme}
      className="ThemeSwitcher"
      src={theme === "light" ? "/sun-icon.svg" : "/moon-icon.svg"}
    ></img>
  );
}
