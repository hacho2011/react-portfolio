import styled from "@emotion/styled";

export const StyledSkillByTypeContainer = styled.div`
  .skill-category {
    font-size: ${(props) => props.theme.fontSizes.size18};
    color: ${(props) => props.theme.colors.darkGray};
    font-weight: bold;
    margin-bottom: 15px;

    .primary {
      color: ${(props) => props.theme.colors.orange};
    }

    span:nth-child(2) {
      margin: 10px;
    }
  }

  @media screen and (max-width: 1000px) {
    .skills-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`;

export const StyledSkillComponent = styled.div`
  display: inline-flex;
  flex-direction: column;

  .skill-box {
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

  .skill-name {
    padding: 5px 10px;
    text-align: center;
    margin: 0 auto;
    border-radius: 20px;
    background: ${(props) => props.theme.colors.primary};
    opacity: 0;
    color: white;
    font-weight: bold;
    transition: 0.3s;
  }

  &:hover {
    .skill-name {
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
