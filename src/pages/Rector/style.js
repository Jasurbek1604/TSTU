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
  }
`;
