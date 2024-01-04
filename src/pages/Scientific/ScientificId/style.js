import styled from "styled-components";

export const Content = styled.div`
  margin: 35px 0;
`;
Content.Title = styled.div`
  color: ${({ $first }) => ($first ? "var(--black)" : "var(--titleDark)")};
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
`;
Content.Img = styled.img`
  width: 100%;
  height: 100%;
  margin: ${({ $first }) => $first && "24px 0"};
`;

Content.P = styled.div`
  color: var(--titleDark);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin: 10px 0;
`;

Content.Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin: 15px 0;
`;

Content.Li = styled.li`
  color: #173261;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin: 10px 0;
`;
