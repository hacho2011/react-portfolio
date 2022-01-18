import React from "react";
import { StyledPortfolioSection } from "./styles";

import { faUser } from "@fortawesome/free-solid-svg-icons";

import PortFolioItem from "../PortfolioItem";
import { portfolios } from "../../mockup/portfolioBoard";

function Header() {
  return (
    <StyledPortfolioSection>
      <h1>PORTFOLIO</h1>
      <div className="portfolio-list">
        {portfolios.map((item, index) => (
          <PortFolioItem portfolio={item} key={index} />
        ))}
      </div>
    </StyledPortfolioSection>
  );
}

export default Header;
