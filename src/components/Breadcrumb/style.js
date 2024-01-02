import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
  position: absolute;
  bottom: 0;
  transform: translateY(120%);
  z-index: 0;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ $type }) => ($type === "dark" ? "#a6a6a6" : "#fdfdfd")};
`;
export const Li = styled.li`
  list-style-position: inside;
  color: inherit;
`;

export const Link = styled(NavLink)`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: inherit;
  text-decoration: none;
`;
