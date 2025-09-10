import React from "react";

interface SkillTagProps {
  skillName: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
}

const SkillTag: React.FC<SkillTagProps> = ({ skillName, level }) => {
  return (
    <span
      className={`skill-tag ${
        level ? "skill-" + level.toLowerCase() : ""
      }`}
    >
      {skillName} {level && <i>({level})</i>}
    </span>
  );
};

export default SkillTag;
