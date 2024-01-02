import styled from "styled-components";

export const Container = styled.input`
  border: 1px solid #cad1e1;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 15px;
  outline: none;
  width: 100%;
  color: #363940;
  &:focus {
    border: 1px solid #507cff;
  }
  &::placeholder {
    color: #95a1bb;
  }
`;
