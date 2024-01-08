import styled from "styled-components";
import { Button } from "../../../components/Generics";
import arrow from "../../../assets/icons/arrow-light.svg?react";

export const IlmiyMarkaz = styled.div`
  display: flex;
  gap: 13px;
`;
export const Malumot = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;
Malumot.Left = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 50%;
`;
Malumot.Img = styled.img`
  width: 100%;
  height: 230px;
  grid-row: ${({ $row }) => $row};
  grid-column: ${({ $col }) => $col};
`;
Malumot.Right = styled.div`
  width: 55%;
`;
Malumot.Div = styled.div`
  margin: 50px 0;
  .title {
    color: #1c1c1c;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .p {
    color: #585757;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
`;
export const Orinbosar = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
`;
export const Kafedra = styled.div`
  display: grid;
  gap: 10px;
  margin: 10px 0;
`;
Kafedra.Item = styled.div`
  grid-column: ${({ $col }) => $col};
  grid-row: ${({ $row }) => $row};
  width: 100%;
  height: 100%;
  background: ${({ $bg }) => `url(${$bg})`};
  background-repeat: no-repeat;
  height: ${({ height }) => `${height}px`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
`;
Kafedra.Content = styled.div`
  width: 100%;
  height: 50%;
  padding: 15px 18px;
  display: flex;
  align-items: end;
  color: var(--white);
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
`;
Kafedra.Arrow = styled(arrow)``;
