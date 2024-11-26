export function Links({ links }) {
  return (
    <nav className="LinksNav">
      {links.map((link, index) => {
        return (
          <button
            key={index}
            className="Link"
            onClick={() => window.open(link.url, "_black")}
          >
            <img src="/Github_dark.svg" />
            <span>{link.name}</span>
          </button>
        );
      })}
    </nav>
  );
}
