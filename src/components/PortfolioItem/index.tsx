import React from "react";
import { StyledPortfolioItem } from "./styles";

import { faCalendar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { PortfolioPostProps } from "@/interfaces/portfolioPost";
import moment from "moment";
import "moment/locale/ko";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PortFolioItem({ portfolio }: PortfolioPostProps) {
  const imgUrl = require(`../../assets/portfolio/${portfolio.img}`);

  return (
    <StyledPortfolioItem>
      <div className="thumbnail">
        <img src={imgUrl} />
      </div>
      <div className="detail">
        <div className="subject">project</div>
        <h1>{portfolio.title}</h1>
        <p className="comment">{portfolio.comment}</p>
        <p className="date">
          {moment(portfolio.startDate).format("YYYY.MM.DD")}-
          {moment(portfolio.endDate).format("YYYY.MM.DD")}
        </p>
        <div className="more-btn">
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </div>
      </div>
    </StyledPortfolioItem>
  );
}
