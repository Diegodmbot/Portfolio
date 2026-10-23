import skillsData from "../data/skills.json";
import "./Skills.css";

export function Skills() {
  return (
    <div className="Skills" id="skills">
      <h1>Skills</h1>
      <div className="SkillsContainer">
        {skillsData.map((skill) => (
          <div key={skill.name} className="Skill">
            {skill.image && <img src={skill.image} alt={skill.name} />}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
