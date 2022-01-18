import React from "react";
import {
  StyledHeaderComponent,
  StyledNavComponent,
  StyledFooterComponent,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png";
import {
  faHome,
  faUser,
  faGraduationCap,
  faLayerGroup,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <StyledHeaderComponent>
      <div className="logo">
        <img src={logo} />
      </div>
      <StyledNavComponent>
        <ul>
          <li className="">
            <a href="#">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGraduationCap} size="lg" />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faLayerGroup} size="lg" />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faComments} size="lg" />
            </a>
          </li>
        </ul>
      </StyledNavComponent>
      <StyledFooterComponent>
        <span className="copyright">©2022 Dev Dhjung Portfolio.</span>
      </StyledFooterComponent>
    </StyledHeaderComponent>
  );
}

export default Header;
