export function Tags({ tools }) {
  return (
    <div className="Tags">
      {tools.map((tool) => {
        // get background tag color

        return (
          <span key={tool.name} className="Tag">
            {tool.name}
          </span>
        );
      })}
    </div>
  );
}
