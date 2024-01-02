import React from "react";
import { Container } from "./style";

const Input = ({ placeholder, onChange, onInput, type, style }) => {
  return (
    <Container
      placeholder={placeholder}
      onChange={onChange}
      onInput={onInput}
      type={type}
      style={style}
    />
  );
};

export default Input;
