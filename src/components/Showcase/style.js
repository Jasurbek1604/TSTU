import styled from "styled-components";
import bg from "../../assets/images/bgBlue.png";

export const Container = styled.div`
  background-image: url(${bg});
  height: calc(100vh - 50px);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 1300px;
  padding: 0 50px;
`;

export const Title = styled.h1`
  font-size: 80px;
  font-weight: 500;
  font-family: "Noto Serif", serif;
  color: #fff;
`;
