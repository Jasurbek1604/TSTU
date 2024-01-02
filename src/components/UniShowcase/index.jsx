import React from "react";
import { Container } from "./style";

const UniShowcase = ({ data }) => {
  return (
    <Container className="container">
      <div className="wrapper">
        <Container.Title>{data?.title}</Container.Title>
      </div>
    </Container>
  );
};

export default UniShowcase;
