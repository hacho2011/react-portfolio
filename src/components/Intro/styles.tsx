import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { injectGlobal } from "@emotion/css";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i');
  @import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap');
`;

export const StyledIntroSection = styled.section`
  background-color: ${(props) => props.theme.colors.primary};

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* justify-content: center; */

  .letter {
    font-family: "Dongle";
    font-size: 1000px;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 20px;
  }

  .letter-effect {
    position: absolute;
    font-family: "Dongle";
    font-size: 30px;
    left: ${Math.round(Math.random() * window.innerWidth)};
    top: ${Math.round(Math.random() * window.innerHeight)};
    transition: all 0.5s linear 0s;
  }
`;

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .avatar {
    width: 150px;
    height: 150px;
    background: white;
    border-radius: 100%;
    margin-bottom: 30px;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.size30};
    color: ${(props) => props.theme.colors.bg_color};
    margin-bottom: 15px;
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.size18};
    color: ${(props) => props.theme.colors.bg_color};
  }
`;

export const StyledMainBackground = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.3);
`;
