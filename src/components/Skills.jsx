import { useMemo, useState } from "react";
import skillsData from "../data/skills.json";
import "./Skills.css";

export function Skills() {
  const [skills, setSkills] = useState(skillsData);
  const [selectedTag, setSelectedTag] = useState(null);
  const skillTags = useMemo(() => {
    const tags = new Set();
    skillsData.forEach((skill) => {
      tags.add(skill.category);
    });
    return Array.from(tags);
  }, []);

  const handleOnClick = (event) => {
    const selection = event.target.innerText;
    if (selection === selectedTag) {
      setSkills(skillsData);
      setSelectedTag(null);
      event.target.classList.remove("selected");
      return;
    }
    const filteredSkills = skillsData.filter(
      (skill) => skill.category === selection,
    );
    event.target.classList.add("selected");
    setSelectedTag(selection);
    setSkills(filteredSkills);
  };

  return (
    <div className="Skills" id="skills">
      <h1>Skills</h1>
      <nav className="SkillsFilternav">
        {skillTags.map((tag) => (
          <button key={tag} className="SkillsFilter" onClick={handleOnClick}>
            {tag}
          </button>
        ))}
      </nav>
      <hr className="SkillsSeparator" />
      <div className="SkillsContainer">
        {skills.map((skill) => (
          <div key={skill.name} className="Skill">
            {skill.image && <img src={skill.image} alt={skill.name} />}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
