import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bg from "../../assets/images/footer.png";
import mobil from "../../assets/images/mobilBg.png";

export const Container = styled.div`
  background: ${window.innerWidth > 600 ? `url(${bg})` : `url(${mobil})`};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 372px;
  @media (max-width: 850px) {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  @media (max-width: 1100px) {
    gap: 0px;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    padding: 20px 20px;
    gap: 20px;
  }
`;

export const Left = styled.div`
  width: 320px;
  @media (max-width: 850px) {
    width: 100%;
  }
`;
export const Title = styled.div`
  color: #fff;
  font-size: 30.445px;
  font-style: normal;
  font-weight: 600;
  white-space: nowrap;
  line-height: normal;
  margin-bottom: 25px;
  @media (max-width: 850px) {
    font-size: 22px;
    margin-bottom: 15px;
  }
`;
export const Icons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  @media (max-width: 850px) {
    margin-bottom: 15px;
  }
`;

export const P = styled.p`
  color: #fff;
  font-size: 14.461px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 12px;
  max-width: 350px;
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
  width: calc(100% - 300px);
  gap: 20px;
  @media (max-width: 850px) {
    width: 100%;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ first }) => (first ? "14px" : "8px")};
  width: 200px;
  @media (max-width: 850px) {
    gap: ${({ first }) => (first ? "10px" : "5px")};
  }
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
  @media (max-width: 850px) {
    font-size: 12px;
  }
`;
export const T = styled.div`
  color: #fff;
  margin-bottom: 7px;
  font-size: 19.281px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 850px) {
    font-size: 14px;
  }
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
