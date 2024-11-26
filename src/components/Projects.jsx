import "./Projects.css";
import projectsData from "../data/projects.json";
import { useState } from "react";

export function Projects() {
  const [projects] = useState(projectsData);

  return (
    <div className="Projects" id="projects">
      <h1>Projects & Skills</h1>
      <ul className="ProjectList">
        {projects.map((project, index) => {
          return (
            <li className="Project" key={index}>
              <img src={project.image} alt={project.title} />
              <section>
                <h2>{project.title}</h2>
                <div className="Tags">
                  {project.tools.map((tool) => {
                    // Podría moverse a un componente aparte para que cada tag tuviera un color distinto
                    return (
                      <span key={tool.id} className="Tag">
                        {tool.name}
                      </span>
                    );
                  })}
                </div>
                <p>{project.description}</p>
              </section>
              <nav className="Links">
                {project.links.map((link, index) => {
                  return (
                    <button
                      href={link.url}
                      key={index}
                      onClick={() => window.open(link.url, "_black")}
                    >
                      {link.name}
                    </button>
                  );
                })}
              </nav>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
