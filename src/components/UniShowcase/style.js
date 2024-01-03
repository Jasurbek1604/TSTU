import styled, { keyframes } from "styled-components";
import uniShow from "../../assets/images/uniShow.png";

const anim = keyframes`
  from {
    background-size: 140% 140%;
  } 
  to{
    background-size: 100% 100%;
  }
`;

export const Container = styled.div`
  background: url(${uniShow});
  background-repeat: no-repeat;
  height: 350px;
  background-size: 100% 100%;
  animation: ${anim};
  animation-duration: 1.5s;
`;

Container.Title = styled.div`
  color: var(--white);
  font-size: 70px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 80%;
`;
