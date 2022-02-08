import React from "react";
import {
  StyledEducationSection,
  StyledEducationContainer,
  StyledButtonBox,
} from "./styles";

import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <StyledEducationSection>
      <h1>EDUCATION & EXPERIENCE</h1>
      <StyledButtonBox>
        <button>Education</button>
        <button>Experience</button>
      </StyledButtonBox>
      <StyledEducationContainer></StyledEducationContainer>
      <StyledEducationContainer>asdf</StyledEducationContainer>
    </StyledEducationSection>
  );
}

export default Header;
