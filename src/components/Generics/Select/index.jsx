import React from "react";
import { Container } from "./style";

const Select = ({ onChange, onSelect, height, options, defaultValue }) => {
  return (
    <Container
      onChange={onChange}
      onSelect={onSelect}
      height={height}
      options={options}
      defaultValue={defaultValue}
    />
  );
};

export default Select;
