import React from "react";
import { Container, Content } from "./style";

const Showcase = ({ $bg, title, button }) => {
  return (
    <Container $bg={$bg}>
      <div className="container">
        <div className="wrapper">
          <Content>
            <Content.Title>{title || "title"}</Content.Title>
            <Content.Btn type="primary">{button || "button"}</Content.Btn>
          </Content>
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
