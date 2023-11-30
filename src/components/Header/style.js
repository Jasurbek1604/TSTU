import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  align-items: center;
`;

export const Headers = styled.div`
  position: relative;
  background-color: #025f9b;
  ${flex}
  height: 50px;
  width: 100%;
  @media screen and (max-width: 1000px) {
    height: 100%;
    padding: 10px 0;
  }
`;

export const Wrapper = styled.div`
  ${flex}
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 1440px;
  padding: 0 110px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    padding: 0 20px;
  }
`;

export const Bg = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: ${({ isopen }) => (isopen === "false" ? "none" : "block")};
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    min-height: 100vh;
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
`;
export const Img = styled.img`
  background: ${({ last }) => last && "#fff"};
  border-radius: ${({ last }) => last && "5px"};
  padding: ${({ last }) => last && "2px"};
  height: 38px;
  @media screen and (max-width: 500px) {
    height: 25px;
  }
`;

export const Right = styled.div`
  ${flex};
  gap: 30px;
  @media screen and (max-width: 1100px) {
    gap: 10px;
  }
  @media screen and (max-width: 1000px) {
    transition: 0.5s;
    position: absolute;
    flex-direction: column;
    background: #025f9b;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 60%;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;
    z-index: 2;
    transform: ${({ isopen }) =>
      isopen === "false" ? "translateX(-100%)" : "translateX(0)"};
  }
`;
export const Link = styled(NavLink)`
  ${flex}
  gap:4px;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
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
  }
`;

export const Select = styled.select`
  border: none;
  background: transparent;
  color: #fff;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
