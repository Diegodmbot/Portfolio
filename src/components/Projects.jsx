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
                <p>{project.description}</p>
                <div className="Tags">
                  {project.tools.map((tool) => {
                    return (
                      <a key={tool.id} href={tool.url}>
                        {tool.name}
                      </a>
                    );
                  })}
                </div>
              </section>
              <nav className="Links">
                {project.links.map((link, index) => {
                  return (
                    <a href={link.url} key={index}>
                      {link.name}
                    </a>
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
