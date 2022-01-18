import styled from "@emotion/styled";
export const StyledHeaderComponent = styled.header`
  width: 100px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  border-right: 1px solid ${(props) => props.theme.colors.bg_color};
  padding: 40px 20px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    width: 40px;
    img {
      width: 100%;
    }
  }
`;

export const StyledNavComponent = styled.nav`
  margin-top: 70px;
  color: ${(props) => props.theme.colors.bg_color};

  ul {
    list-style-type: none;

    li {
      padding: 5px;
      margin: 30px 0;
      display: flex;
      justify-content: center;

      a {
        color: ${(props) => props.theme.colors.bg_color};
        transition: all 0.2s ease-in;
        opacity: 0.6;
      }
    }

    li:hover a {
      color: ${(props) => props.theme.colors.white};
      opacity: 1;
    }
  }
`;

export const StyledFooterComponent = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;

  .copyright {
    color: ${(props) => props.theme.colors.bg_color};
    opacity: 0.6;
    font-size: 14px;
    transform: rotate(-180deg);
    -webkit-writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    white-space: nowrap;
    display: inline-block;
    overflow: visible;
  }
`;
