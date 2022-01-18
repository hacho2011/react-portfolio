import styled from "@emotion/styled";

export const StyledAboutSection = styled.section`
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

export const StyledAboutMeContainer = styled.article`
  width: 90%;
  height: auto;
  background: white;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  padding: 30px;

  .introduction {
    line-height: 30px;
  }
`;

export const StyledStackContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledStackComponent = styled.div`
  display: inline-flex;
  flex-direction: column;

  .stack-box {
    width: 150px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
    }

    .grayscale-img {
      display: block;
    }

    .color-img {
      display: none;
    }
  }

  .stack-name {
    padding: 5px 10px;
    text-align: center;
    margin: 0 auto;
    border-radius: 20px;
    background: ${(props) => props.theme.colors.orange};
    opacity: 0;
    color: white;
    font-weight: bold;
    transition: 0.3s;
  }

  &:hover {
    .stack-name {
      opacity: 1;
    }

    .grayscale-img {
      display: none;
    }

    .color-img {
      display: block;
    }
  }
`;
