import React from "react";
import {
  StyledAboutSection,
  StyledAboutMeContainer,
  StyledStackContainer,
  StyledStackComponent,
} from "./styles";

import { stacks } from "../../mockup/stackList";

function Header() {
  console.log(stacks);
  return (
    <StyledAboutSection>
      <h1>ABOUT ME</h1>
      <StyledAboutMeContainer>
        <div className="introduction">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          dolores voluptatum exercitationem nesciunt rem earum debitis
          consequuntur. Architecto, dignissimos? Sunt, nulla.
        </div>
        <StyledStackContainer>
          {stacks.map((item, index) => {
            return (
              <StyledStackComponent>
                <div className="stack-box">
                  <img
                    className="grayscale-img"
                    src={require(`../../assets/stacks/${item.img}`)}
                  />
                  <img
                    className="color-img"
                    src={require(`../../assets/stacks/${item.img_color}`)}
                  />
                </div>
                <span className="stack-name">{item.title}</span>
              </StyledStackComponent>
            );
          })}
        </StyledStackContainer>
      </StyledAboutMeContainer>
    </StyledAboutSection>
  );
}

export default Header;
