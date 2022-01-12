import React from "react";
import { HeaderComponent } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faGraduationCap,
  faLayerGroup,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <HeaderComponent>
      <div className="logo">LOGO</div>
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} size="lg" />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} size="lg" />
          </li>
          <li>
            <FontAwesomeIcon icon={faLayerGroup} size="lg" />
          </li>
          <li>
            <FontAwesomeIcon icon={faComments} size="lg" />
          </li>
        </ul>
      </nav>
    </HeaderComponent>
  );
}

export default Header;
