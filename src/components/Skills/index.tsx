import React from "react";
import { StyledSkillSection, StyledSkillContainer } from "./styles";

import { skills } from "../../mockup/skillList";
import SkillBox from "../SkillBox";

function Header() {
  const frontend = skills.filter((item) => item.type === 1);
  const backend = skills.filter((item) => item.type === 2);
  const etc = skills.filter((item) => item.type === 3);

  return (
    <StyledSkillSection>
      <h1>
        <span>SKILLS</span>
        <div className="skill-infobox">
          <span className="info-icon">?</span>
          <div className="skill-info">
            <p>😀 곧 잘 써요!</p>
            <p>🙂 할 줄 알아요!</p>
            <p>🤔 배우고 있어요!</p>
          </div>
        </div>
      </h1>
      <StyledSkillContainer>
        <SkillBox skills={frontend} title="FRONTEND" />
        <div className="combine">
          <SkillBox skills={backend} title="BACKEND" />
          <SkillBox skills={etc} title="ETC" />
        </div>
      </StyledSkillContainer>
    </StyledSkillSection>
  );
}

export default Header;
