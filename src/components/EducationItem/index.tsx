import React from "react";
import { StyledEducationContainer } from "./styles";

import { faCalendar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { PortfolioPostProps } from "@/interfaces/portfolioPost";
import moment from "moment";
import "moment/locale/ko";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PortFolioItem({ portfolio }: PortfolioPostProps) {
  const imgUrl = require(`../../assets/portfolio/${portfolio.img}`);

  return <StyledEducationContainer></StyledEducationContainer>;
}
