import { useMemo, useState } from "react";
import skillsData from "../data/skills.json";
import "./Skills.css";

export function Skills() {
  const [skills, setSkills] = useState(skillsData);
  const [selectedTag, setSelectedTag] = useState(null);
  const skillTags = useMemo(() => {
    const tags = new Set();
    skillsData.forEach((skill) => {
      skill.categories.forEach((category) => {
        tags.add(category);
      });
    });
    return Array.from(tags);
  }, []);

  const handleOnClick = (event) => {
    const selection = event.target;
    selectedTag?.classList?.remove("selected");
    if (selection === selectedTag) {
      setSkills(skillsData);
      setSelectedTag(null);
      return;
    }
    const filteredSkills = skillsData.filter((skill) =>
      skill.categories.includes(selection.innerText),
    );
    event.target.classList.add("selected");
    setSelectedTag(selection);
    setSkills(filteredSkills);
  };

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <nav className="skills-filternav">
        {skillTags.map((tag) => (
          <button key={tag} className="skills-filter" onClick={handleOnClick}>
            {tag}
          </button>
        ))}
      </nav>
      <hr className="skills-separator" />
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            {skill.image && <img src={skill.image} alt={skill.name} />}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
