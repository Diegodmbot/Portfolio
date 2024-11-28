import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export function Links({ links }) {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className="LinksNav">
      {links.map((link, index) => {
        return (
          <button
            key={index}
            className="Link"
            onClick={() => window.open(link.url, "_black")}
          >
            {link.image_code ? (
              <img src={`${link.image_code}_${theme}.svg`} />
            ) : null}
            <span>{link.name}</span>
          </button>
        );
      })}
    </nav>
  );
}
