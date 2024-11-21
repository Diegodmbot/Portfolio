import "./Projects.css";
import projectsData from "../data/projects.json";
export function Projects() {
  // Hacer una cuadricula con los logos de las herramientas/lenguajes que sé

  return (
    <div className="Projects">
      <h1>Projects & Skills</h1>
      <div className="ProjectsOptions">
        <button>All</button>
        <button>Web</button>
        <button>GameDev</button>
      </div>
      <ul>
        <li className="Project">
          <img src={projectsData[0].image} alt={projectsData[0].title} />
          <h2>{projectsData[0].title}</h2>
          <p>{projectsData[0].description}</p>
        </li>
      </ul>
    </div>
  );
}
