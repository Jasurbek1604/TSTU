import styled, { css } from "styled-components";
import arrowDown from "../../assets/icons/down.svg?react";
import arrowUp from "../../assets/icons/up.svg?react";
import earth from "../../assets/icons/earth.svg?react";
import menu from "../../assets/icons/menu.svg?react";

export const Icons = styled.div``;
Icons.Down = styled(arrowDown)`
  @media (max-width: 1250px) {
    width: 10px;
  }
`;
Icons.Up = styled(arrowUp)`
  @media (max-width: 1250px) {
    width: 10px;
  }
`;
Icons.Earth = styled(earth)`
  @media (max-width: 1250px) {
    width: 30px;
  }
`;
Icons.Menu = styled(menu)`
  @media (max-width: 1250px) {
    width: 20px;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 26px;
  left: 0;
  width: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const flex = css`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: relative;
  transition: 30ms;
`;

export const Content = styled.div`
  ${flex}
  justify-content: space-between;
`;
export const Left = styled.div`
  ${flex}
`;
export const Right = styled.div`
  ${flex}
  @media (max-width: 1250px) {
    & > div {
      gap: 2px;
    }
  }
`;
export const Item = styled.div`
  transition: 0.3s;
  color: #fff;
  font-size: 18.147px;
  font-style: normal;
  font-weight: 600;
  border-radius: 3px 3px 0 0;
  padding: 6.5px 9px 8.5px;
  ${flex}
  cursor:pointer;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  gap: 10px;
  &:hover {
    background-color: ${({ $select }) => $select === "true" && "#fff"};
    color: ${({ $select }) => $select === "true" && "#01426f"};
    border-bottom: ${({ $select }) => $select === "false" && "2px solid #fff"};
  }
  @media (max-width: 1250px) {
    font-size: 16px;
    padding: 5px 7px;
    gap: 5px;
  }
`;

export const HoverItem = styled.div`
  background: #fff;
  padding: 22px;
  height: 500px;
  width: 500px;
  position: absolute;
  top: 40px;
  right: 0;
`;
