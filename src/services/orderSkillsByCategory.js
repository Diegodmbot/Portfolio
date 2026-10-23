export function orderSkillsByCategory(skillsData) {
  const categorizedSkills = skillsData.reduce((acc, skill) => {
    skill.categories.forEach((category) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill.name);
    });
    return acc;
  }, {});

  return { categorizedSkills };
}
