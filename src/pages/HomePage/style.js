import styled, { css } from "styled-components";
import icon1 from "../../assets/icons/university-03.svg?react";
import icon2 from "../../assets/icons/university-20.svg?react";
import icon3 from "../../assets/icons/university-26.svg?react";
import icon4 from "../../assets/icons/university-07.svg?react";
import icon5 from "../../assets/icons/university-18.svg?react";
import icon6 from "../../assets/icons/university-09.svg?react";
import intIcon1 from "../../assets/icons/intIcon1.svg?react";
import intIcon2 from "../../assets/icons/intIocn2.svg?react";
import intIcon3 from "../../assets/icons/intIcon3.svg?react";
import intIcon4 from "../../assets/icons/intIcon4.svg?react";
import bigDarkArrow from "../../assets/icons/darkArrow.svg?react";
import lightArrow from "../../assets/icons/arrow-light.svg?react";
import darkArrow from "../../assets/icons/arrow-dark.svg?react";
import user from "../../assets/icons/user.svg?react";
import calendar from "../../assets/icons/calendar.svg?react";

const scrollStyle = css`
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #d2d2d2;
  }
  &::-webkit-scrollbar-thumb {
    background: #0046b7;
  }
`;
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

export const Icons = styled.div``;

const iconStyle = css`
  margin-bottom: 14px;
  width: 70px;
  height: 70px;
`;

Icons.Icon1 = styled(icon1)`
  ${iconStyle}
`;
Icons.Icon2 = styled(icon2)`
  ${iconStyle}
`;
Icons.Icon3 = styled(icon3)`
  ${iconStyle}
`;
Icons.Icon4 = styled(icon4)`
  ${iconStyle}
`;
Icons.Icon5 = styled(icon5)`
  ${iconStyle}
`;
Icons.Icon6 = styled(icon6)`
  ${iconStyle}
`;
Icons.LightArrow = styled(lightArrow)``;
Icons.DarkArrow = styled(darkArrow)`
  transform: translateY(5px);
`;
Icons.BigDarkArrow = styled(bigDarkArrow)`
  transform: translateY(5px);
`;
Icons.Calendar = styled(calendar)``;
Icons.Person = styled(user)``;

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
  color: ${(props) => (props.$type === "dark" ? "#FDFDFD" : "#01426F")};
`;
export const Subtitle = styled.div`
  color: ${(props) => (props.$type === "dark" ? "#FDFDFD" : "#01426F")};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;
