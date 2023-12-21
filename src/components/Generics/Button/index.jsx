import React from "react";
import { Container } from "./style";

const Button = ({
  children,
  width,
  height,
  padding,
  margin,
  type,
  fontSize,
  radius,
}) => {
  return (
    <Container
      width={width}
      height={height}
      $padding={padding}
      margin={margin}
      type={type}
      fontSize={fontSize}
      radius={radius}
    >
      {children}
    </Container>
  );
};

export default Button;
