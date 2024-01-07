import styled from "styled-components";
import bg from "../../assets/ARM/bg.png";
import { Button } from "../../components/Generics";
export const Showcase = styled.div`
  background: url(${bg});
  background-position: 30px;
  background-size: cover;
`;

export const Content = styled.div`
  height: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
`;

Content.Title = styled.div`
  color: #fff;
  font-size: 46px;
  width: 60%;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

Content.Btn = styled(Button)`
  padding: 15px 20px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-top: 22px;
`;
