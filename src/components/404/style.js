import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 773px;
  height: 628px;
  border: 1px solid red;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Status = styled.div`
  display: inline-block;
  height: auto;
  color: #032cbc;
  font-size: 170px;
  font-weight: 700;
  border: 1px solid red;
`;
export const Desc = styled.div`
  font-size: 30px;
  color: #032cbc;
  font-weight: 600;
`;
