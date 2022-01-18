import React, { useRef } from "react";
import { StyledIntroSection, StyledMain, StyledMainBackground } from "./styles";

import { faUser } from "@fortawesome/free-solid-svg-icons";

function Intro() {
  const introRef = useRef<HTMLDivElement>(null);
  const animateKeys = () => {};

  return (
    <StyledIntroSection ref={introRef} onDrag={animateKeys}>
      <StyledMain>
        <div className="avatar"></div>
        <h1>JUNG DAHEE</h1>
        <h2>I'm a frontend developer.</h2>
      </StyledMain>
    </StyledIntroSection>
  );
}

export default Intro;
