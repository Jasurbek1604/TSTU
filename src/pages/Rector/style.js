import styled from "styled-components";
import { Button } from "../../components/Generics";

export const Content = styled.div`
  margin: 50px 0;
  .content {
    display: flex;
    justify-content: space-between;
    &__left {
      width: 40%;
      height: 650px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &__title {
        color: var(--black);
        font-size: 25.794px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        margin-bottom: 30px;
        &__span {
          color: var(--titleDark);
        }
      }
      &__img {
        width: 100%;
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
          color: var(--titleDark);
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 140%;
          cursor: pointer;
        }
      }
      &__desc {
        color: var(--date);
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

export const Btn = styled(Button)`
  width: 126px;
  padding: 16px 32px;
`;

export const Item = styled.div`
  opacity: ${({ type }) => (type === "true" ? 1 : 0.7)};
`;
