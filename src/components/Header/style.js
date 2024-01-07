import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  background-color: var(--bgSidebar);
  min-height: 50px;
  padding: 7px 0;
  @media (max-width: 1000px) {
    height: auto;
    padding: 11px 0;
  }
`;

export const Wrapper = styled.div`
  ${flex}
  justify-content: space-between;
`;

export const Bg = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: ${({ $isopen }) => ($isopen === "false" ? "none" : "block")};
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`;

export const Left = styled.div`
  ${flex}
  gap:20px;
  @media screen and (max-width: 1100px) {
    gap: 10px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const Div = styled.div`
  ${flex}
  gap:20px;
  @media screen and (max-width: 1100px) {
    gap: 10px;
  }
  @media screen and (max-width: 500px) {
    img {
      width: auto;
      height: 28px;
    }
  }
`;
export const Img = styled.img`
  background: ${(props) => props.$last && "var(--white)"};
  border-radius: ${(props) => props.$last && "5px"};
  padding: ${(props) => props.$last && "2px"};
  @media screen and (max-width: 500px) {
    height: 32px;
    width: 129px;
  }
`;

export const Right = styled.div`
  ${flex};
  gap: 30px;
  @media screen and (max-width: 1200px) {
    gap: 10px;
  }
  @media screen and (max-width: 1000px) {
    transition: 0.5s;
    position: fixed;
    flex-direction: column;
    background: var(--bgSidebar);
    top: 0;
    left: 0;
    height: 100%;
    width: 70%;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;
    z-index: 2;
    transform: ${({ $isopen }) =>
      $isopen === "false" ? "translateX(-100%)" : "translateX(0)"};
  }
`;
export const Link = styled(NavLink)`
  ${flex}
  gap:4px;
  font-weight: 400;
  font-size: 18px;
  color: var(--white);
  text-decoration: none;
  @media screen and (max-width: 1100px) {
    font-size: 16px;
  }
`;

export const Menus = styled.div`
  width: 70px;
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

export const Menu = styled.img`
  cursor: pointer;
  width: 25px;
`;

export const Lang = styled.div`
  width: 100px;
  display: none;

  @media screen and (max-width: 1000px) {
    ${flex}
    justify-content: flex-end;
  }
`;
export const Icon = styled.img`
  width: ${({ x }) => x && "20px"};
  cursor: ${({ x }) => x && "pointer"};
  position: ${({ x }) => x && "absolute"};
  right: ${({ x }) => x && "30px"};
  display: ${({ x }) => x && "none"};
  @media screen and (max-width: 1000px) {
    display: ${({ x }) => x && "block"};
    width: 18px;
  }
`;

export const Select = styled.select`
  border: none;
  background: transparent;
  color: var(--white);
  outline: none;
  cursor: pointer;
  font-size: 16px;
`;
