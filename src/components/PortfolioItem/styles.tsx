import styled from "@emotion/styled";

export const StyledPortfolioItem = styled.article`
  width: 400px;
  height: 300px;
  background-color: white;
  margin-right: 20px;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease-in;
  position: relative;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);

  .thumbnail {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .detail {
    padding: 50px 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: rgba(102, 103, 171, 0.9);
    transition: 0.3s ease-in-out;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    .subject {
      position: absolute;
      top: -50px;
      left: 20px;
      padding: 10px 20px 15px;
      background: ${(props) => props.theme.colors.yellow};
      border-radius: 0 0 20px 20px;
      vertical-align: text-bottom;
      transition: all 0.3s ease-in;
      font-weight: bold;
    }

    h1 {
      font-size: ${(props) => props.theme.fontSizes.size20};
      font-weight: bold;
      margin-bottom: 20px;
      transition: all 0.3s ease-in;
    }

    .comment {
      margin-bottom: 20px;
      transition: all 0.3s ease-in;
    }

    .date {
    }

    .more-btn {
      width: 60px;
      height: 60px;
      background: ${(props) => props.theme.colors.mint};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      position: absolute;
      bottom: -60px;
      right: 25px;
      transition: all 0.3s ease-in;
    }
  }

  &:hover {
    .detail {
      opacity: 1;
      .subject {
        transform: translateY(50px);
      }

      .more-btn {
        transform: translateY(-85px);
      }
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
