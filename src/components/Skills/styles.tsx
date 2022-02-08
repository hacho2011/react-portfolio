import styled from "@emotion/styled";

export const StyledSkillSection = styled.section`
  width: 100%;
  padding: 80px 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: ${(props) => props.theme.fontSizes.size30};
    margin-bottom: 50px;
    font-weight: bold;

    .skill-infobox {
      display: inline-block;
      position: relative;
      .info-icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: ${(props) => props.theme.colors.orange};

        border-radius: 100%;
        color: ${(props) => props.theme.colors.white};
        font-size: ${(props) => props.theme.fontSizes.size11};
        text-align: center;
        line-height: 18px;
        margin-left: 5px;
        vertical-align: middle;
        opacity: 0.7;
        cursor: pointer;
        transition: 0.3s all;
      }

      .skill-info {
        position: absolute;
        background: ${(props) => props.theme.colors.primary};
        width: 130px;
        height: auto;
        top: 45px;
        right: -20px;
        border-radius: 10px;
        padding: 10px;
        opacity: 0;
        transition: 0.3s all;

        p {
          font-size: ${(props) => props.theme.fontSizes.size12};
          color: ${(props) => props.theme.colors.white};
          line-height: 24px;
          font-weight: normal;
        }
      }

      .skill-info:after {
        border-top: 0px solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid ${(props) => props.theme.colors.primary};
        content: "";
        position: absolute;
        top: -10px;
        right: 20px;
      }

      .info-icon:hover,
      .info-icon:hover + .skill-info {
        opacity: 1;
      }
    }
  }
`;
export const StyledSkillContainer = styled.div`
  width: 90%;
  height: auto;
  background: white;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  padding: 30px;

  .combine {
    display: flex;

    & > div {
      width: 50%;
    }
  }

  @media screen and (max-width: 1000px) {
    .combine {
      flex-direction: column;

      & > div {
        width: 100%;
      }
    }
  }
`;
