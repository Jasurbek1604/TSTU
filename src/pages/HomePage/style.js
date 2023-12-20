import styled from "styled-components";

export const About = styled.div`
  background-color: #01426f;
  color: #fff;
  text-align: center;
  padding: 37px 0 30px;
`;
export const Title = styled.div`
  color: #fdfdfd;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`;
export const Description = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding: 20px 160px 0;
`;
export const Boxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 40px 0;
`;
export const Box = styled.div``;
export const Icon = styled.img`
  margin-bottom: 14px;
  width: 70px;
  height: 70px;
`;
export const Count = styled.div`
  color: #fff;
  font-size: 23.771px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
export const Min = styled.div`
  font-size: 12.678px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const Layout = styled.div`
  padding: 30px 0;
`;
export const Top = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: ${({ type }) => (type === "dark" ? "#FDFDFD" : "#202020")};
`;
export const TopTitle = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 46.8px;
  padding-left: 10px;
  border-left: 3px solid
    ${({ type }) => (type === "dark" ? "#FDFDFD" : "#0046B7")};
`;
export const TopButton = styled.div`
  text-align: right;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 18.2px;
  position: relative;
  padding: 3px 25px 3px 0;
  z-index: 0;
  cursor: pointer;
  .abs {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 54px;
    background: #007aff;
    z-index: -1;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 25px;
  cursor: pointer;
`;
export const Item = styled.div`
  border-radius: 3px;
  border: 1px solid #a6a6a6;
  background: #fdfdfd;
  position: relative;
  .absolute {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: red;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(9, 0, 41, 0.7) 50%,
      rgba(9, 0, 41, 1) 100%
    );
    padding: 20px;
    gap: 5px;
    .absTop {
      font-style: normal;
      display: flex;
      align-items: center;
      gap: 32px;
      padding-bottom: 5px;

      color: ${({ little }) => (little ? "#fff" : "#f8f8f8")};
      font-weight: ${({ little }) => (little ? "400" : "600")};
      font-size: ${({ little }) => (little ? "12px" : "15px")};
    }
    .asbTitle {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      color: #fdfdfd;
    }
    .absP {
      color: #fdfdfd;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      font-family: "Poppins", sans-serif;
      line-height: 120%;
      letter-spacing: -0.48px;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 60%;
`;

export const Bg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Fart = styled.div`
  padding: 5px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .divv {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      color: #0046b7;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
    .date {
      color: #797979;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
  }
  .fartTitle {
    color: #01426f;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
`;

export const News = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  height: 100%;
  padding-right: 17px;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #d2d2d2;
  }

  &::-webkit-scrollbar-thumb {
    background: #0046b7;
  }
`;
export const NewsItem = styled.div`
  padding: 13px 17px;
  border-radius: 1px;
  border: 1px solid #e5e7eb;
  background: #fbfbfb;
  display: flex;
  justify-content: space-between;
  .item-left {
    display: flex;
    flex-direction: column;
    color: #01426f;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    font-size: 24px;
    padding: 11px;
    border-right: 1px solid #a6a6a6;

    .dek {
      font-size: 15px;
    }
  }
  .item-center {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 15px;
    &__title {
      color: #01426f;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
    &__subtitle {
      color: #a6a6a6;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 110%;
      text-transform: capitalize;
    }
  }
  .item-right {
    &__link {
      color: #0046b7;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 110%;
      text-transform: capitalize;
      text-decoration: none;
    }
  }
`;

export const Interaktive = styled.div`
  padding: 50px 0 90px;
  background: #01426f;
`;

export const InteraktiveCarts = styled.div`
  .first {
    background: #fff;
    border-radius: 3px;
    height: 345px;
    margin: 50px 0 18px;
    display: flex;
    justify-content: space-between;
    &__left {
      width: 390px;
      height: 225px;
      padding: 57px 0 64px 45px;

      &__title {
        color: #01426f;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: 119%;
      }
    }
    &__right {
      display: flex;
      align-items: flex-end;
      padding: 0 40px 15px 0;
      &__macbook {
        max-width: 350px;
        max-height: 200px;
      }
      &__imac {
        max-width: 415px;
        max-height: 350px;
      }
    }
  }
  .second {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    &__item {
      background: #fff;
      width: 293px;
      height: 243px;
      border-radius: 3px;
      padding: 38px 24px 41px 45px;
      display: flex;
      flex-direction: column;
      gap: 23px;
      &__img {
        width: 80px;
        height: 80px;
      }
      &__title {
        color: #01426f;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 119%;
      }
    }
  }
`;
