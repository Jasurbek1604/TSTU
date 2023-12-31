import styled, { css } from "styled-components";
import arrowDown from "../../assets/icons/down.svg?react";
import arrowUp from "../../assets/icons/up.svg?react";
import earth from "../../assets/icons/earth.svg?react";
import menu from "../../assets/icons/menu.svg?react";

export const Icons = styled.div``;
Icons.Down = styled(arrowDown)``;
Icons.Up = styled(arrowUp)``;
Icons.Earth = styled(earth)``;
Icons.Menu = styled(menu)``;

export const Container = styled.div`
  position: absolute;
  top: 26px;
  left: 0;
  width: 100%;
`;

const flex = css`
  display: flex;
  align-items: center;
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
  gap:30px;
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
  gap: 10px;
  &:hover {
    background-color: ${({ $select }) => $select === "true" && "#fff"};
    color: ${({ $select }) => $select === "true" && "#01426f"};
  }
`;
