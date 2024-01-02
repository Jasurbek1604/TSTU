import styled from "styled-components";

export const Content = styled.div`
  margin: 50px 0;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__left {
      width: 40%;
      &__title {
        color: #000;
        font-size: 25.794px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        margin-bottom: 30px;
        &__span {
          color: #01426f;
        }
      }
      &__img {
        width: 93%;
        img {
          width: 100%;
        }
      }
    }
    &__right {
      width: 58%;
      &__top {
        display: flex;
        align-items: "center";
        justify-content: space-between;
        &__item {
          color: #01426f;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 140%;
        }
      }
      &__desc {
        color: #a6a6a6;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        padding: 4px 0 30px;
      }
      &__form {
        display: flex;
        flex-direction: column;
        gap: 9px;
        &__item {
          display: flex;
          align-items: center;
          gap: 27px;
        }
      }
    }
  }
`;
