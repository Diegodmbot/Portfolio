import "./Projects.css";
import projectsData from "../data/projects.json";
import { useState } from "react";
import { Tags } from "./Tags";
import { Links } from "./Links";

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
                <Tags tools={project.tools} />
                <p>{project.description}</p>
              </section>
              <Links links={project.links} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