export const TopTitle = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 46.8px;
  padding-left: 10px;
  border-left: 3px solid
    ${(props) => (props.$type === "dark" ? "#FDFDFD" : "#0046B7")};
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
  border: ${(props) => (props.$border ? "1px solid #a6a6a6" : "none")};
  background: #fdfdfd;
  position: relative;
  .absolute {
    position: absolute;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
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
      display: flex;
      align-items: center;
      gap: 10px;
      padding-bottom: 5px;
      color: ${(props) => (props.$little ? "#fff" : "#f8f8f8")};
      font-weight: ${(props) => (props.$little ? "400" : "600")};
      font-size: ${(props) => (props.$little ? "12px" : "15px")};
      span {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
    .asbTitle {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      display: flex;
      align-items: center;
      color: #fdfdfd;
    }
    .absP {
      padding-left: 10px;
      color: #fdfdfd;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      font-family: "Poppins", sans-serif;
      line-height: 120%;
      letter-spacing: -0.48px;
    }
  }
  .next {
    position: absolute;
    right: 0;
    bottom: 20px;
    background: #0046b7;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .student {
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px;
    bottom: 0;
    top: 0;
    left: 0;
    &__img {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      margin-bottom: 17px;
    }
    &__name {
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 18.2px; /* 91% */
    }
    &__group {
      color: #fff;
      text-shadow: 0px 2px 12px #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 18.2px; /* 113.75% */
    }
    &__p {
      margin-top: 10px;
      color: #fff;
      text-shadow: 0px 2px 12px #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 18.2px;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 60%;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

export const Bg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
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
  ${scrollStyle}
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

export const DarkSection = styled.div`
  padding: 50px 0 90px;
  background: #01426f;
  .tadqiqot {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 70px;
    &__item {
      text-align: center;
      width: 340px;
      &__title {
        color: #fdfdfd;
        text-align: center;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 46.8px;
        margin-bottom: 22px;
      }
      &__count {
        margin-top: 22px;
        color: #fdfdfd;
        text-align: center;
        font-size: 37px;
        font-style: normal;
        font-weight: 700;
        line-height: 46.8px; /* 126.486% */
      }
      &__p {
        color: #fff;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 18.2px; /* 101.111% */
      }
    }
  }
  .markaz {
    display: flex;
    justify-content: space-between;
    height: 470px;
    margin-top: 18px;
    transition: 0.4s;
    gap: 8px;
    &__item {
      transition: 0.4s;
      width: 300px;
      background: #fff;
      position: relative;
      height: 400px;
      border-radius: 3px;
      &__img {
        width: 100%;
        height: 225px;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
      }
      &__title {
        padding: 16px 16px 8px 16px;
        color: #01426f;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 133%;
      }
      &__p {
        color: #01426f;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: -0.48px;
        padding: 0 16px 16px 16px;
      }
      &__button {
        position: absolute;
        cursor: pointer;
        left: 0;
        right: 0;
        bottom: 0;
        height: 45px;
        display: flex;
        opacity: 0;
        z-index: -1;
        align-items: center;
        justify-content: center;
        border-radius: 0px 0px 3px 3px;
        background: linear-gradient(88deg, #0075ff 0.33%, #00b2ff 99.41%);
        color: #fff;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 19px; /* 118.75% */
        letter-spacing: -0.48px;
      }
      &:hover {
        height: 100%;
        .markaz__item__button {
          opacity: 1;
          z-index: 1;
        }
      }
    }
  }
`;

Icons.Int1 = styled(intIcon1)``;
Icons.Int2 = styled(intIcon2)``;
Icons.Int3 = styled(intIcon3)``;
Icons.Int4 = styled(intIcon4)``;
Icons.ArrowLight = styled(lightArrow)``;
Icons.ArrowDark = styled(bigDarkArrow)``;

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

export const Fakultetlar = styled.div`
  margin: 50px 0;
`;
export const Talim = styled.div`
  margin: 50px 0;
  .slider {
    margin: 30px 0;
    &__item {
      border-radius: 2.852px;
      border: 1px solid #a6a6a6;
      background: #fdfdfd;
      max-width: 385px !important;
      &__img {
        width: 100%;
        height: 215px;
      }
      &__title {
        color: #01426f;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
        margin: 21px;
        cursor: pointer;
      }
    }
  }
`;
export const Faxriy = styled.div`
  position: relative;
  transform: translateY(8px);
  margin-top: 30px;
  .faxriyAbs__img {
    width: 100%;
    min-height: 600px;
  }
  .faxriyAbs {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 0;
  }
  .content {
    text-align: center;
    &__img {
      width: 230px;
      height: 230px;
      border-radius: 50%;
      margin-bottom: 6px;
    }
    &__name {
      color: #fff;
      text-align: center;
      font-size: 25px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 35px */
    }
    &__sub {
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
    &__p {
      padding: 10px 20px;
      color: #fff;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 28px */
    }
  }
`;
export const Talaba = styled.div`
  margin: 50px 0;
`;

export const FakGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 12px;
  height: 530px;
  margin: 30px 0;
  .fak-left {
    grid-column: 1 / 3;
    overflow-y: auto;
    direction: rtl;
    margin: 0;
    ${scrollStyle}
    &__content {
      direction: ltr;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      &__item {
        transition: 0.3s;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 13px 10px 13px 16px;
        background: #cceeff80;
        &__line {
          background: #fff;
          width: 2px;
          height: 40px;
        }
        &__title {
          transition: 0.3s;
          color: #00237a;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 140%;
        }
        &:hover {
          background: #0046b7;
          .fak-left__content__item__title {
            color: #fff;
          }
          .fak-left__content__item__img {
            fill: red;
          }
        }
      }
    }
  }
  .wrap {
    grid-column: 3 / 6;
    overflow-y: auto;
    padding-right: 17px;
    ${scrollStyle}
    .fak-right {
      border-radius: 3px;
      background: rgba(204, 238, 255, 0.5);
      padding: 18px;
      &__title {
        margin-bottom: 20px;
        color: #00237a;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        text-align: center;
        line-height: 140%; /* 28px */
      }
      &__cards {
        cursor: pointer;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
        &__card {
          background: #fff;
          border-radius: 2px;
          &__min {
            color: #364670;
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 140%;
            padding: 10px 0 14px 0;
          }
          &__img {
            width: 100%;
          }
        }
      }
    }
  }
`;

export const Line = styled.div`
  background: ${(prop) => (prop.$type === "dark" ? "#99d8ff" : "#01426F")};
  height: 3px;
  width: 100%;
`;
