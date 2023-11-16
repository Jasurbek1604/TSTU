import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 80px;
  background-color: transparent;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 1300px;
  padding: 0 50px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.25s ease-in-out;
  &:hover {
    border-bottom: 2px solid #fff;
  }
`;
export const Select = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
  transition: 0.3s;
  padding: 5px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  &:hover {
    background: #fff;
    color: #01426f;
  }
`;

export const Img = styled.img`
  width: 30px;
`;
export const Menu = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Arrow = styled.img`
  width: ${({ lang }) => (lang ? "20px" : "25px")};
`;
