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
import filter from "../../assets/images/filterBg.png";
import bggg from "../../assets/images/bggggg.png";

export const Icons = styled.div``;
const iconStyle = css`
  margin-bottom: 14px;
  width: 70px;
  height: 70px;
  @media only screen and (min-width: 600px) and (max-width: 1023px) {
    width: 60px;
    height: 60px;
    margin-bottom: 0px;
  }
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
Icons.Int1 = styled(intIcon1)``;
Icons.Int2 = styled(intIcon2)``;
Icons.Int3 = styled(intIcon3)``;
Icons.Int4 = styled(intIcon4)``;
Icons.ArrowLight = styled(lightArrow)``;
Icons.ArrowDark = styled(bigDarkArrow)``;

const scrollStyle = css`
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #d2d2d2;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--bgHover);
  }
`;

export const About = styled.div`
  background: url(${bggg});
  color: var(--white);
  text-align: center;
  padding: 37px 0 30px;
  .about {
    &__title {
      color: var(--titleLight);
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
    }
    &__desc {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      padding: 20px 160px 0;
      color: var(--titleLight);
    }
    &__boxes {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 40px 0;
      gap: 80px;
      &__box {
        &__count {
          color: var(--white);
          font-size: 23.771px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%;
        }
        &__min {
          font-size: 12.678px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;
        }
      }
    }
    &__button {
      font-size: 16px;
      border-radius: 7px;
      padding: 7px 38px;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 1023px) {
    .about {
      &__desc {
        padding: 10px 15px;
      }
      &__boxes {
        flex-wrap: wrap;
        margin: 0;
        gap: 0;
        &__box {
          width: 30%;
          margin: 20px 0;
        }
      }
    }
  }
  @media only screen and (max-width: 599px) {
    .about {
      display: flex;
      flex-direction: column;
      &__title {
        text-align: start;
        border-left: 3px solid var(--titleLight);
        padding-left: 8px;
        font-size: 22px;
        order: 1;
      }
      &__desc {
        text-align: start;
        order: 2;
        padding: 0;
        font-size: 16px;
        padding-top: 10px;
      }
      &__boxes {
        flex-wrap: wrap;
        margin: 0;
        order: 4;
        gap: 0;
        &__box {
          text-align: center;
          width: 50%;
          margin: 15px 0;
        }
      }
      &__button {
        order: 3;
        display: inline-block;
        width: 165px;
        font-size: 12px;
        padding: 5px;
        margin-top: 20px;
      }
    }
  }
`;
export const Layout = styled.div`
  margin: 40px 0 20px;
  .flex {
    display: flex;
    margin: 20px 0;
    gap: 20px;
    &__item {
      display: flex;
      width: 50%;
      gap: 20px;
      &__box {
        border-radius: 3px;
        border: 1px solid var(--date);
        background: var(--titleLight);
        height: 100%;
        &__img {
          width: 100%;
          height: 60%;
          border-top-right-radius: 3px;
          border-top-left-radius: 3px;
        }
        &__fart {
          padding: 5px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          .divv {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left {
              color: var(--bgHover);
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
              line-height: 140%;
            }
            .date {
              color: var(--minDate);
              font-size: 14px;
              font-style: normal;
              font-weight: 600;
              line-height: 140%;
            }
          }
          .fartTitle {
            color: var(--titleDark);
            font-size: 17px;
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
          }
        }
      }
    }
    &__large {
      width: 50%;
      border-radius: 3px;
      background: var(--titleLight);
      position: relative;
      &__img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 315px 1fr 1fr;
    grid-template-rows: 527px;
    grid-auto-flow: column;
    grid-gap: 7px;
    margin: 30px 0;
    &__item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 7px;
      &__box {
        position: relative;
        height: 260px;
        &__img {
          width: 100%;
          height: 100%;
          border-radius: 3px;
        }
      }
    }
    &__large {
      position: relative;
      &__img {
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
      &__news {
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: scroll;
        height: 100%;
        padding-right: 17px;
        ${scrollStyle}
        &__item {
          padding: 13px 17px;
          border-radius: 1px;
          border: 1px solid #e5e7eb;
          background: var(--grayBg);
          display: flex;
          justify-content: space-between;
          .item-left {
            display: flex;
            flex-direction: column;
            color: var(--titleDark);
            text-align: center;
            font-feature-settings: "clig" off, "liga" off;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            font-size: 24px;
            padding: 11px;
            border-right: 1px solid var(--date);

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
              color: var(--titleDark);
              font-size: 15px;
              font-style: normal;
              font-weight: 600;
              line-height: 140%;
            }
            &__subtitle {
              color: var(--date);
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 110%;
              text-transform: capitalize;
            }
          }
          .item-right {
            &__link {
              color: var(--bgHover);
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 110%;
              text-transform: capitalize;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
  .absolute {
    position: absolute;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    left: 0;
    bottom: 0;
    width: 100%;
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
      color: var(--titleLight);
      font-weight: 400;
      font-size: 15px;
      span {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
    .asbTitle {
      font-size: 19px;
      font-style: normal;
      font-weight: 700;
      display: flex;
      align-items: center;
      color: var(--titleLight);
    }
    .absP {
      padding-left: 10px;
      color: var(--titleLight);
      font-size: 14px;
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
    background: var(--bgHover);
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
      color: var(--white);
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 18.2px; /* 91% */
    }
    &__group {
      color: var(--white);
      text-shadow: 0px 2px 12px var(--black);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 18.2px; /* 113.75% */
    }
    &__p {
      margin-top: 10px;
      color: var(--white);
      text-shadow: 0px 2px 12px var(--black);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 18.2px;
    }
  }
  @media only screen and (max-width: 1023px) {
    .flex {
      flex-wrap: wrap;
      &__item {
        order: 2;
        width: 100%;
        justify-content: space-between;
        &__box {
          width: 50%;
        }
      }
      &__large {
        order: 1;
        width: 100%;
      }
    }
    .grid {
      margin: 22px 0;
      grid-template-columns: auto;
      grid-template-rows: ${({ $type }) =>
        $type === "talaba" ? " 260px 527px  460px" : "527px 260px 340px"};
      &__item {
        grid-column: 1 / 2;
        flex-direction: row;
        &__box {
          width: 50%;
        }
      }
      &__large {
        grid-column: 1 / 2;
      }
    }
  }
  @media only screen and (max-width: 599px) {
    .flex {
      flex-wrap: wrap;
      &__item {
        order: 2;
        width: 100%;
        justify-content: space-between;
        flex-direction: column;
        gap: 15px;
        &__box {
          display: flex;
          width: 100%;
          &__img {
            width: 35%;
            height: 100%;
          }
        }
      }
      &__large {
        order: 1;
        width: 100%;
      }
    }
    .grid {
      margin: 15px 0;
      grid-template-rows: ${({ $type }) =>
        $type === "talaba" ? " 527px 527px  460px" : "520px 527px 340px"};
      &__item {
        flex-direction: column;
        &__box {
          width: 100%;
        }
      }
      &__large {
        &__news {
          padding-right: 5px;
        }
      }
    }
    .absolute {
      .absTop {
        font-size: 14px;
      }
    }
    .student {
      padding: 20px;
      &__img {
      }
      &__name {
        font-size: 20px;
      }
      &__group {
        font-size: 16px;
      }
      &__p {
        margin-top: 10px;
        font-size: 16px;
      }
    }
  }
`;
export const Top = styled.div`
  .top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: ${(props) =>
      props.$type === "dark" ? "var(--titleLight)" : "var(--titleDark)"};
    &__title {
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 46.8px;
      padding-left: 10px;
      border-left: 3px solid
        ${(props) =>
          props.$type === "dark" ? "var(--titleLight)" : "var(--bgHover)"};
    }
    &__button {
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
        background: var(--btnBg);
        z-index: -1;
      }
    }
  }
  .subtitle {
    color: ${(props) =>
      props.$type === "dark" ? "var(--titleLight)" : "var(--titleDark)"};
    font-size: 20px;
    margin-top: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
  @media screen and (max-width: 1023px) {
    .top {
      &__title {
        font-size: 25px;
      }
      &__button {
        font-size: 15px;
      }
    }
    .subtitle {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 1023px) {
    .top {
      &__title {
        font-size: 22px;
      }
      &__button {
        font-size: 14px;
      }
    }
    .subtitle {
      font-size: 14px;
    }
  }
`;
export const DarkSection = styled.div`
  padding: 50px 0 90px;
  background: url(${bggg});
  background-repeat: no-repeat;
  background-size: cover;
  .tadqiqot {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 70px;
    &__item {
      text-align: center;
      width: 340px;
      &__title {
        color: var(--titleLight);
        text-align: center;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 46.8px;
        margin-bottom: 22px;
      }
      &__count {
        margin-top: 22px;
        color: var(--titleLight);
        text-align: center;
        font-size: 37px;
        font-style: normal;
        font-weight: 700;
        line-height: 46.8px; /* 126.486% */
      }
      &__p {
        color: var(--white);
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
  }
  @media only screen and (max-width: 776px) {
    padding: 20px 0 30px;
    .tadqiqot {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0;
    }
    .markaz {
      flex-direction: column;
      height: auto;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const InteraktiveCarts = styled.div`
  .first {
    background: var(--white);
    border-radius: 3px;
    height: 345px;
    margin: 50px 0 18px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    &__left {
      width: 390px;
      height: 225px;

      &__title {
        color: var(--titleDark);
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: 119%;
      }
    }
    &__right {
      display: flex;
      align-items: flex-end;
      &__macbook {
        max-width: 340px;
        max-height: 200px;
      }
      &__imac {
        max-width: 400px;
        max-height: 350px;
      }
    }
  }
  .second {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 22px;
    &__item {
      width: 25%;
      height: 243px;
      padding: 38px 24px 41px 45px;
      background: var(--white);
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      gap: 23px;
      &__title {
        color: var(--titleDark);
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 119%;
      }
    }
  }
  @media only screen and (max-width: 1023px) {
    .first {
      padding: 20px;
      &__left {
        padding: 0;
        width: 40%;
        &__title {
          font-size: 25px;
          margin-top: 10px;
        }
      }
      &__right {
        padding: 0;
        width: 60%;
        &__macbook {
          width: 40%;
          height: auto;
        }
        &__imac {
          width: 60%;
          height: auto;
        }
      }
    }
    .second {
      flex-wrap: wrap;
      gap: 0;
      &__item {
        margin: 10px 0;
        width: 48%;
      }
    }
  }
  @media only screen and (max-width: 599px) {
    .first {
      flex-wrap: wrap;
      height: auto;
      gap: 30px;
      margin: 25px 0 10px;
      &__left {
        width: 100%;
        display: flex;
        height: auto;
        gap: 20px;
        &__title {
          font-size: 20px;
        }
      }
      &__right {
        width: 100%;
      }
    }
    .second {
      margin-bottom: 20px;
      &__item {
        padding: 22px 19px;
        height: auto;
        width: 100%;
        flex-direction: row;
        align-items: center;
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
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid red;
    &__item {
      border-radius: 2.852px;
      border: 1px solid var(--date);
      background: var(--titleLight);
      max-width: 385px !important;
      &__img {
        width: 100%;
        height: 215px;
      }
      &__title {
        color: var(--titleDark);
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
  background: url(${filter});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0;
  margin-top: 30px;
  .faxriyAbs__img {
    width: 100%;
    min-height: 600px;
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
      color: var(--white);
      text-align: center;
      font-size: 25px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 35px */
    }
    &__sub {
      color: var(--white);
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
    &__p {
      padding: 10px 20px;
      color: var(--white);
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 28px */
    }
  }
  @media only screen and (max-width: 1023px) {
    .faxriyAbs__img {
      width: 100%;
      min-height: 500px;
    }
    .content {
      &__img {
        width: 200px;
        height: 200px;
      }
      &__name {
        font-size: 22px;
      }
      &__sub {
        font-size: 17px;
      }
      &__p {
        font-size: 14px;
      }
    }
  }
  @media only screen and (max-width: 599px) {
    padding: 20px 0;
    .faxriyAbs__img {
      width: 100%;
      min-height: 470px;
    }
    .content {
      &__img {
        width: 156px;
        height: 156px;
      }
      &__name {
        font-size: 22px;
      }
      &__sub {
        font-size: 17px;
      }
      &__p {
        font-size: 14px;
        padding: 0;
      }
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
        background: var(--fakBg);
        &__line {
          background: var(--white);
          width: 2px;
          height: 40px;
        }
        &__title {
          transition: 0.3s;
          color: var(--fakColor);
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 140%;
        }
        &:hover {
          background: var(--bgHover);
          .fak-left__content__item__title {
            color: var(--white);
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
      background: var(--fakBg);
      padding: 18px;
      &__title {
        margin-bottom: 20px;
        color: var(--fakColor);
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
          background: var(--white);
          border-radius: 2px;
          &__min {
            color: var(--kafColor);
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
  @media only screen and (max-width: 1023px) {
    height: 750px;
    grid-template-columns: 1fr;
    .fak-left {
      grid-column: 1/2;
    }
    .wrap {
      grid-column: 1/2;
    }
  }
  @media only screen and (max-width: 599px) {
    .fak-left {
      &__content {
        padding-left: 5px;
        &__item {
          &__title {
            font-size: 16px;
          }
        }
      }
    }
    .wrap {
      padding-right: 5px;
      .fak-right {
        &__cards {
          grid-template-columns: repeat(2, 1fr);
          &__card {
            &__min {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;

export const Line = styled.div`
  background: ${(prop) =>
    prop.$type === "dark" ? "#99d8ff" : "var(--titleDark)"};
  height: 3px;
  width: 100%;
`;
