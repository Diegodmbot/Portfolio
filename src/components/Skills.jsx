import "./Skills.css";
export function Skills() {
  // Hacer una cuadricula con los logos de las herramientas/lenguajes que sé

  return (
    <div className="Skills">
      <h1>Skills</h1>
      <div className="SkillsOptions">
        <button>All</button>
        <button>Web</button>
        <button>GameDev</button>
        <button>Languages</button>
        <button>Version Control</button>
        <button>Design</button>
      </div>
    </div>
  );
}
