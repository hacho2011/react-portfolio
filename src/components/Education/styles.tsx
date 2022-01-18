import styled from "@emotion/styled";

export const StyledEducationSection = styled.section`
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
