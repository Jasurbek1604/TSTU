import styled from "styled-components";

const Color = ({ type }) => {
  switch (type) {
    case "primary":
      return {
        background: "#507CFF",
        color: "var(--white)",
      };
  }
};

export const Container = styled.button`
  /* height: ${({ height }) => (height ? `${height}px` : "52px")};
  width: ${({ width }) => (width ? `${width}px` : "126px")}; */
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  font-weight: ${({ weight }) => (weight ? weight : 500)};
  padding: ${({ padding }) => (padding ? padding : "10px")};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : "5px")};
  border: none;
  cursor: pointer;
  ${Color}
  font-family: 'Poppins', sans-serif;
`;
