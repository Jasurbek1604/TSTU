import { Select } from "antd";
import styled from "styled-components";

export const Container = styled(Select)`
  border-radius: 4px;
  height: ${({ height }) => `${height}px` || "40px"};
`;
