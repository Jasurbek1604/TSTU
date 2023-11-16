import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #025f9b;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 650px) {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 1300px;
  padding: 0 50px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 950px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 850px) {
    justify-content: flex-end;
  }
  @media screen and (max-width: 650px) {
    justify-content: center;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  padding: 10px;
  @media (max-width: 1100px) {
    gap: 10px;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 1100px) {
    gap: 10px;
  }
  @media screen and (max-width: 650px) {
    gap: 30px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 1100px) {
    gap: 10px;
  }
  @media screen and (max-width: 850px) {
    transition: 1s;
    display: ${({ isopen }) => (isopen === "true" ? "block" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    background: black;
    width: 70%;
    height: 100vh;
  }
`;

export const Logo = styled.img`
  height: 100%;
  @media screen and (max-width: 650px) {
    height: ${(props) => (props.h ? "100%" : "30px")};
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 3px;
  color: #fff;
  @media screen and (max-width: 950px) {
    font-size: 14px;
  }
`;
export const Logos = styled(NavLink)`
  background: ${(props) => props.white && "#fff"};
  border-radius: 3px;
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
`;
export const Menu = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 850px) {
    display: block;
  }
  @media screen and (max-width: 650px) {
    top: 15px;
  }
`;
