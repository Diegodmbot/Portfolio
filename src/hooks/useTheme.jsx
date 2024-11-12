import { useEffect } from "react";
import { useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") == null
      ? "light"
      : window.localStorage.getItem("theme")
  );
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      localStorage.setItem("theme", "light");
      document.body.className = localTheme;
    }
  }, []);

  useEffect(() => {
    document.querySelector("body").setAttribute("theme", theme);
    window.localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return { theme, toggleTheme };
}
