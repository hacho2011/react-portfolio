import React from "react";
import { StyledSkillByTypeContainer, StyledSkillComponent } from "./styles";
import { skill } from "@/interfaces/skill";

export default function SkillBox({
  skills,
  title,
}: {
  skills: skill[];
  title: string;
}) {
  return (
    <StyledSkillByTypeContainer>
      <h3 className="skill-category">
        <span className="primary">&#123;</span>
        <span>{title}</span>
        <span className="primary">&#125;</span>
      </h3>
      <div className="skills-box">
        {skills.map((item: skill, index: number) => {
          return (
            <StyledSkillComponent key={index}>
              <div className="skill-box">
                <img
                  className="grayscale-img"
                  src={require(`../../assets/skills/${item.img}`)}
                  alt={item.title}
                />
                <img
                  className="color-img"
                  src={require(`../../assets/skills/${item.img_color}`)}
                  alt={item.title}
                />
              </div>
              <span className="skill-name">
                {item.title} {item.level}
              </span>
            </StyledSkillComponent>
          );
        })}
      </div>
    </StyledSkillByTypeContainer>
  );
}
