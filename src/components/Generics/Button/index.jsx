import React from "react";
import { Container } from "./style";

const Button = ({ children, width, height, padding, margin, type }) => {
  return (
    <Container
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      type={type}
    >
      {children}
    </Container>
  );
};

export default Button;
