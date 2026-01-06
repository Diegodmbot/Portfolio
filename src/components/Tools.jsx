export function Tools({ tools }) {
  return (
    <div>
      {tools.map((tool) => {
        // get background tool color

        return (
          <span key={tool.name} className="Tool">
            {tool.name}
          </span>
        );
      })}
    </div>
  );
}
