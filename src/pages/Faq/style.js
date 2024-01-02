import { Collapse } from "antd";
import styled from "styled-components";

export const Content = styled.div`
  margin: 27px 0 50px;
  .title {
    color: #363940;
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 43px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 40px;
    &__left {
      border-radius: 4px;
      border: 1px solid #e1e5ee;
      width: 35%;
      padding: 30px;
      min-height: 365px;
    }
    &__right {
      border-radius: 4px;
      border: 1px solid #e1e5ee;
      width: 65%;
      padding: 30px;
      min-height: 365px;
      &__title {
        color: #363940;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%;
        margin-bottom: 14px;
      }
      &__p {
        color: #363940;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        text-transform: capitalize;
      }
    }
  }
  .pp {
    color: #363940;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;
