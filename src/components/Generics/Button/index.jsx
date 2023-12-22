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
  className,
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
      className={className}
    >
      {children}
    </Container>
  );
};

export default Button;
