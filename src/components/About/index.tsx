import React from "react";
import { StyledAboutSection, StyledAboutMeContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <StyledAboutSection>
      <h1>저를 소개합니다 :D</h1>
      <StyledAboutMeContainer>
        <div className="image-box">
          <img src="" alt="" />
        </div>
        <div className="introduction">
          저는 프론트엔드 개발자 정다희입니다.
          <br />
          즐겁고, 편안한 사용자경험을 중요하게 생각합니다.
          <br /> 성장을 위해 배움을 마다하지 않고, 소통하며 발전해 나가겠습니다
          😊
          <div className="information">
            <a
              href="https://github.com/hacho2011"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <span>Github</span>
            </a>

            <a
              href="https://github.com/hacho2011"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <span>Github</span>
            </a>
          </div>
          <button className="resume">
            좀 더 알아보기
            <FontAwesomeIcon icon={faArrowCircleDown} />
          </button>
        </div>
      </StyledAboutMeContainer>
    </StyledAboutSection>
  );
}

export default Header;
