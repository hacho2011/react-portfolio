import styled from "@emotion/styled";

export const StyledAboutSection = styled.section`
  width: 100%;
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
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  .image-box {
    width: 200px;
    height: 200px;
    background: grey;
    margin-right: 40px;
    border-radius: 100%;
  }

  .introduction {
    line-height: 30px;

    .information {
      margin: 10px 0 20px;
      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.darkGray};

        svg {
          margin-right: 5px;
        }

        span {
          margin-right: 10px;
        }
      }

      a:hover {
        opacity: 0.8;
      }
    }

    .resume {
      padding: 10px 20px;
      border-radius: 20px;
      font-size: ${(props) => props.theme.fontSizes.size16};
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.primary};
      cursor: pointer;
      vertical-align: top;

      svg {
        margin-left: 5px;
        position: relative;
      }
    }

    .resume:hover {
      opacity: 0.9;
      svg {
        animation: bounce 1s ease infinite;
        animation-duration: ;
      }
    }
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    20% {
      top: -4px;
    }
    40% {
      top: 4px;
    }
    60% {
      top: 0px;
    }

    80% {
      top: 0px;
    }

    100% {
      top: 0px;
    }
  }
`;
