import styled, { keyframes } from "styled-components";

const anim = keyframes`
  from {
    bottom: 0;
  } to{
    bottom:-40px;
  }
`;

export const Contianer = styled.div`
  .item {
    transition: 0.4s;
    width: 100%;
    background: var(--white);
    position: relative;
    border-radius: 4px;
    border: ${({ border }) => border && `1px solid ${border}`};
    &__img {
      width: 100%;
      height: 225px;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
    }
    &__title {
      padding: 16px 16px 8px 16px;
      color: var(--titleDark);
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 133%;
    }
    &__p {
      color: var(--titleDark);
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
      bottom: -40px;
      height: 45px;
      display: flex;
      opacity: 0;
      z-index: -1;
      align-items: center;
      justify-content: center;
      border-radius: 0px 0px 3px 3px;
      background: linear-gradient(88deg, #0075ff 0.33%, #00b2ff 99.41%);
      color: var(--white);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 19px; /* 118.75% */
      letter-spacing: -0.48px;
    }
    &:hover {
      border: ${({ borderHover }) => borderHover && `1px solid ${borderHover}`};
      .item__button {
        opacity: 1;
        z-index: 2;
        animation: ${anim};
        animation-duration: 0.5s;
      }
    }
  }
`;
