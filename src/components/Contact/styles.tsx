import styled from "@emotion/styled";

export const StyledContactSection = styled.section`
  width: 100%;
  height: 600px;
  padding: 80px 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: ${(props) => props.theme.fontSizes.size30};
    margin-bottom: 50px;
    font-weight: bold;
  }
`;

export const StyledContactContainer = styled.div`
  max-width: 1024px;
  height: 100px;
  background: tomato;
`;

export const StyledContactIntroComponent = styled.div`
  width: 30%;
  height: 100px;
  background: tomato;
`;

export const StyledContactInputContainer = styled.div`
  width: 30%;
  height: 100px;
  background: tomato;
`;

export const StyledInputComponent = styled.input``;
