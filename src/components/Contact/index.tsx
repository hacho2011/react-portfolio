import React from "react";
import {
  StyledContactSection,
  StyledContactContainer,
  StyledContactIntroComponent,
  StyledContactInputContainer,
  StyledInputComponent
} from "./styles";

import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <StyledContactSection>
      <h1>CONTACT ME</h1>
      <StyledContactContainer>
        <StyledContactIntroComponent>
          <h2>
            
          </h2>
        </StyledContactIntroComponent>
        <StyledContactInputContainer>
          <StyledInputComponent>

          </StyledInputComponent>
        </StyledContactInputContainer>
      </StyledContactContainer>
    </StyledContactSection>
  );
}

export default Header;
