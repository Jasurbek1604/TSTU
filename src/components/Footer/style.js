import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 372px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
`;

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Left = styled.div`
  width: 320px;
`;
export const Title = styled.div`
  color: #fff;
  font-size: 30.445px;
  font-style: normal;
  font-weight: 600;
  white-space: nowrap;
  line-height: normal;
  margin-bottom: 25px;
`;
export const Icons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
`;
export const Icon = styled.img`
  height: 32px;
`;
export const P = styled.p`
  color: #fff;
  font-size: 14.461px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 12px;
`;
export const Media = styled.div`
  display: flex;
  gap: 34px;
`;
export const Logo = styled.img`
  width: 30px;
  height: 30px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 100px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ first }) => (first ? "14px" : "8px")};
  width: 200px;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;

  color: #fff;
  font-size: 16.068px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
`;
export const T = styled.div`
  color: #fff;
  margin-bottom: 7px;
  font-size: 19.281px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const I = styled.img`
  width: 20px;
  height: 20px;
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  background: transparent;
  border-radius: 4.017px;
  border: 0.803px solid #fff;
  width: 160px;
  height: 30px;
  padding: 5px 30px 5px 12px;
  align-items: flex-start;
  gap: 10px;
  white-space: nowrap;
  flex-shrink: 0;

  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;
`;
