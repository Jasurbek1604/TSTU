import React from "react";
import { Container } from "./style";

const Input = ({ placeholder, onChange, onInput, type, ref }) => {
  return (
    <Container
      placeholder={placeholder}
      onChange={onChange}
      onInput={onInput}
      ref={ref}
      type={type}
    />
  );
};

export default Input;
