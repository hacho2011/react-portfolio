import styled from "@emotion/styled";

export const HeaderComponent = styled.header`
  width: 100px;
  height: 100vh;
  background-color: tomato;
  padding: 20px;
  position: fixed;

  .logo {
    font-size: ${(props) => props.theme.fontSizes.size14};
  }

  nav {
    color: white;

    ul {
      list-style-type: none;
    }
  }
`;
