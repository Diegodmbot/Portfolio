import "./Projects.css";
import projectsData from "../data/projects.json";
import { useState } from "react";
import { Links } from "./Links";

export function Projects() {
  const [projects] = useState(projectsData);

  return (
    <div className="projects" id="projects">
      <h1>Projects & Skills</h1>
      <ul className="project-list">
        {projects.map((project, index) => {
          return (
            <li className="project" key={index}>
              <img src={project.image} alt={project.title} />
              <section>
                <h2>{project.title}</h2>
                <p>{project.shortDescription}</p>
                <ul>
                  {project.bulletDescription.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </section>
              <Links links={project.links} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
